'use client';

import { useState } from 'react';

// Ícones para as cartas (usando símbolos Unicode que funcionam melhor)
const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];

export default function MemoryGame() {
  // Estado do jogo
  const [cards, setCards] = useState<string[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Iniciar novo jogo
  const startNewGame = () => {
    // Duplicar emojis e embaralhar
    const gameCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    setCards(gameCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setGameStarted(true);
  };

  // Clicar em uma carta
  const handleCardClick = (index: number) => {
    // Não permitir cliques em cartas já viradas ou encontradas
    if (flippedCards.includes(index) || matchedCards.includes(index)) {
      return;
    }

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    // Se duas cartas estão viradas, verificar se são iguais
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
        // Cartas iguais - adicionar às encontradas
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        // Cartas diferentes - virar de volta após 1 segundo
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Verificar se o jogo terminou
  const isGameComplete = matchedCards.length === cards.length && cards.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho do jogo */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de emojis!
          </p>
          
          {/* Controles */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={startNewGame}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
            </button>
            
            {gameStarted && (
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold shadow-lg">
                Movimentos: {moves}
              </div>
            )}
          </div>
        </header>

        {/* Grid do jogo */}
        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((emoji, index) => {
              const isFlipped = flippedCards.includes(index);
              const isMatched = matchedCards.includes(index);
              
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`
                    aspect-square rounded-lg cursor-pointer transition-all duration-300 transform
                    ${isFlipped || isMatched 
                      ? 'bg-white shadow-lg scale-105' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }
                    ${isMatched ? 'opacity-50' : ''}
                    flex items-center justify-center text-4xl
                    hover:scale-110
                  `}
                >
                  {isFlipped || isMatched ? emoji : '❓'}
                </div>
              );
            })}
          </div>
        )}

        {/* Mensagem de vitória */}
        {isGameComplete && (
          <div className="text-center mt-8">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                🎉 Parabéns! Você ganhou!
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Você completou o jogo em {moves} movimentos!
              </p>
              <button
                onClick={startNewGame}
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                Jogar Novamente
              </button>
            </div>
          </div>
        )}

        {/* Instruções */}
        {!gameStarted && (
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Como Jogar:
            </h3>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>• Clique em "Começar Jogo" para iniciar</li>
              <li>• Clique nas cartas para virá-las</li>
              <li>• Encontre os pares de emojis iguais</li>
              <li>• Complete o jogo com o menor número de movimentos!</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}