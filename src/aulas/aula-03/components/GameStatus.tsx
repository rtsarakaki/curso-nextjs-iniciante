import React from 'react';
import { Clock, Target, AlertCircle } from 'lucide-react';

interface GameStatusProps {
  gameStatus: 'playing' | 'won' | 'lost';
  remainingAttempts: number;
  timeLeft: number;
  score: number;
}

/**
 * Componente responsável APENAS por exibir o status do jogo
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function GameStatus({ 
  gameStatus, 
  remainingAttempts, 
  timeLeft, 
  score 
}: GameStatusProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusMessage = () => {
    switch (gameStatus) {
      case 'won':
        return {
          message: 'Parabéns! Você ganhou!',
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          icon: Target
        };
      case 'lost':
        return {
          message: 'Que pena! Você perdeu!',
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          icon: AlertCircle
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <div className="text-center mb-6">
      {/* Status do jogo */}
      {statusInfo && (
        <div className={`${statusInfo.bgColor} ${statusInfo.color} p-4 rounded-lg mb-4`}>
          <div className="flex items-center justify-center gap-2">
            <statusInfo.icon className="w-6 h-6" />
            <span className="text-xl font-bold">{statusInfo.message}</span>
          </div>
        </div>
      )}

      {/* Informações do jogo */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-pink-50 p-3 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Target className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-600">Tentativas</span>
          </div>
          <div className="text-2xl font-bold text-pink-800">{remainingAttempts}</div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Tempo</span>
          </div>
          <div className="text-2xl font-bold text-purple-800">{formatTime(timeLeft)}</div>
        </div>

        <div className="bg-pink-50 p-3 rounded-lg">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Target className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-600">Pontos</span>
          </div>
          <div className="text-2xl font-bold text-pink-800">{score}</div>
        </div>
      </div>
    </div>
  );
}
