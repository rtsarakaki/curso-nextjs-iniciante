'use client';

import { useMemoryGame } from '@/hooks/useMemoryGame';
import Header from '@/components/aula-02/Header/Header';
import GameBoard from '@/components/aula-02/GameBoard/GameBoard';
import VictoryMessage from '@/components/aula-02/VictoryMessage/VictoryMessage';
import Instructions from '@/components/aula-02/Instructions/Instructions';

export default function MemoryGame() {
  const {
    gameStarted,
    cards,
    flippedCards,
    matchedCards,
    moves,
    isGameComplete,
    startNewGame,
    handleCardClick
  } = useMemoryGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <Header 
          gameStarted={gameStarted}
          moves={moves}
          onStartGame={startNewGame}
        />

        {gameStarted && (
          <GameBoard
            cards={cards}
            flippedCards={flippedCards}
            matchedCards={matchedCards}
            onCardClick={handleCardClick}
          />
        )}

        {isGameComplete && (
          <VictoryMessage 
            moves={moves}
            onPlayAgain={startNewGame}
          />
        )}

        {!gameStarted && <Instructions />}
      </div>
    </div>
  );
}