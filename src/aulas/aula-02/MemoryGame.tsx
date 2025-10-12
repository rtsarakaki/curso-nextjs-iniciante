'use client';

import { useState } from 'react';
import { FaHeart, FaStar, FaSun, FaMoon, FaFire, FaSnowflake, FaLeaf, FaGem } from 'react-icons/fa';
import Header from '@/components/aula-02/Header/Header';
import GameBoard from '@/components/aula-02/GameBoard/GameBoard';
import VictoryMessage from '@/components/aula-02/VictoryMessage/VictoryMessage';
import Instructions from '@/components/aula-02/Instructions/Instructions';

// Ícones para as cartas (usando react-icons)
const icons = [
  { icon: FaHeart, name: 'Coração' },
  { icon: FaStar, name: 'Estrela' },
  { icon: FaSun, name: 'Sol' },
  { icon: FaMoon, name: 'Lua' },
  { icon: FaFire, name: 'Fogo' },
  { icon: FaSnowflake, name: 'Neve' },
  { icon: FaLeaf, name: 'Folha' },
  { icon: FaGem, name: 'Gema' }
];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]); // Duplicar para formar pares
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const startNewGame = () => {
    setGameStarted(true);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.includes(index) || matchedCards.includes(index)) return;
    
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      if (cards[newFlippedCards[0]].name === cards[newFlippedCards[1]].name) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const isGameComplete = matchedCards.length === cards.length && cards.length > 0;
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

        {!gameStarted && <Instructions />}

        {isGameComplete && (
          <VictoryMessage 
            moves={moves}
            onPlayAgain={startNewGame}
          />
        )}
      </div>
    </div>
  );
}
