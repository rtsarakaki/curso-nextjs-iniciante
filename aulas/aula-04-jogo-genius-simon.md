# 🎯 Aula 4: Jogo Genius/Simon Rítmico

## 🎮 O que vamos criar
Um jogo "Genius/Simon" moderno com layout circular autêntico, feedback visual e sonoro, níveis de dificuldade, modo strict, acessibilidade, atalhos de teclado e persistência de dados.

## 📚 O que vamos aprender
- Custom Hook avançado (`useSimonGame`) com máquina de estados
- `useReducer` para estados do jogo (idle → showing → input → checking → win/loss)
- Timers (`setTimeout`/`setInterval`) com cleanup
- Web Audio API (sons por pad) + fallback silencioso
- Acessibilidade (teclado, foco, `aria-live`) e responsividade
- Persistência (Local Storage) para recordes, opções e progresso
- Aplicação prática de SOLID e componentização limpa
- **Layout circular autêntico** do Genius original
- **Atalhos de teclado** (setas, WASD, números)
- **Engine de áudio robusto** sem distorção
- **Interface retro** com disco circular e controles estilizados

## 🛠️ Tecnologias Utilizadas
- Next.js (App Router), React 18, TypeScript
- Tailwind CSS, `lucide-react` (ícones)
- Web Audio API (ou fallback mudo)

## 🧱 Arquitetura (SOLID)
- **Componente Principal**: `SimonGame.tsx` (SRP: orquestra todo o jogo)
- Hook: `useSimonGame` (SRP: sequência, verificação, nível, score, transições)
- Componentes:
  - `Board` (renderiza pads e feedback visual)
  - `Controls` (start/pause, dificuldade, strict, som on/off)
  - `HUD` (nível, melhor score, tempo, status)
  - `InputHandler` (captura teclado/cliques, bloqueia durante showing)
  - `Stats` (histórico local, streaks, médias)
- Abstrações (DIP/ISP):
  - `AudioEngine` (playTone, success, fail) com implementação WebAudio e fallback mudo
  - `GameConfig` (OCP: fácil/médio/difícil/strict sem alterar o core)

### 📁 Estrutura de Pastas
```
src/aulas/aula-04/
├── hooks/
│   └── useSimonGame.ts
├── components/
│   ├── Board.tsx
│   ├── Controls.tsx
│   ├── HUD.tsx
│   ├── InputHandler.tsx
│   └── Stats.tsx
├── SimonGame.tsx (componente principal)
└── page.tsx (em src/app/aula-04/page.tsx)
```

## 🧰 Preparação do Ambiente
1) Garantir dependências: `lucide-react` e Tailwind já instalados
2) Criar rota: `src/app/aula-04/page.tsx`
3) Criar componente principal: `src/aulas/aula-04/SimonGame.tsx`
4) **Layout retro** com fundo escuro e gradiente
5) **Disco circular** envolvendo os pads
6) **Atalhos de teclado** implementados
7) Padrão de imports absolutos `@/aulas/aula-04/...`

## 🧩 Game Design
- **Board circular** autêntico do Genius original
- **Layout em disco** com pads posicionados como no original
- **Atalhos de teclado**: Setas (↑→↓←), WASD, números (1-4)
- Dificuldades (via `GameConfig`):
  - Fácil: +1 por rodada, exibição 700ms, intervalo 300ms, 3 tentativas
  - Médio: 500ms, 200ms, 2 tentativas
  - Difícil: 350ms, 120ms, 1 tentativa
  - Strict (toggle): errou → volta ao nível 1
- Pontuação: +10 por passo correto, +50 por rodada concluída, multiplicador por streak
- **Interface retro** com fundo escuro e controles estilizados

## 📝 Passo a Passo (Evolutivo)

### Passo 1: Rota, Layout e Board estático
- Criar `src/app/aula-04/page.tsx` **limpa** (apenas importa SimonGame)
- Criar `src/aulas/aula-04/SimonGame.tsx` com **layout retro** e fundo escuro
- **Board circular** autêntico do Genius original
- **Disco envolvendo** os pads com gradiente
- **Controles estilizados** com botão START circular
- Explicar posicionamento circular, foco de acessibilidade e feedback de hover
- Medir clique e highlight via estado local (mock)

```tsx
// src/app/aula-04/page.tsx
import SimonGame from '@/aulas/aula-04/SimonGame';

export default function Aula04Page() {
  return <SimonGame />;
}

// src/aulas/aula-04/SimonGame.tsx
export default function SimonGame() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header estilo Genius */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">GENIUS</h1>
          <p className="text-gray-300 text-lg">Jogo de Memória Eletrônico</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Layout será implementado nos próximos passos */}
        </div>
      </div>
    </main>
  );
}

// src/aulas/aula-04/components/Board.tsx
export default function Board() {
  const pads = ["green","red","yellow","blue"] as const;
  return (
    <div className="grid grid-cols-2 gap-4">
      {pads.map((p)=> (
        <button key={p}
          aria-label={`Pad ${p}`}
          className={`h-28 rounded-xl shadow transition-transform active:scale-95 ${
            p==='green'?'bg-green-400':p==='red'?'bg-red-400':p==='yellow'?'bg-yellow-300':'bg-blue-400'
          }`}
        />
      ))}
    </div>
  );
}

// src/aulas/aula-04/components/Controls.tsx
export default function Controls(){
  return (
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 rounded-lg bg-pink-600 text-white">Start</button>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Strict
      </label>
      <select className="border rounded px-2 py-1">
        <option value="easy">Fácil</option>
        <option value="medium">Médio</option>
        <option value="hard">Difícil</option>
      </select>
    </div>
  );
}
```

### Passo 2: Hook `useSimonGame` e exibição de sequência

**🎯 O que vamos fazer:**
Vamos criar o hook principal do jogo que gerencia toda a lógica, incluindo a máquina de estados e a exibição da sequência.

**🧠 Por que isso é importante?**
Um jogo como Simon precisa de controle preciso sobre diferentes fases (mostrar sequência, aguardar input, verificar resposta). A máquina de estados nos permite controlar exatamente quando cada coisa acontece, evitando bugs e comportamentos inesperados.

**🎯 O que vamos aprender:**
- **Máquina de Estados**: Como controlar diferentes fases do jogo
- **useReducer**: Por que usar em vez de useState para estados complexos
- **Timers**: Como controlar tempo com setTimeout/setInterval
- **Cleanup**: Como evitar vazamentos de memória
- **Sequência**: Como gerar e exibir a sequência do jogo

**📚 Conceito Detalhado: Máquina de Estados**

**O que é uma máquina de estados?**
É um padrão de programação que controla diferentes "fases" ou "modos" de uma aplicação. Cada estado tem regras específicas sobre o que pode acontecer.

**Como funciona?**
```tsx
// Estados possíveis do jogo
type Phase = 'idle' | 'showing' | 'input' | 'checking' | 'win' | 'loss';

// Cada estado tem regras específicas
- idle: aguardando start
- showing: tocando sequência (input bloqueado)
- input: usuário reproduz sequência
- checking: valida passo/rodada
- win/loss: feedback final
```

**Para que serve?**
- **Controle preciso**: Saber exatamente em que fase estamos
- **Prevenir bugs**: Evitar ações em momentos errados
- **Organização**: Código mais limpo e previsível
- **Debugging**: Fácil identificar problemas

**Quando usar?**
- Quando você tem fases distintas na aplicação
- Quando precisa controlar fluxo complexo
- Quando quer evitar estados inconsistentes
- Quando precisa de controle preciso sobre timing

**💡 Analogia didática:**
É como um semáforo! 🚦
- **Verde**: Pode passar (fase 'input')
- **Amarelo**: Atenção (fase 'checking') 
- **Vermelho**: Pare (fase 'showing')

**📚 Conceito Detalhado: useReducer vs useState**

**Por que useReducer em vez de useState?**
```tsx
// ❌ useState - complexo para múltiplos estados
const [phase, setPhase] = useState('idle');
const [level, setLevel] = useState(1);
const [sequence, setSequence] = useState([]);
// Muitos setState... difícil de gerenciar

// ✅ useReducer - organizado e previsível
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'START' }); // Uma ação, múltiplas mudanças
```

**Vantagens do useReducer:**
- **Centralizado**: Toda lógica em um lugar
- **Previsível**: Ações bem definidas
- **Testável**: Fácil testar cada ação
- **Escalável**: Fácil adicionar novos estados

**📚 Conceito Detalhado: Timers e Cleanup**

**Por que precisamos de cleanup?**
```tsx
// ❌ Sem cleanup - vazamento de memória
useEffect(() => {
  const timer = setTimeout(() => {
    // Ação após 1 segundo
  }, 1000);
  // Timer continua rodando mesmo se componente for desmontado!
}, []);

// ✅ Com cleanup - sem vazamentos
useEffect(() => {
  const timer = setTimeout(() => {
    // Ação após 1 segundo
  }, 1000);
  
  return () => clearTimeout(timer); // Limpa o timer
}, []);
```

**Por que isso é importante?**
- **Performance**: Evita timers desnecessários
- **Memória**: Previne vazamentos
- **Bugs**: Evita ações em componentes desmontados
- **Estabilidade**: Aplicação mais robusta

```ts
// src/aulas/aula-04/hooks/useSimonGame.ts
import { useEffect, useReducer, useRef } from 'react';

type Pad = 0|1|2|3; // green, red, yellow, blue
type Phase = 'idle'|'showing'|'input'|'checking'|'win'|'loss';

interface State {
  phase: Phase;
  level: number;
  sequence: Pad[];
  inputIndex: number;
  highlight: Pad|null;
  strict: boolean;
  difficulty: 'easy'|'medium'|'hard';
}

type Action =
  | { type:'START' }
  | { type:'SET_HIGHLIGHT', pad: Pad|null }
  | { type:'NEXT_LEVEL' }
  | { type:'SET_PHASE', phase: Phase }
  | { type:'SET_INPUT_INDEX', value:number }
  | { type:'SET_CONFIG', strict?:boolean, difficulty?:State['difficulty'] };

const DIFF = { easy:{show:700,gap:300}, medium:{show:500,gap:200}, hard:{show:350,gap:120} };

function reducer(s:State, a:Action):State {
  switch(a.type){
    case 'START': return { ...s, level:1, sequence:[Math.floor(Math.random()*4) as Pad], inputIndex:0, phase:'showing' };
    case 'SET_HIGHLIGHT': return { ...s, highlight:a.pad };
    case 'NEXT_LEVEL': return { ...s, level:s.level+1, sequence:[...s.sequence, Math.floor(Math.random()*4) as Pad], inputIndex:0, phase:'showing' };
    case 'SET_PHASE': return { ...s, phase:a.phase };
    case 'SET_INPUT_INDEX': return { ...s, inputIndex:a.value };
    case 'SET_CONFIG': return { ...s, strict:a.strict??s.strict, difficulty:a.difficulty??s.difficulty };
    default: return s;
  }
}

export function useSimonGame(){
  const [state, dispatch] = useReducer(reducer, { phase:'idle', level:0, sequence:[], inputIndex:0, highlight:null, strict:false, difficulty:'easy' });
  const timerRef = useRef<number|undefined>();

  // Mostrar sequência
  useEffect(()=>{
    if(state.phase!=='showing') return;
    const {show,gap} = DIFF[state.difficulty];
    let i = 0;
    const run = () => {
      if(i>=state.sequence.length){ dispatch({type:'SET_PHASE', phase:'input'}); return; }
      dispatch({type:'SET_HIGHLIGHT', pad: state.sequence[i]});
      window.setTimeout(()=>dispatch({type:'SET_HIGHLIGHT', pad:null}), show);
      i++;
      timerRef.current = window.setTimeout(run, show+gap);
    };
    run();
    return ()=> { if(timerRef.current) window.clearTimeout(timerRef.current); };
  }, [state.phase, state.sequence, state.difficulty]);

  return { state, dispatch };
}
```

```tsx
// Ligando o hook à UI (exibição da sequência)
import { useSimonGame } from '@/aulas/aula-04/hooks/useSimonGame';

export function GameContainer(){
  const { state, dispatch } = useSimonGame();
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={()=>dispatch({type:'START'})} className="px-4 py-2 bg-pink-600 text-white rounded">Start</button>
        <span>Nível: {state.level}</span>
        <span>Fase: {state.phase}</span>
      </div>
      <BoardHighlight highlight={state.highlight} />
    </div>
  );
}

function BoardHighlight({highlight}:{highlight:number|null}){
  const pads = [0,1,2,3] as const;
  return (
    <div className="grid grid-cols-2 gap-4">
      {pads.map((p)=> (
        <div key={p} className={`h-28 rounded-xl transition-opacity ${highlight===p?'opacity-100':'opacity-60'} ${p===0?'bg-green-400':p===1?'bg-red-400':p===2?'bg-yellow-300':'bg-blue-400'}`} />
      ))}
    </div>
  );
}
```

### Passo 3: Input do usuário e verificação incremental
- `InputHandler` captura teclado/cliques
- Comparação passo a passo; completar rodada → avança nível
- Debounce do input enquanto estado for `showing`
- Mostrar mensagem `aria-live`: "Sua vez"

```tsx
// Input básico + verificação
function Pad({id, disabled, play}:{id:0|1|2|3, disabled:boolean, play:(id:0|1|2|3)=>void}){
  return (
    <button disabled={disabled} onClick={()=>play(id)} className="h-28 rounded-xl shadow aria-disabled:opacity-50" />
  );
}

// Dentro do container
const canPlay = state.phase==='input';
const play = (id:0|1|2|3) => {
  if(!canPlay) return;
  const expected = state.sequence[state.inputIndex];
  if(id===expected){
    dispatch({type:'SET_INPUT_INDEX', value: state.inputIndex+1});
    if(state.inputIndex+1 === state.sequence.length){
      dispatch({type:'SET_PHASE', phase:'checking'});
      setTimeout(()=>dispatch({type:'NEXT_LEVEL'}), 500);
    }
  } else {
    dispatch({type:'SET_PHASE', phase: state.strict?'loss':'showing'});
  }
};
```

### Passo 4: Áudio (Web Audio API) + toggle som

**🎯 O que vamos fazer:**
Vamos implementar o sistema de áudio do jogo, criando sons únicos para cada pad e feedback sonoro para sucesso/erro.

**🧠 Por que isso é importante?**
O áudio é fundamental para a experiência do Simon! Cada pad deve ter um som único para que o jogador possa memorizar a sequência. O Web Audio API nos dá controle total sobre os sons, criando uma experiência profissional.

**🎯 O que vamos aprender:**
- **Web Audio API**: Como criar sons programaticamente
- **Osciladores**: Como gerar ondas sonoras
- **Envelope**: Como controlar volume e duração
- **Fallback**: Como lidar quando áudio não está disponível
- **Cleanup**: Como evitar acúmulo de osciladores

**📚 Conceito Detalhado: Web Audio API**

**O que é Web Audio API?**
É uma API do navegador que permite criar, processar e reproduzir áudio de forma programática. É como ter um estúdio de gravação dentro do navegador!

**Como funciona?**
```tsx
// 1. Criar contexto de áudio
const audioContext = new AudioContext();

// 2. Criar oscilador (gerador de som)
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

// 3. Configurar som
oscillator.frequency.value = 440; // Frequência em Hz (nota Lá)
oscillator.type = 'sine'; // Tipo de onda

// 4. Conectar e tocar
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);
oscillator.start();
```

**Para que serve?**
- **Controle total**: Frequência, volume, duração
- **Performance**: Processamento em tempo real
- **Flexibilidade**: Qualquer som que você imaginar
- **Profissional**: Sons de qualidade estúdio

**Quando usar?**
- Quando precisa de sons únicos
- Quando quer controle preciso
- Quando não quer arquivos de áudio
- Quando quer performance máxima

**💡 Analogia didática:**
É como um sintetizador musical! 🎹
- **Oscilador**: O "instrumento" que gera o som
- **Gain**: O "volume" do instrumento
- **Frequência**: A "nota" que está tocando
- **Context**: O "estúdio" onde tudo acontece

**📚 Conceito Detalhado: Envelope de Áudio**

**O que é envelope?**
É como o "contorno" do som - como ele começa, se mantém e termina. É o que torna o som natural e agradável.

**Como funciona?**
```tsx
// Envelope ADSR (Attack, Decay, Sustain, Release)
const now = audioContext.currentTime;

// Attack: Como o som começa
gainNode.gain.setValueAtTime(0, now);
gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01);

// Decay: Como o som diminui
gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
```

**Por que é importante?**
- **Natural**: Sons mais agradáveis
- **Profissional**: Qualidade de estúdio
- **Sem clicks**: Transições suaves
- **Controle**: Volume preciso

**📚 Conceito Detalhado: Cleanup de Áudio**

**Por que precisamos de cleanup?**
```tsx
// ❌ Sem cleanup - acúmulo de osciladores
function playSound() {
  const oscillator = audioContext.createOscillator();
  oscillator.start();
  // Oscilador continua rodando para sempre!
}

// ✅ Com cleanup - limpeza automática
function playSound() {
  const oscillator = audioContext.createOscillator();
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration);
  
  oscillator.onended = () => {
    oscillator.disconnect(); // Limpa recursos
  };
}
```

**Por que isso é importante?**
- **Performance**: Evita acúmulo de recursos
- **Memória**: Previne vazamentos
- **Qualidade**: Evita distorção
- **Estabilidade**: Aplicação mais robusta

```ts
// src/aulas/aula-04/hooks/audioEngine.ts
export interface AudioEngine {
  playPad(pad: 0|1|2|3): void;
  success(): void;
  fail(): void;
  enabled: boolean;
  setEnabled(v: boolean): void;
}

export function createWebAudioEngine(): AudioEngine {
  const ctx = typeof window !== 'undefined' && 'AudioContext' in window
    ? new (window.AudioContext as any)() : null;
  let enabled = !!ctx;
  const freq: Record<0|1|2|3, number> = { 0: 329.63, 1: 261.63, 2: 220.00, 3: 164.81 };

  function beep(f: number, ms = 200) {
    if (!ctx || !enabled) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = f; o.type = 'sine';
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.3, ctx.currentTime + 0.02);
    o.start();
    setTimeout(()=>{ g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.02); o.stop(); }, ms);
  }

  return {
    playPad(p) { beep(freq[p]); },
    success() { beep(523.25, 250); },
    fail() { beep(110.00, 400); },
    get enabled(){ return enabled; },
    setEnabled(v: boolean){ enabled = v; }
  } as AudioEngine;
}

export function createSilentEngine(): AudioEngine {
  let enabled = false;
  return { playPad() {}, success() {}, fail() {}, enabled, setEnabled(v){ enabled = v; } };
}
```

```ts
// Integração simples no hook (trecho)
import { createWebAudioEngine, createSilentEngine, AudioEngine } from '@/aulas/aula-04/hooks/audioEngine';

const engine: AudioEngine = typeof window !== 'undefined' ? createWebAudioEngine() : createSilentEngine();

// Ao destacar um pad durante showing/input, tocar som
// dispatch({type:'SET_HIGHLIGHT', pad})
// engine.playPad(pad)
```

### Passo 5: Dificuldade, strict e HUD

**🎯 O que vamos fazer:**
Vamos implementar o sistema de dificuldades, modo strict e interface de usuário (HUD) para mostrar informações do jogo.

**🧠 Por que isso é importante?**
Diferentes jogadores têm diferentes níveis de habilidade. O sistema de dificuldades permite que todos tenham uma experiência adequada. O modo strict adiciona desafio extra, e o HUD mantém o jogador informado sobre seu progresso.

**🎯 O que vamos aprender:**
- **GameConfig**: Como configurar diferentes dificuldades
- **Modo Strict**: Como implementar regras especiais
- **HUD**: Como exibir informações do jogo
- **Configuração**: Como persistir preferências do usuário
- **UX**: Como criar interface clara e informativa

**📚 Conceito Detalhado: GameConfig**

**O que é GameConfig?**
É um objeto que define as regras e parâmetros para cada dificuldade do jogo. É como um "manual de instruções" que o jogo segue.

**Como funciona?**
```tsx
const GAME_CONFIG = {
  easy: {
    showMs: 700,    // Tempo mostrando cada pad
    gapMs: 300,     // Intervalo entre pads
    attempts: 3     // Tentativas por erro
  },
  medium: {
    showMs: 500,
    gapMs: 200,
    attempts: 2
  },
  hard: {
    showMs: 350,
    gapMs: 120,
    attempts: 1
  }
};
```

**Para que serve?**
- **Flexibilidade**: Fácil ajustar dificuldade
- **Consistência**: Mesmas regras sempre
- **Manutenção**: Mudanças centralizadas
- **Testabilidade**: Fácil testar diferentes configurações

**Quando usar?**
- Quando você tem múltiplas configurações
- Quando quer facilitar ajustes
- Quando precisa de consistência
- Quando quer separar lógica de dados

**💡 Analogia didática:**
É como um "menu de configurações" de um videogame! 🎮
- **Fácil**: Como "modo história" - mais tempo, mais chances
- **Médio**: Como "modo normal" - equilíbrio
- **Difícil**: Como "modo hardcore" - menos tempo, menos chances

**📚 Conceito Detalhado: Modo Strict**

**O que é modo strict?**
É uma regra especial que torna o jogo mais desafiador: se você errar, volta ao nível 1 em vez de repetir a sequência.

**Como funciona?**
```tsx
// Modo normal: errou → repete sequência
if (strict === false) {
  dispatch({ type: 'SET_PHASE', phase: 'showing' });
}

// Modo strict: errou → volta ao nível 1
if (strict === true) {
  dispatch({ type: 'SET_PHASE', phase: 'loss' });
}
```

**Por que é importante?**
- **Desafio**: Torna o jogo mais difícil
- **Realismo**: Simula o jogo original
- **Variedade**: Diferentes estilos de jogo
- **Progressão**: Força melhoria contínua

**📚 Conceito Detalhado: HUD (Heads-Up Display)**

**O que é HUD?**
É a interface que mostra informações importantes do jogo em tempo real, como nível atual, pontuação e status.

**Como funciona?**
```tsx
// HUD mostra informações essenciais
<div className="hud">
  <span>Nível: {level}</span>
  <span>Score: {score}</span>
  <span>Status: {phase}</span>
  <span>Melhor: {bestScore}</span>
</div>
```

**Para que serve?**
- **Feedback**: Jogador sabe seu progresso
- **Motivação**: Ver pontuação crescer
- **Orientação**: Saber em que fase está
- **Comparação**: Ver seu melhor resultado

**Quando usar?**
- Em jogos com progressão
- Quando precisa mostrar status
- Quando quer motivar o jogador
- Quando tem informações importantes

```tsx
// src/aulas/aula-04/components/HUD.tsx
interface HUDProps {
  level: number; phase: string; best: number; score: number;
}
export default function HUD({ level, phase, best, score }: HUDProps){
  return (
    <div className="flex flex-wrap items-center gap-4 text-gray-700">
      <span>Nível: <b>{level}</b></span>
      <span>Fase: <b className="capitalize">{phase}</b></span>
      <span>Score: <b>{score}</b></span>
      <span>Melhor: <b>{best}</b></span>
    </div>
  );
}
```

```ts
// Pontuação básica no hook (ideia)
// +10 por acerto de passo; +50 ao fechar rodada
// Atualizar best (Local Storage) quando superar
```

### Passo 6: Persistência e Stats

**🎯 O que vamos fazer:**
Vamos implementar o sistema de persistência de dados usando Local Storage, salvando progresso, configurações e estatísticas do jogador.

**🧠 Por que isso é importante?**
Ninguém quer perder seu progresso! O Local Storage permite salvar dados no navegador, mantendo configurações, pontuações e estatísticas entre sessões. É como ter um "save game" automático.

**🎯 O que vamos aprender:**
- **Local Storage**: Como salvar dados no navegador
- **JSON**: Como converter dados para texto
- **Persistência**: Como manter dados entre sessões
- **Estatísticas**: Como calcular e exibir métricas
- **Schema**: Como organizar dados estruturados

**📚 Conceito Detalhado: Local Storage**

**O que é Local Storage?**
É uma API do navegador que permite salvar dados localmente no computador do usuário. É como um "armário" onde você pode guardar coisas.

**Como funciona?**
```tsx
// Salvar dados
localStorage.setItem('chave', 'valor');
localStorage.setItem('score', '1500');

// Recuperar dados
const score = localStorage.getItem('score'); // "1500"
const bestScore = localStorage.getItem('bestScore'); // null se não existir
```

**Para que serve?**
- **Persistência**: Dados sobrevivem ao fechar navegador
- **Configurações**: Salvar preferências do usuário
- **Progresso**: Manter pontuações e estatísticas
- **Performance**: Evitar recálculos desnecessários

**Quando usar?**
- Quando quer salvar configurações
- Quando precisa de persistência simples
- Quando quer melhorar UX
- Quando tem dados pequenos

**💡 Analogia didática:**
É como um "cofre digital" no seu computador! 🏦
- **Salvar**: Como depositar dinheiro no cofre
- **Recuperar**: Como sacar dinheiro do cofre
- **Persistente**: O cofre fica lá mesmo se você desligar o computador
- **Local**: Cada computador tem seu próprio cofre

**📚 Conceito Detalhado: JSON**

**O que é JSON?**
JSON (JavaScript Object Notation) é um formato de texto que representa dados estruturados. É como "traduzir" objetos JavaScript para texto.

**Como funciona?**
```tsx
// Objeto JavaScript
const gameData = {
  score: 1500,
  level: 5,
  difficulty: 'medium',
  strict: true
};

// Converter para JSON (texto)
const jsonString = JSON.stringify(gameData);
// Resultado: '{"score":1500,"level":5,"difficulty":"medium","strict":true}'

// Converter de volta para objeto
const gameDataRestored = JSON.parse(jsonString);
// Resultado: { score: 1500, level: 5, difficulty: 'medium', strict: true }
```

**Por que é importante?**
- **Compatibilidade**: Local Storage só aceita strings
- **Estrutura**: Mantém organização dos dados
- **Flexibilidade**: Pode salvar objetos complexos
- **Padrão**: Formato universalmente aceito

**📚 Conceito Detalhado: Schema de Dados**

**O que é schema?**
É a "estrutura" dos dados - define quais campos existem e que tipo de dados cada um armazena.

**Como funciona?**
```tsx
// Schema para estatísticas do jogo
interface GameStats {
  gamesPlayed: number;    // Total de jogos
  gamesWon: number;        // Jogos ganhos
  bestScore: number;      // Melhor pontuação
  bestLevel: number;       // Melhor nível alcançado
  totalTime: number;       // Tempo total jogado
  favoriteDifficulty: string; // Dificuldade preferida
}

// Schema para configurações
interface GameSettings {
  difficulty: 'easy' | 'medium' | 'hard';
  soundEnabled: boolean;
  strictMode: boolean;
  theme: 'light' | 'dark';
}
```

**Para que serve?**
- **Organização**: Dados bem estruturados
- **Validação**: Garantir tipos corretos
- **Manutenção**: Fácil adicionar novos campos
- **Documentação**: Outros desenvolvedores entendem a estrutura

**Quando usar?**
- Quando tem dados complexos
- Quando quer organização
- Quando precisa de validação
- Quando quer facilitar manutenção

```ts
// src/aulas/aula-04/hooks/useLocalPref.ts
import { useEffect, useState } from 'react';
export function useLocalPref<T>(key: string, initial: T){
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initial;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : initial;
  });
  useEffect(()=>{ if (typeof window !== 'undefined') localStorage.setItem(key, JSON.stringify(value)); }, [key, value]);
  return [value, setValue] as const;
}
```

```tsx
// src/aulas/aula-04/components/Stats.tsx (exemplo mínimo)
export default function Stats(){
  const data = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('simon-stats')||'{"games":0,"wins":0}') : {games:0,wins:0};
  const winrate = data.games ? Math.round((data.wins/data.games)*100) : 0;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-pink-50 rounded">Jogos: <b>{data.games}</b></div>
      <div className="p-4 bg-purple-50 rounded">Win Rate: <b>{winrate}%</b></div>
    </div>
  );
}
```

### Passo 7: Acessibilidade e UX

**🎯 O que vamos fazer:**
Vamos implementar recursos de acessibilidade para tornar o jogo inclusivo para todos os usuários, incluindo navegação por teclado e feedback para leitores de tela.

**🧠 Por que isso é importante?**
Acessibilidade não é opcional - é essencial! Muitos usuários dependem de teclado, leitores de tela ou outras tecnologias assistivas. Um jogo acessível é um jogo melhor para todos.

**🎯 O que vamos aprender:**
- **Atalhos de teclado**: Setas (↑→↓←), WASD, números (1-4)
- **InputHandler global**: Captura de teclas em qualquer lugar
- **Instruções visuais**: Mostrar atalhos no HUD
- **ARIA**: Como tornar o jogo compreensível para leitores de tela
- **Foco**: Como gerenciar foco para melhor usabilidade
- **Contraste**: Como garantir legibilidade
- **UX**: Como criar experiência inclusiva

**📚 Conceito Detalhado: Acessibilidade Web**

**O que é acessibilidade web?**
É a prática de tornar websites e aplicações utilizáveis por pessoas com diferentes habilidades e necessidades, incluindo deficiências visuais, motoras, cognitivas e auditivas.

**Como funciona?**
```tsx
// Navegação por teclado
<button 
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  tabIndex={0}
>
  Pad Verde
</button>

// Feedback para leitores de tela
<div aria-live="polite" aria-label="Status do jogo">
  {statusMessage}
</div>
```

**Para que serve?**
- **Inclusão**: Todos podem usar a aplicação
- **Legal**: Atende requisitos de acessibilidade
- **UX**: Melhora experiência para todos
- **SEO**: Melhora posicionamento em buscadores

**Quando usar?**
- Sempre! Acessibilidade não é opcional
- Em aplicações públicas
- Quando quer alcançar mais usuários
- Quando quer criar produtos melhores

**💡 Analogia didática:**
É como construir uma rampa em um prédio! ♿
- **Rampa**: Permite acesso para cadeirantes
- **Escada**: Funciona para quem pode subir
- **Ambos**: O prédio fica acessível para todos
- **Resultado**: Mais pessoas podem usar o prédio

**📚 Conceito Detalhado: ARIA (Accessible Rich Internet Applications)**

**O que é ARIA?**
É um conjunto de atributos HTML que tornam elementos mais acessíveis para tecnologias assistivas, como leitores de tela.

**Como funciona?**
```tsx
// aria-label: Descreve o elemento
<button aria-label="Pad verde, pressione para jogar">
  🟢
</button>

// aria-live: Anuncia mudanças
<div aria-live="polite">
  {gameStatus} {/* "Sua vez! Reproduza a sequência" */}
</div>

// aria-disabled: Indica estado desabilitado
<button aria-disabled={isDisabled}>
  Pad
</button>
```

**Para que serve?**
- **Leitores de tela**: Fornece contexto adicional
- **Navegação**: Melhora experiência com teclado
- **Estado**: Comunica mudanças dinâmicas
- **Contexto**: Explica propósito dos elementos

**Quando usar?**
- Em elementos interativos
- Quando há mudanças dinâmicas
- Em formulários complexos
- Quando quer melhorar UX

**📚 Conceito Detalhado: Navegação por Teclado**

**O que é navegação por teclado?**
É a capacidade de usar uma aplicação inteiramente com o teclado, sem precisar do mouse ou touch.

**Como funciona?**
```tsx
// Mapear teclas para ações
const keyMap = {
  'ArrowUp': 0,      // Pad verde
  'ArrowRight': 1,   // Pad vermelho
  'ArrowDown': 2,    // Pad amarelo
  'ArrowLeft': 3,    // Pad azul
  '1': 0, '2': 1, '3': 2, '4': 3  // Números alternativos
};

// Capturar teclas
onKeyDown={(e) => {
  if (keyMap[e.key]) {
    handlePadPress(keyMap[e.key]);
  }
}}
```

**Por que é importante?**
- **Acessibilidade**: Usuários com limitações motoras
- **Produtividade**: Navegação mais rápida
- **Usabilidade**: Alternativa ao mouse
- **Padrão**: Expectativa dos usuários

**Quando usar?**
- Em jogos e aplicações interativas
- Quando quer melhorar usabilidade
- Em aplicações profissionais
- Quando quer atender padrões de acessibilidade

```tsx
// src/aulas/aula-04/components/InputHandler.tsx (exemplo)
import { useEffect, useRef } from 'react';
export default function InputHandler({ onKey }:{ onKey:(pad:0|1|2|3)=>void }){
  const ref = useRef<HTMLDivElement>(null);
  useEffect(()=>{ ref.current?.focus(); },[]);
  return (
    <div
      ref={ref}
      tabIndex={0}
      aria-live="polite"
      onKeyDown={(e)=>{
        const map: Record<string,0|1|2|3> = { ArrowUp:0, ArrowRight:1, ArrowDown:2, ArrowLeft:3, '1':0, '2':1, '3':2, '4':3 } as any;
        if (e.key in map) onKey(map[e.key]);
      }}
      className="outline-none"
    />
  );
}
```

### Passo 8: Refino e Otimizações

**🎯 O que vamos fazer:**
Vamos otimizar o jogo para garantir performance, estabilidade e experiência de usuário perfeita, implementando técnicas avançadas de otimização.

**🧠 Por que isso é importante?**
Um jogo bem otimizado roda suavemente, responde rapidamente e não trava. As otimizações garantem que o jogo funcione bem em qualquer dispositivo e situação.

**🎯 O que vamos aprender:**
- **Debounce**: Como evitar ações duplicadas
- **Memoização**: Como evitar recálculos desnecessários
- **Performance**: Como otimizar renders
- **Testes**: Como verificar se tudo funciona
- **QA**: Como garantir qualidade

**📚 Conceito Detalhado: Debounce**

**O que é debounce?**
É uma técnica que previne a execução de uma função múltiplas vezes em um curto período de tempo. É como um "filtro" que só permite uma ação por vez.

**Como funciona?**
```tsx
// ❌ Sem debounce - pode executar múltiplas vezes
const handleClick = () => {
  playPad(0); // Pode ser chamado várias vezes rapidamente
};

// ✅ Com debounce - executa apenas uma vez
const [isLocked, setIsLocked] = useState(false);

const handleClick = () => {
  if (isLocked) return; // Bloqueia se já está processando
  
  setIsLocked(true);
  playPad(0);
  
  setTimeout(() => setIsLocked(false), 120); // Libera após 120ms
};
```

**Para que serve?**
- **Prevenir bugs**: Evita ações duplicadas
- **Melhor UX**: Resposta mais previsível
- **Performance**: Evita processamento desnecessário
- **Estabilidade**: Comportamento mais confiável

**Quando usar?**
- Em botões que podem ser clicados rapidamente
- Em inputs que processam dados
- Em funções que fazem requisições
- Quando quer evitar spam de ações

**💡 Analogia didática:**
É como um "cofre com timer"! 🏦⏰
- **Primeira tentativa**: Abre o cofre
- **Tentativas seguintes**: Ignoradas por 120 segundos
- **Após o timer**: Cofre pode ser aberto novamente
- **Resultado**: Só uma ação por vez

**📚 Conceito Detalhado: Memoização (useMemo/useCallback)**

**O que é memoização?**
É uma técnica que "lembra" o resultado de um cálculo e só recalcula quando necessário. É como ter uma "calculadora inteligente" que não refaz contas desnecessárias.

**Como funciona?**
```tsx
// ❌ Sem memoização - recalcula sempre
const expensiveCalculation = () => {
  return someComplexMath(data); // Executa a cada render
};

// ✅ Com memoização - só recalcula quando necessário
const memoizedValue = useMemo(() => {
  return someComplexMath(data); // Só executa se 'data' mudou
}, [data]);

// ✅ Callback memoizado - função estável
const memoizedCallback = useCallback(() => {
  doSomething(); // Só recria se dependências mudaram
}, [dependency]);
```

**Para que serve?**
- **Performance**: Evita recálculos desnecessários
- **Estabilidade**: Referências estáveis para useEffect
- **Otimização**: Melhora tempo de resposta
- **Bateria**: Menos processamento = menos consumo

**Quando usar?**
- Em cálculos complexos
- Em funções passadas como props
- Em dependências de useEffect
- Quando quer otimizar performance

**📚 Conceito Detalhado: Testes e QA**

**O que é QA (Quality Assurance)?**
É o processo de verificar se o produto funciona corretamente em diferentes cenários e dispositivos.

**Como funciona?**
```tsx
// Checklist de QA
const qaChecklist = [
  '✅ Jogo funciona no mobile',
  '✅ Som funciona e não distorce',
  '✅ Modo strict funciona corretamente',
  '✅ Dados persistem após reload',
  '✅ Navegação por teclado funciona',
  '✅ Leitores de tela anunciam mudanças',
  '✅ Performance é boa em dispositivos lentos'
];
```

**Para que serve?**
- **Qualidade**: Garantir que tudo funciona
- **Confiabilidade**: Evitar bugs em produção
- **UX**: Experiência consistente
- **Profissionalismo**: Produto bem acabado

**Quando usar?**
- Antes de lançar qualquer funcionalidade
- Após mudanças significativas
- Em diferentes dispositivos
- Com diferentes configurações

```ts
// Engine de áudio robusto - cada tom é independente
function playTone(frequency: number, duration: number = 200) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.type = 'triangle'; // Som mais estável que sine
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  
  // Envelope suave
  const now = audioContext.currentTime;
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01); // Attack
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration / 1000); // Decay
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.start(now);
  oscillator.stop(now + duration / 1000);
  
  // Limpeza automática - sem acúmulo de osciladores
  oscillator.onended = () => {
    oscillator.disconnect();
    gainNode.disconnect();
  };
}
```

## 🏗️ Princípios SOLID Aplicados
- **SRP**: `SimonGame` orquestra, `useSimonGame` gerencia lógica, componentes específicos
- **OCP**: novas dificuldades/modos via `GameConfig` sem mexer no core
- **LSP**: `AudioEngine` substituível (WebAudio ↔ Silencioso)
- **ISP**: props enxutas e específicas por componente
- **DIP**: `useSimonGame` depende de interfaces (ex.: `AudioEngine`)

## ✅ Critérios de Qualidade
- Jogável e fluido em desktop e mobile
- Feedback visual/sonoro claro; sem travas entre estados
- Lógica centralizada no hook; componentes "burros"
- Código legível, funções curtas, nomes descritivos
- Documentação do código onde o racional não é óbvio (timers, reducer)
- **Áudio sem distorção**: Engine robusto que não acumula osciladores
- **Som profissional**: Envelope suave e limpeza automática de recursos
- **Layout autêntico**: Disco circular como o Genius original
- **Atalhos funcionais**: Teclado e mouse funcionando perfeitamente
- **Interface retro**: Visual autêntico com controles estilizados
- **Estrutura padronizada**: Componente principal + página limpa (igual aulas 2 e 3)

## 🚀 Extensões (Opcional)
- Modo Endless com leaderboard local
- Board 3x3 em níveis 10+
- "Desafio diário" (seed fixa) para comparação entre alunos

---

## 📎 Apêndice Didático

### A. Máquina de Estados (resumo)
- idle: aguardando start
- showing: tocando sequência (input bloqueado)
- input: usuário reproduz sequência
- checking: valida passo/rodada
- win/loss: feedback final, opção de recomeçar

### B. GameConfig (exemplo)
```
const GAME_CONFIG = {
  easy:   { showMs: 700, gapMs: 300, attempts: 3 },
  medium: { showMs: 500, gapMs: 200, attempts: 2 },
  hard:   { showMs: 350, gapMs: 120, attempts: 1 },
};
```

### C. Boas práticas usadas
- Cleanup consistente de timers
- Estados derivados memorizados
- Interfaces enxutas (ISP) e injeção de dependências (DIP)
- UI acessível e responsiva
- **Engine de áudio robusto**: Cada tom é independente, sem acúmulo de osciladores
- **Som limpo**: Uso de `triangle` em vez de `sine` para timbre mais estável
- **Envelope suave**: Attack/decay natural com `exponentialRampToValueAtTime`
- **Limpeza automática**: Osciladores se desconectam automaticamente ao terminar


