import React from 'react';

interface WordDisplayProps {
  word: string;
  guessedLetters: string[];
}

/**
 * Componente responsável APENAS por exibir a palavra com letras descobertas
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function WordDisplay({ word, guessedLetters }: WordDisplayProps) {
  const displayWord = word
    .split('')
    .map(letter => guessedLetters.includes(letter) ? letter : '_')
    .join(' ');

  return (
    <div className="text-center mb-8">
      <div className="text-4xl font-bold text-gray-800 tracking-wider mb-4">
        {displayWord}
      </div>
      <div className="text-sm text-gray-600">
        Palavra com {word.length} letras
      </div>
    </div>
  );
}
