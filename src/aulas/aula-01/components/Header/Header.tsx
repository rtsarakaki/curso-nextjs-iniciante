import React from 'react';

interface HeaderProps {
  name: string;
  subtitle: string;
}

export default function Header({ name, subtitle }: HeaderProps) {
  return (
    <header className="text-center mb-10 max-w-4xl w-full">
      <h1 className="text-white text-3xl mb-2">
        Olá! Eu sou {name}
      </h1>
      <p className="text-blue-200 text-lg">
        {subtitle}
      </p>
    </header>
  );
}
