// FASE 6 - PASSO 11: Custom Hook
// Conceitos: Custom Hooks, Encapsulamento de lógica, Separação de responsabilidades

import { useState, useEffect, useCallback } from 'react';
import { FaHeart, FaStar, FaSun, FaMoon, FaFire, FaSnowflake, FaLeaf, FaGem } from 'react-icons/fa';

// Array inicial de ícones
const initialIcons = [
  { id: 1, icon: FaHeart, name: 'Coração' },
  { id: 2, icon: FaStar, name: 'Estrela' },
  { id: 3, icon: FaSun, name: 'Sol' },
  { id: 4, icon: FaMoon, name: 'Lua' },
  { id: 5, icon: FaFire, name: 'Fogo' },
  { id: 6, icon: FaSnowflake, name: 'Neve' },
  { id: 7, icon: FaLeaf, name: 'Folha' },
  { id: 8, icon: FaGem, name: 'Gema' }
];

export function useMemoryGame() {
  // Estados do jogo
  const [gameStarted, setGameStarted] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [icons, setIcons] = useState(initialIcons);

  // Função para embaralhar (Fisher-Yates shuffle)
  const shuffleArray = useCallback((array: typeof initialIcons) => {
    const shuffled = [...array, ...array].map((card, index) => ({ ...card, id: index }));
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Função para iniciar novo jogo
  const startNewGame = useCallback(() => {
    setGameStarted(true);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setIcons(shuffleArray(initialIcons));
  }, [shuffleArray]);

  // Função para lidar com clique nas cartas
  const handleCardClick = useCallback((cardId: number) => {
    // Se já tem 2 cartas viradas, não faz nada
    if (flippedCards.length >= 2) return;
    
    // Se a carta já está virada ou já foi encontrada, não faz nada
    if (flippedCards.includes(cardId) || matchedCards.includes(cardId)) return;
    
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    
    // Se temos 2 cartas viradas, verificar se são pares
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      
      const [firstCard, secondCard] = newFlippedCards;
      const firstIcon = icons.find(icon => icon.id === firstCard);
      const secondIcon = icons.find(icon => icon.id === secondCard);
      
      // Se são pares, adicionar às cartas encontradas
      if (firstIcon?.name === secondIcon?.name) {
        setMatchedCards(prev => [...prev, firstCard, secondCard]);
        setFlippedCards([]);
      } else {
        // Se não são pares, virar de volta após 1 segundo
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, matchedCards, icons]);

  // Verificar se o jogo foi completado
  const isGameComplete = matchedCards.length === icons.length && icons.length > 0;

  // Embaralhar cartas quando o componente monta
  useEffect(() => {
    setIcons(shuffleArray(initialIcons));
  }, [shuffleArray]);

  return {
    // Estados
    gameStarted,
    flippedCards,
    matchedCards,
    moves,
    icons,
    isGameComplete,
    
    // Funções
    startNewGame,
    handleCardClick
  };
}