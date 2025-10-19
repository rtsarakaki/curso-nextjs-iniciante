// FASE 6 - PASSO 11: Refatoração com Hook
// Conceitos: Custom Hooks, Encapsulamento de lógica, Separação de responsabilidades

'use client';

import { FaHeart } from 'react-icons/fa';
import { useMemoryGame } from './hooks/useMemoryGame';

export default function MemoryGame() {
  // Usar o hook customizado
  const {
    gameStarted,
    flippedCards,
    matchedCards,
    moves,
    icons,
    isGameComplete,
    startNewGame,
    handleCardClick
  } = useMemoryGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="max-w-4xl mx-auto p-4">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <FaHeart className="text-red-500" />
            Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mt-4">
            Encontre os pares de ícones!
          </p>
          {!gameStarted && (
            <button 
              onClick={startNewGame}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors mt-6"
            >
              Começar Jogo
            </button>
          )}
          {gameStarted && !isGameComplete && (
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold mt-6">
              Jogo Iniciado! 🎮 Movimentos: {moves}
            </div>
          )}
          {isGameComplete && (
            <div className="bg-yellow-400 text-white px-6 py-3 rounded-lg font-bold mt-6">
              Parabéns! Você completou o jogo em {moves} movimentos! 🎉
              <button 
                onClick={startNewGame}
                className="ml-4 bg-white text-yellow-600 px-4 py-2 rounded-lg font-bold hover:bg-yellow-50 transition-colors"
              >
                Jogar Novamente
              </button>
            </div>
          )}
        </header>
        
        <main className="text-center">
          {gameStarted && (
            <div className="bg-white rounded-lg p-8 shadow-xl mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Cartas do Jogo
              </h2>
              {/* Renderizar cartas usando map */}
              <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
                {icons.map((item) => {
                  const IconComponent = item.icon;
                  const isFlipped = flippedCards.includes(item.id);
                  const isMatched = matchedCards.includes(item.id);
                  
                  return (
                    <div 
                      key={item.id}
                      onClick={() => handleCardClick(item.id)}
                      className={`p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                        isMatched
                          ? 'bg-green-100 border-green-300'
                          : isFlipped 
                            ? 'bg-green-100 border-green-300' 
                            : 'bg-blue-100 border-blue-300 hover:bg-blue-200'
                      }`}
                    >
                      {(isFlipped || isMatched) ? (
                        <>
                          <IconComponent className="text-2xl text-green-600 mx-auto" />
                          <p className="text-sm text-gray-600 mt-2">{item.name}</p>
                        </>
                      ) : (
                        <div className="text-2xl text-gray-400">❓</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Como Jogar
            </h2>
            <p className="text-gray-600">
              Clique nas cartas para encontrar os pares!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}