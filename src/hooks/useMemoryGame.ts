import { useState, useCallback } from 'react';
import { FaHeart, FaStar, FaSun, FaMoon, FaFire, FaSnowflake, FaLeaf, FaGem } from 'react-icons/fa';
import { GAME_CONFIG } from '@/config/gameConfig';

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

export function useMemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards, setCards] = useState<typeof icons>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const startNewGame = useCallback(() => {
    // Duplicar ícones e embaralhar
    const gameCards = [...icons, ...icons].sort(() => Math.random() - 0.5);
    setCards(gameCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(true);
  }, []);

  const handleCardClick = useCallback((index: number) => {
    // Não permitir cliques em cartas já viradas ou encontradas
    if (flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Se duas cartas estão viradas, verificar se são iguais
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      if (cards[newFlippedCards[0]].name === cards[newFlippedCards[1]].name) {
        // Cartas iguais - adicionar às encontradas
        setMatchedCards(prev => [...prev, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        // Cartas diferentes - virar de volta após delay
        setTimeout(() => {
          setFlippedCards([]);
        }, GAME_CONFIG.FLIP_DELAY);
      }
    }
  }, [flippedCards, matchedCards, cards]);

  // Verificar se o jogo terminou
  const isGameComplete = matchedCards.length === cards.length && cards.length > 0;

  return {
    gameStarted,
    cards,
    flippedCards,
    matchedCards,
    moves,
    isGameComplete,
    startNewGame,
    handleCardClick
  };
}
