import { useEffect, useReducer, useRef, useCallback } from 'react';
import { createSilentEngine, createWebAudioEngine, AudioEngine } from './audioEngine';

export type Pad = 0|1|2|3; // 0:green,1:red,2:yellow,3:blue
type Phase = 'idle'|'showing'|'input'|'checking'|'win'|'loss';

interface State {
  phase: Phase;
  level: number;
  sequence: Pad[];
  inputIndex: number;
  highlight: Pad|null;
  strict: boolean;
  difficulty: 'easy'|'medium'|'hard';
  score: number;
  best: number;
  soundOn: boolean;
}

type Action =
  | { type:'START' }
  | { type:'SET_HIGHLIGHT', pad: Pad|null }
  | { type:'NEXT_LEVEL' }
  | { type:'SET_PHASE', phase: Phase }
  | { type:'SET_INPUT_INDEX', value:number }
  | { type:'SET_CONFIG', strict?:boolean, difficulty?:State['difficulty'], soundOn?: boolean }
  | { type:'ADD_SCORE', value:number }
  | { type:'SET_BEST', value:number };

const DIFF = { easy:{show:700,gap:300}, medium:{show:500,gap:200}, hard:{show:350,gap:120} } as const;

function reducer(s:State, a:Action):State {
  switch(a.type){
    case 'START': return { ...s, level:1, score:0, sequence:[Math.floor(Math.random()*4) as Pad], inputIndex:0, phase:'showing' };
    case 'SET_HIGHLIGHT': return { ...s, highlight:a.pad };
    case 'NEXT_LEVEL': return { ...s, level:s.level+1, sequence:[...s.sequence, Math.floor(Math.random()*4) as Pad], inputIndex:0, phase:'showing' };
    case 'SET_PHASE': return { ...s, phase:a.phase };
    case 'SET_INPUT_INDEX': return { ...s, inputIndex:a.value };
    case 'SET_CONFIG': return { ...s, strict:a.strict??s.strict, difficulty:a.difficulty??s.difficulty, soundOn:a.soundOn??s.soundOn };
    case 'ADD_SCORE': return { ...s, score: s.score + a.value };
    case 'SET_BEST': return { ...s, best: a.value };
    default: return s;
  }
}

export function useSimonGame(){
  const [state, dispatch] = useReducer(reducer, {
    phase:'idle', level:0, sequence:[], inputIndex:0, highlight:null,
    strict:false, difficulty:'easy', score:0, best:0, soundOn:true
  } satisfies State);

  const timerRef = useRef<number|undefined>(undefined);
  const highlightTimerRef = useRef<number|undefined>(undefined);
  const showRunIdRef = useRef(0);
  const audioRef = useRef<AudioEngine>(typeof window !== 'undefined' ? createWebAudioEngine() : createSilentEngine());

  // Mostrar sequência (robusto contra StrictMode e corridas)
  useEffect(()=>{
    if(state.phase!=='showing' || state.sequence.length===0) return;
    const {show,gap} = DIFF[state.difficulty];
    const runId = ++showRunIdRef.current; // identifica esta execução
    let i = 0;
    const run = () => {
      if (runId !== showRunIdRef.current) return; // abortar execução antiga
      if(i>=state.sequence.length){
        dispatch({type:'SET_PHASE', phase:'input'});
        return;
      }
      const pad = state.sequence[i];
      dispatch({type:'SET_HIGHLIGHT', pad});
      if(state.soundOn) audioRef.current.playPad(pad);
      // limpar highlight anterior
      if (highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);
      highlightTimerRef.current = window.setTimeout(()=>{
        if (runId !== showRunIdRef.current) return;
        dispatch({type:'SET_HIGHLIGHT', pad:null});
      }, show);
      i++;
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(run, show+gap);
    };
    run();
    return ()=> {
      if(timerRef.current) window.clearTimeout(timerRef.current);
      if(highlightTimerRef.current) window.clearTimeout(highlightTimerRef.current);
    };
  }, [state.phase, state.sequence, state.difficulty, state.soundOn]);

  // Persistência best score
  useEffect(()=>{
    if (typeof window === 'undefined') return;
    const best = Number(localStorage.getItem('simon-best')||'0');
    dispatch({type:'SET_BEST', value: best});
  },[]);

  useEffect(()=>{
    if (typeof window === 'undefined') return;
    if (state.score > state.best) localStorage.setItem('simon-best', String(state.score));
  }, [state.score, state.best]);

  const playPad = useCallback((id:Pad) => {
    // Só permitir cliques durante a fase 'input'
    if(state.phase !== 'input') return;
    
    const expected = state.sequence[state.inputIndex];

    // Feedback visual curto do clique do usuário
    dispatch({type:'SET_HIGHLIGHT', pad: id});
    window.setTimeout(()=>dispatch({type:'SET_HIGHLIGHT', pad:null}), 120);

    if(id===expected){
      dispatch({type:'ADD_SCORE', value:10});
      if(state.soundOn) audioRef.current.playPad(id);
      dispatch({type:'SET_INPUT_INDEX', value: state.inputIndex+1});
      // Final da rodada: aguardar antes de iniciar próxima sequência
      if(state.inputIndex+1 === state.sequence.length){
        dispatch({type:'ADD_SCORE', value:50});
        dispatch({type:'SET_PHASE', phase:'checking'});
        setTimeout(()=>dispatch({type:'NEXT_LEVEL'}), 800);
      }
    } else {
      if(state.soundOn) audioRef.current.fail();
      // Encerrar o jogo imediatamente ao errar
      dispatch({type:'SET_PHASE', phase:'loss'});
      dispatch({type:'SET_HIGHLIGHT', pad:null});
    }
  }, [state.phase, state.sequence, state.inputIndex, state.soundOn]);

  return { state, dispatch, playPad };
}


