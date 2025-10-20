'use client';

import { useHangmanGame } from './hooks/useHangmanGame';
import { useEffect } from 'react';
import DifficultySelector from './components/DifficultySelector';
import Statistics from './components/Statistics';
import HangmanDrawing from './components/HangmanDrawing';
import WordDisplay from './components/WordDisplay';
import GameStatus from './components/GameStatus';
import GameControls from './components/GameControls';
import Keyboard from './components/Keyboard';
import InputHandler from './components/InputHandler';
import { Target } from 'lucide-react';

/**
 * Componente principal do Jogo da Forca
 * Segue os princípios SOLID:
 * - SRP: Orquestra outros componentes, não implementa lógica específica
 * - OCP: Aberto para extensão (novos componentes), fechado para modificação
 * - LSP: Substituível por outros jogos que implementem a mesma interface
 * - ISP: Interface específica para o jogo da forca
 * - DIP: Depende de abstrações (useGame hook), não de implementações concretas
 */
export default function HangmanGame() {
  const { gameState, startNewGame, makeGuess, resetGame } = useHangmanGame();

  // Iniciar jogo automaticamente quando o componente carregar
  useEffect(() => {
    if (!gameState.word && gameState.gameStatus === 'playing') {
      startNewGame();
    }
  }, [gameState.word, gameState.gameStatus, startNewGame]);

  const handleStartNewGame = () => {
    startNewGame();
  };

  const handleResetGame = () => {
    resetGame();
  };

  return (
    <div className="min-h-screen bg-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Target className="w-10 h-10 text-pink-600" />
            Jogo da Forca
          </h1>
          <p className="text-gray-600">Adivinhe a palavra antes que o boneco seja enforcado!</p>
        </div>

        {/* Status do jogo */}
        <GameStatus
          gameStatus={gameState.gameStatus}
          remainingAttempts={6 - gameState.wrongGuesses}
          timeLeft={gameState.timeLeft}
          score={gameState.score}
        />

        {/* Área principal do jogo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Desenho da forca */}
          <div className="flex justify-center">
            <HangmanDrawing wrongGuesses={gameState.wrongGuesses} />
          </div>

          {/* Palavra e controles */}
          <div className="flex flex-col justify-center">
            <WordDisplay
              word={gameState.word}
              guessedLetters={gameState.guessedLetters}
            />

            {/* Input para adivinhar letras */}
            {gameState.gameStatus === 'playing' && (
              <InputHandler
                gameStatus={gameState.gameStatus}
                onGuess={makeGuess}
              />
            )}

            {/* Controles do jogo */}
            <GameControls
              gameStatus={gameState.gameStatus}
              onStartNewGame={handleStartNewGame}
              onResetGame={handleResetGame}
            />
          </div>
        </div>

        {/* Teclado virtual */}
        <div className="mb-8">
          <Keyboard
            onGuess={makeGuess}
            guessedLetters={gameState.guessedLetters}
            disabled={gameState.gameStatus !== 'playing'}
          />
        </div>

        {/* Seletor de dificuldade e estatísticas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DifficultySelector />
          <Statistics />
        </div>
      </div>
    </div>
  );
}