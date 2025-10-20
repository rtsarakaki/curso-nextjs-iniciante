import React from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface GameControlsProps {
  gameStatus: 'playing' | 'won' | 'lost';
  onStartNewGame: () => void;
  onResetGame: () => void;
}

/**
 * Componente responsável APENAS pelos controles do jogo
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function GameControls({ 
  gameStatus, 
  onStartNewGame, 
  onResetGame 
}: GameControlsProps) {

  return (
    <div className="text-center">
      {/* Botões de controle */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={onStartNewGame}
          className="flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
        >
          <Play className="w-5 h-5" />
          Novo Jogo
        </button>

        <button
          onClick={onResetGame}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Reiniciar
        </button>
      </div>
    </div>
  );
}
