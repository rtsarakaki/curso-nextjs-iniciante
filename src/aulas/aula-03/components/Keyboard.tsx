import React from 'react';

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guessedLetters: string[];
  disabled?: boolean;
}

/**
 * Componente responsável APENAS por renderizar o teclado virtual
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function Keyboard({ onGuess, guessedLetters, disabled = false }: KeyboardProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const handleLetterClick = (letter: string) => {
    if (!disabled && !guessedLetters.includes(letter)) {
      onGuess(letter);
    }
  };

  const getButtonStyle = (letter: string) => {
    if (guessedLetters.includes(letter)) {
      return 'bg-gray-400 text-white cursor-not-allowed';
    }
    if (disabled) {
      return 'bg-gray-200 text-gray-400 cursor-not-allowed';
    }
    return 'bg-pink-500 text-white hover:bg-pink-600 cursor-pointer';
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Teclado Virtual
      </h3>
      <div className="grid grid-cols-9 gap-2">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => handleLetterClick(letter)}
            disabled={disabled || guessedLetters.includes(letter)}
            className={`px-3 py-2 rounded-lg font-bold transition-colors ${getButtonStyle(letter)}`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}
