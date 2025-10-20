import React, { useRef, useEffect } from 'react';

interface InputHandlerProps {
  gameStatus: 'playing' | 'won' | 'lost';
  onGuess: (letter: string) => void;
}

/**
 * Componente responsável APENAS por capturar entrada do teclado
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function InputHandler({ gameStatus, onGuess }: InputHandlerProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focar no input quando o jogo começar
  useEffect(() => {
    if (gameStatus === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameStatus]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputRef.current) {
      const letter = inputRef.current.value.toUpperCase();
      if (letter && letter.match(/[A-Z]/) && gameStatus === 'playing') {
        onGuess(letter);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className="text-center mb-6">
      <input
        ref={inputRef}
        type="text"
        maxLength={1}
        placeholder="Digite uma letra..."
        className="w-48 px-4 py-2 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none"
        onKeyPress={handleKeyPress}
      />
      <div className="text-sm text-gray-600 mt-2">
        Digite uma letra e pressione Enter
      </div>
    </div>
  );
}
