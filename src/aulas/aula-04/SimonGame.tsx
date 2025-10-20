'use client';

import Board from '@/aulas/aula-04/components/Board';
import Controls from '@/aulas/aula-04/components/Controls';
import HUD from '@/aulas/aula-04/components/HUD';
import InputHandler from '@/aulas/aula-04/components/InputHandler';
import Stats from '@/aulas/aula-04/components/Stats';
import { useSimonGame } from '@/aulas/aula-04/hooks/useSimonGame';

export default function SimonGame(){
  const { state, dispatch, playPad } = useSimonGame();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      {/* Input Handler para capturar teclado - deve estar no topo */}
      <InputHandler onKey={playPad} />
      
      <div className="max-w-6xl mx-auto">
        {/* Header estilo Genius */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-wider">GENIUS</h1>
          <p className="text-gray-300 text-lg">Jogo de Memória Eletrônico</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Coluna esquerda - HUD */}
          <div className="lg:col-span-1">
            <HUD level={state.level} phase={state.phase} best={state.best} score={state.score} />
          </div>
          
          {/* Coluna central - Board (Genius principal) */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <Board highlight={state.highlight} disabled={state.phase!=='input'} onPad={playPad} />
              
              {/* Botão de restart quando perde */}
              {state.phase==='loss' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
                  <button
                    onClick={()=>dispatch({type:'START'})}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-bold"
                  >
                    RECOMEÇAR
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Coluna direita - Controles */}
          <div className="lg:col-span-1">
            <Controls
              onStart={()=>dispatch({type:'START'})}
              strict={state.strict}
              onStrict={(v)=>dispatch({type:'SET_CONFIG', strict:v})}
              difficulty={state.difficulty}
              onDifficulty={(d)=>dispatch({type:'SET_CONFIG', difficulty:d})}
              soundOn={state.soundOn}
              onSound={(v)=>dispatch({type:'SET_CONFIG', soundOn:v})}
            />
          </div>
        </div>
        
        {/* Stats na parte inferior */}
        <div className="mt-8">
          <Stats />
        </div>
      </div>
    </main>
  );
}
