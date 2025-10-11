# 🧠 Aula 2: Jogo da Memória Visual

## 🎯 Objetivo da Aula
Criar um jogo da memória interativo e bonito, aprendendo sobre **gradientes**, **interatividade** e **lógica de programação** básica.

## 🎮 O que vamos criar
Um jogo da memória com:
- 8 cartas com ícones
- Animação de virada das cartas
- Contador de tentativas
- Sistema de pontuação
- Design responsivo e bonito

## 📚 O que vamos aprender
- **Gradientes**: Backgrounds coloridos e suaves
- **Interatividade**: Responder a cliques do usuário
- **Estado**: Gerenciar dados que mudam
- **Lógica de programação**: Como o jogo funciona
- **CSS Grid**: Layout em grade
- **Animações**: Transições suaves

## 🛠️ Preparação

### 1. Certifique-se que o projeto está rodando: `npm run dev`
### 2. Abra o arquivo `src/app/page.tsx`
### 3. Vamos criar um novo componente!

## 📝 Passo a Passo

### **Passo 1: Criar estrutura básica com gradiente**

Primeiro, vamos criar um novo arquivo para o jogo. Crie `src/aulas/aula-02/MemoryGame.tsx`:

```tsx
export default function MemoryGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
        </header>
      </div>
    </div>
  );
}
```

**🎨 Explicação do Gradiente:**
- `bg-gradient-to-br`: Gradiente diagonal (bottom-right)
- `from-green-400`: Cor inicial (verde)
- `to-blue-500`: Cor final (azul)
- Cria um efeito visual suave e moderno

### **Passo 2: Adicionar botão de início**

```tsx
export default function MemoryGame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Começar Jogo
          </button>
        </header>
      </div>
    </div>
  );
}
```

**🎯 Explicação do Botão:**
- `hover:bg-blue-50`: Cor ao passar o mouse
- `transition-colors`: Animação suave
- `rounded-lg`: Cantos arredondados

### **Passo 3: Adicionar estado e interatividade**

```tsx
'use client';

import { useState } from 'react';

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);

  const startNewGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <button 
            onClick={startNewGame}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
          </button>
        </header>
      </div>
    </div>
  );
}
```

**🔄 Explicação do Estado:**
- `useState`: Hook para gerenciar dados que mudam
- `gameStarted`: Variável que controla se o jogo começou
- `setGameStarted`: Função para alterar o estado
- `onClick`: Evento que responde ao clique

### **Passo 4: Criar grid de cartas**

```tsx
'use client';

import { useState } from 'react';

// Ícones para as cartas (usando ícones simples)
const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]); // Duplicar para formar pares

  const startNewGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <button 
            onClick={startNewGame}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
          </button>
        </header>

        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((icon, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg cursor-pointer transition-all duration-300 transform bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg flex items-center justify-center text-4xl text-white"
              >
                ❓
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

**🎲 Explicação do Grid:**
- `grid-cols-4`: 4 colunas
- `gap-4`: Espaçamento entre cartas
- `aspect-square`: Cartas quadradas
- `cursor-pointer`: Cursor de mão ao passar

### **Passo 5: Adicionar lógica de virada das cartas**

```tsx
'use client';

import { useState } from 'react';

const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const startNewGame = () => {
    setGameStarted(true);
    setFlippedCards([]);
  };

  const handleCardClick = (index: number) => {
    if (flippedCards.includes(index)) return;
    
    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <button 
            onClick={startNewGame}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
          </button>
        </header>

        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((icon, index) => {
              const isFlipped = flippedCards.includes(index);
              
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`
                    aspect-square rounded-lg cursor-pointer transition-all duration-300 transform
                    ${isFlipped 
                      ? 'bg-white shadow-lg scale-105' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
                    }
                    flex items-center justify-center text-4xl
                  `}
                >
                  {isFlipped ? icon : '❓'}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
```

**🎯 Explicação da Lógica:**
- `flippedCards`: Array com índices das cartas viradas
- `handleCardClick`: Função que vira a carta
- `isFlipped`: Verifica se a carta está virada
- Condicional: Se virada, mostra ícone; senão, mostra ❓

### **Passo 6: Adicionar lógica de pares**

```tsx
'use client';

import { useState } from 'react';

const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]);
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
      
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
        setMatchedCards([...matchedCards, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={startNewGame}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
            </button>
            
            {gameStarted && (
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
                Movimentos: {moves}
              </div>
            )}
          </div>
        </header>

        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((icon, index) => {
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
                  `}
                >
                  {isFlipped || isMatched ? icon : '❓'}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
```

**🎯 Explicação da Lógica de Pares:**
- `matchedCards`: Cartas que já foram encontradas
- `moves`: Contador de tentativas
- `setTimeout`: Aguarda 1 segundo antes de virar
- `opacity-50`: Cartas encontradas ficam semi-transparentes

### **Passo 7: Adicionar mensagem de vitória**

```tsx
'use client';

import { useState } from 'react';

const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]);
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
      
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
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
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={startNewGame}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
            </button>
            
            {gameStarted && (
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
                Movimentos: {moves}
              </div>
            )}
          </div>
        </header>

        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((icon, index) => {
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
                  `}
                >
                  {isFlipped || isMatched ? icon : '❓'}
                </div>
              );
            })}
          </div>
        )}

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
      </div>
    </div>
  );
}
```

**🎉 Explicação da Vitória:**
- `isGameComplete`: Verifica se todas as cartas foram encontradas
- `matchedCards.length === cards.length`: Compara quantidade
- Mensagem de parabéns com estatísticas
- Botão para jogar novamente

### **Passo 8: Adicionar instruções**

```tsx
'use client';

import { useState } from 'react';

const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]);
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
      
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
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
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧠 Jogo da Memória
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Encontre os pares de ícones!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={startNewGame}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
            </button>
            
            {gameStarted && (
              <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
                Movimentos: {moves}
              </div>
            )}
          </div>
        </header>

        {gameStarted && (
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
            {cards.map((icon, index) => {
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
                  `}
                >
                  {isFlipped || isMatched ? icon : '❓'}
                </div>
              );
            })}
          </div>
        )}

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

        {!gameStarted && (
          <div className="bg-white rounded-lg p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Como Jogar:
            </h3>
            <ul className="text-lg text-gray-600 space-y-2">
              <li>• Clique em "Começar Jogo" para iniciar</li>
              <li>• Clique nas cartas para virá-las</li>
              <li>• Encontre os pares de ícones iguais</li>
              <li>• Complete o jogo com o menor número de movimentos!</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
```

**📚 Explicação das Instruções:**
- `!gameStarted`: Mostra quando o jogo não começou
- Lista com instruções claras
- Design consistente com o resto do jogo

### **Passo 9: Refatorar para componentes (Card)**

Agora vamos quebrar o código em componentes. Primeiro, vamos criar o componente Card:

```tsx
// src/components/aula-02/Card/Card.tsx
interface CardProps {
  icon: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function Card({ icon, isFlipped, isMatched, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        aspect-square rounded-lg cursor-pointer transition-all duration-300 transform
        ${isFlipped || isMatched 
          ? 'bg-white shadow-lg scale-105' 
          : 'bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg'
        }
        ${isMatched ? 'opacity-50' : ''}
        flex items-center justify-center text-4xl
      `}
    >
      {isFlipped || isMatched ? icon : '❓'}
    </div>
  );
}
```

### **Passo 10: Refatorar para componentes (GameBoard)**

```tsx
// src/components/aula-02/GameBoard/GameBoard.tsx
import Card from '../Card/Card';

interface GameBoardProps {
  cards: string[];
  flippedCards: number[];
  matchedCards: number[];
  onCardClick: (index: number) => void;
}

export default function GameBoard({ cards, flippedCards, matchedCards, onCardClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {cards.map((icon, index) => {
        const isFlipped = flippedCards.includes(index);
        const isMatched = matchedCards.includes(index);
        
        return (
          <Card
            key={index}
            icon={icon}
            isFlipped={isFlipped}
            isMatched={isMatched}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
}
```

### **Passo 11: Refatorar para componentes (Header)**

```tsx
// src/components/aula-02/Header/Header.tsx
interface HeaderProps {
  gameStarted: boolean;
  moves: number;
  onStartGame: () => void;
}

export default function Header({ gameStarted, moves, onStartGame }: HeaderProps) {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-white mb-4">
        🧠 Jogo da Memória
      </h1>
      <p className="text-xl text-blue-100 mb-6">
        Encontre os pares de ícones!
      </p>
      
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={onStartGame}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
        >
          {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
        </button>
        
        {gameStarted && (
          <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
            Movimentos: {moves}
          </div>
        )}
      </div>
    </header>
  );
}
```

### **Passo 12: Refatorar para componentes (VictoryMessage)**

```tsx
// src/components/aula-02/VictoryMessage/VictoryMessage.tsx
interface VictoryMessageProps {
  moves: number;
  onPlayAgain: () => void;
}

export default function VictoryMessage({ moves, onPlayAgain }: VictoryMessageProps) {
  return (
    <div className="text-center mt-8">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Parabéns! Você ganhou!
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Você completou o jogo em {moves} movimentos!
        </p>
        <button
          onClick={onPlayAgain}
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
        >
          Jogar Novamente
        </button>
      </div>
    </div>
  );
}
```

### **Passo 13: Refatorar para componentes (Instructions)**

```tsx
// src/components/aula-02/Instructions/Instructions.tsx
export default function Instructions() {
  return (
    <div className="bg-white rounded-lg p-8 shadow-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Como Jogar:
      </h3>
      <ul className="text-lg text-gray-600 space-y-2">
        <li>• Clique em "Começar Jogo" para iniciar</li>
        <li>• Clique nas cartas para virá-las</li>
        <li>• Encontre os pares de ícones iguais</li>
        <li>• Complete o jogo com o menor número de movimentos!</li>
      </ul>
    </div>
  );
}
```

### **Passo 14: Componente principal final**

```tsx
// src/aulas/aula-02/MemoryGame.tsx
'use client';

import { useState } from 'react';
import Header from '@/components/aula-02/Header/Header';
import GameBoard from '@/components/aula-02/GameBoard/GameBoard';
import VictoryMessage from '@/components/aula-02/VictoryMessage/VictoryMessage';
import Instructions from '@/components/aula-02/Instructions/Instructions';

const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●'];

export default function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [cards] = useState([...icons, ...icons]);
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
      
      if (cards[newFlippedCards[0]] === cards[newFlippedCards[1]]) {
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

        {isGameComplete && (
          <VictoryMessage 
            moves={moves}
            onPlayAgain={startNewGame}
          />
        )}

        {!gameStarted && <Instructions />}
      </div>
    </div>
  );
}
```

### **Passo 15: Usar o componente na página principal**

Agora vamos usar nosso jogo na página principal. Substitua o conteúdo de `src/app/page.tsx`:

```tsx
import MemoryGame from '@/aulas/aula-02/MemoryGame';

export default function Home() {
  return <MemoryGame />;
}
```

### **Passo 16: Testar o jogo**

1. Salve os arquivos
2. Vá para o navegador
3. Clique em "Começar Jogo"
4. Divirta-se jogando!

## 🎨 Personalize o Jogo!

### **Desafios Criativos:**

1. **Mude os ícones:**
```tsx
const icons = ['🚀', '🌟', '🎮', '🎨', '🎵', '🎪', '🎭', '🎯'];
```

2. **Adicione mais cartas:**
```tsx
const icons = ['⚡', '★', '●', '▲', '◆', '■', '▲', '●', '▲', '●'];
```

3. **Mude as cores do fundo:**
```tsx
className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 p-4"
```

4. **Adicione sons (opcional):**
```tsx
// Adicione no início do arquivo
const playSound = () => {
  // Código para tocar som quando encontrar par
};
```

## 🔍 O que aprendemos hoje?

### **Conceitos Técnicos:**
- **Gradientes**: Backgrounds coloridos e suaves
- **useState**: Gerenciar dados que mudam
- **Eventos**: onClick para responder a cliques
- **Lógica condicional**: if/else para tomar decisões
- **Arrays**: Listas de dados
- **CSS Grid**: Layout em grade
- **Animações**: Transições suaves

### **Habilidades de Programação:**
- **Pensamento lógico**: Como o jogo funciona
- **Gerenciamento de estado**: Dados que mudam
- **Estruturas de dados**: Arrays e objetos
- **Algoritmos**: Lógica do jogo
- **Debugging**: Encontrar e corrigir erros

### **Conceitos de Design:**
- **Responsividade**: Funciona em qualquer tela
- **Feedback visual**: Usuário sabe o que aconteceu
- **Animações**: Transições suaves
- **Hierarquia visual**: O que é mais importante

## 🎯 Próxima Aula
Na próxima aula vamos criar uma **Galeria de Fotos Interativa** e aprender sobre JavaScript avançado!

## 💡 Dicas do Professor

### **Para explicar conceitos difíceis:**
- **Estado**: "É como a memória do jogo - lembra o que está acontecendo"
- **Eventos**: "Quando você clica, algo acontece"
- **Arrays**: "É como uma lista de coisas"
- **Condicionais**: "Se isso, então aquilo"
- **Gradientes**: "É como uma mistura suave de cores"

### **Se tiver dificuldades:**
- Explique que programar é como dar instruções
- "Se clicar aqui, faça isso"
- "Se as cartas são iguais, marque como encontradas"
- "Se não são iguais, vire de volta"

### **Para manter o interesse:**
- Deixe escolher os ícones favoritos
- Celebre quando encontrar um par
- "Olha que legal! Você programou um jogo!"
- Permita experimentar com as cores

## 🎉 Parabéns!

Você criou seu primeiro jogo! 🎮
- É totalmente funcional
- Tem lógica de programação
- É visualmente atrativo
- Pode ser personalizado

**Você está se tornando um programador! 🚀**
