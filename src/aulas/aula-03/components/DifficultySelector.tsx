'use client';

import { useHangmanGame } from '../hooks/useHangmanGame';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

export default function DifficultySelector() {
  const { gameState, setDifficulty } = useHangmanGame();

  const difficulties = [
    {
      level: 'easy',
      name: 'Fácil',
      description: 'Palavras curtas, 5 minutos, 6 erros',
      color: 'green',
      icon: CheckCircle
    },
    {
      level: 'medium',
      name: 'Médio',
      description: 'Palavras médias, 4 minutos, 5 erros',
      color: 'yellow',
      icon: Circle
    },
    {
      level: 'hard',
      name: 'Difícil',
      description: 'Palavras longas, 3 minutos, 4 erros',
      color: 'red',
      icon: AlertCircle
    }
  ];

  const handleDifficultyChange = (difficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(difficulty);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Escolha a Dificuldade
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            onClick={() => handleDifficultyChange(diff.level as 'easy' | 'medium' | 'hard')}
            className={`p-4 rounded-lg border-2 transition-all ${
              gameState.difficulty === diff.level
                ? `border-${diff.color}-500 bg-${diff.color}-50`
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <diff.icon className={`w-8 h-8 ${
                  diff.color === 'green' ? 'text-green-500' :
                  diff.color === 'yellow' ? 'text-yellow-500' :
                  'text-red-500'
                }`} />
              </div>
              <div className="font-bold text-lg mb-1">{diff.name}</div>
              <div className="text-sm text-gray-600">{diff.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
