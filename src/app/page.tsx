'use client';

import { useState } from 'react';
import PrimeiroSite from '@/aulas/aula-01/PrimeiroSite';
import MemoryGame from '@/aulas/aula-02/MemoryGame';

export default function Home() {
  const [currentAula, setCurrentAula] = useState('aula-01');

  const aulas = [
    { id: 'aula-01', name: 'Aula 1: Meu Primeiro Site Bonito', component: PrimeiroSite },
    { id: 'aula-02', name: 'Aula 2: Jogo da Memória Visual', component: MemoryGame },
  ];

  const CurrentComponent = aulas.find(aula => aula.id === currentAula)?.component || PrimeiroSite;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navegação entre aulas */}
      <nav className="bg-white shadow-lg p-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            🎮 Curso Next.js para Iniciantes
          </h1>
          <div className="flex flex-wrap gap-2">
            {aulas.map((aula) => (
              <button
                key={aula.id}
                onClick={() => setCurrentAula(aula.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentAula === aula.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {aula.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Conteúdo da aula atual */}
      <main>
        <CurrentComponent />
      </main>

      {/* Informações sobre o curso */}
      <footer className="bg-gray-800 text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚀 Curso Next.js para Iniciantes
          </h2>
          <p className="text-gray-300 mb-4">
            Aprenda programação de forma divertida e visual!
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div>
              <span className="font-semibold">📚 Aulas:</span> 12 aulas completas
            </div>
            <div>
              <span className="font-semibold">🎮 Projetos:</span> Jogos e apps interativos
            </div>
            <div>
              <span className="font-semibold">🎨 Foco:</span> Design e experiência do usuário
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}