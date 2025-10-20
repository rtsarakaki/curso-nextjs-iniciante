import React from 'react';

interface HUDProps {
  level: number;
  phase: string;
  best: number;
  score: number;
}

export default function HUD({ level, phase, best, score }: HUDProps){
  const status = (() => {
    switch (phase) {
      case 'showing':
        return { text: 'Mostrando sequência…', color: 'bg-purple-100 text-purple-700 border-purple-300' };
      case 'input':
        return { text: 'Sua vez! Reproduza a sequência', color: 'bg-green-100 text-green-700 border-green-300' };
      case 'checking':
        return { text: 'Verificando…', color: 'bg-gray-100 text-gray-700 border-gray-300' };
      case 'win':
        return { text: 'Rodada completa! Continue!', color: 'bg-blue-100 text-blue-700 border-blue-300' };
      case 'loss':
        return { text: 'Erro! Tente novamente', color: 'bg-red-100 text-red-700 border-red-300' };
      default:
        return { text: 'Pronto para começar', color: 'bg-yellow-100 text-yellow-700 border-yellow-300' };
    }
  })();

  return (
    <div className="space-y-4">
      {/* Status banner com estilo Genius */}
      <div
        role="status"
        aria-live="polite"
        className={`border-2 rounded-lg px-6 py-3 text-center font-bold text-lg ${status.color} shadow-lg`}
      >
        {status.text}
      </div>
      
      {/* Display de informações estilo Genius */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-inner">
        <div className="grid grid-cols-2 gap-4 text-white">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{level}</div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Nível</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{score}</div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Score</div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-600">
          <div className="text-center">
            <div className="text-lg font-bold text-yellow-400">{best}</div>
            <div className="text-xs text-gray-300 uppercase tracking-wide">Melhor Score</div>
          </div>
        </div>
      </div>
      
      {/* Instruções de teclado */}
      <div className="bg-gray-800 rounded-lg p-4 shadow-inner">
        <div className="text-center text-white mb-3">
          <div className="text-sm font-bold text-gray-300 uppercase tracking-wide">Atalhos do Teclado</div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-green-400">↑</span>
            <span className="text-white">Verde</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-red-400">→</span>
            <span className="text-white">Vermelho</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-yellow-400">↓</span>
            <span className="text-white">Amarelo</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-blue-400">←</span>
            <span className="text-white">Azul</span>
          </div>
        </div>
        <div className="text-center mt-2">
          <div className="text-xs text-gray-400">ou use WASD / 1-4</div>
        </div>
      </div>
    </div>
  );
}


