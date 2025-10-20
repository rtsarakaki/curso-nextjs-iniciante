'use client';

import { useHangmanGame } from '../hooks/useHangmanGame';
import { useState, useEffect } from 'react';
import { BarChart3, Trophy, Target, TrendingUp, Clock, Award, Zap } from 'lucide-react';

interface GameStats {
  totalGames: number;
  gamesWon: number;
  gamesLost: number;
  bestScore: number;
  averageScore: number;
  bestTime: number;
  averageTime: number;
  favoriteDifficulty: string;
  currentStreak: number;
  bestStreak: number;
}

export default function Statistics() {
  const { gameState } = useHangmanGame();
  const [stats, setStats] = useState<GameStats>({
    totalGames: 0,
    gamesWon: 0,
    gamesLost: 0,
    bestScore: 0,
    averageScore: 0,
    bestTime: 0,
    averageTime: 0,
    favoriteDifficulty: 'easy',
    currentStreak: 0,
    bestStreak: 0
  });

  useEffect(() => {
    const savedStats = localStorage.getItem('hangman-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  useEffect(() => {
    if (gameState.gameStatus === 'won' || gameState.gameStatus === 'lost') {
      const newStats = {
        ...stats,
        totalGames: stats.totalGames + 1,
        gamesWon: gameState.gameStatus === 'won' ? stats.gamesWon + 1 : stats.gamesWon,
        gamesLost: gameState.gameStatus === 'lost' ? stats.gamesLost + 1 : stats.gamesLost,
        bestScore: Math.max(stats.bestScore, gameState.score),
        averageScore: (stats.averageScore * stats.totalGames + gameState.score) / (stats.totalGames + 1),
        currentStreak: gameState.gameStatus === 'won' ? stats.currentStreak + 1 : 0,
        bestStreak: Math.max(stats.bestStreak, gameState.gameStatus === 'won' ? stats.currentStreak + 1 : 0)
      };
      
      setStats(newStats);
      localStorage.setItem('hangman-stats', JSON.stringify(newStats));
    }
  }, [gameState.gameStatus, gameState.score]);

  const winRate = stats.totalGames > 0 ? (stats.gamesWon / stats.totalGames * 100).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
        <BarChart3 className="w-6 h-6" />
        Estatísticas
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-pink-50 rounded-lg">
          <div className="flex justify-center mb-2">
            <Target className="w-6 h-6 text-pink-600" />
          </div>
          <div className="text-2xl font-bold text-pink-600">{stats.totalGames}</div>
          <div className="text-sm text-gray-600">Jogos</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="flex justify-center mb-2">
            <Trophy className="w-6 h-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{winRate}%</div>
          <div className="text-sm text-gray-600">Taxa de Vitória</div>
        </div>
        
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="flex justify-center mb-2">
            <Award className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">{stats.bestScore}</div>
          <div className="text-sm text-gray-600">Melhor Pontuação</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="flex justify-center mb-2">
            <Zap className="w-6 h-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600">{stats.bestStreak}</div>
          <div className="text-sm text-gray-600">Melhor Sequência</div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Resumo
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Vitórias: {stats.gamesWon}</div>
            <div>Derrotas: {stats.gamesLost}</div>
            <div>Sequência atual: {stats.currentStreak}</div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Performance
          </h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Pontuação média: {stats.averageScore.toFixed(0)}</div>
            <div>Dificuldade favorita: {stats.favoriteDifficulty}</div>
            <div>Pontuação atual: {gameState.score}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
