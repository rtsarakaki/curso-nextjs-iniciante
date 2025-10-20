# 🎯 Aula 3: Jogo da Forca Interativo

## 🎯 Objetivo da Aula
Criar um jogo da forca completo e interativo, aprendendo conceitos avançados de React como **useRef**, **Context API**, **Local Storage** e **animações CSS**.

## 🎮 O que vamos criar
Um jogo da forca completo com:
- **150 palavras** organizadas por dificuldade (50 por nível)
- Teclado virtual interativo
- **Desenho preciso do boneco da forca** (CSS puro)
- Sistema de pontuação e estatísticas
- Persistência de dados (salvar progresso)
- Timer de jogo
- Validação de entrada
- **Boneco completo antes do fim do jogo**
- **Ícones modernos** (Lucide React)
- **Interface profissional** e responsiva

## 📚 O que vamos aprender
- **useRef**: Referências DOM e foco automático
- **Context API**: Estado global sem prop drilling
- **Local Storage**: Persistência de dados
- **CSS puro vs Tailwind**: Precisão no desenho de elementos
- **Validação**: Verificação de entrada do usuário
- **useEffect avançado**: Timer e cleanup
- **Sistema de dificuldades**: Múltiplos níveis
- **Estatísticas**: Histórico de jogos
- **Desenho preciso**: CSS inline para elementos complexos
- **Ícones SVG**: Lucide React para interface moderna
- **Organização de dados**: 150 palavras categorizadas
- **UX/UI**: Interface responsiva e profissional
- **Princípios SOLID**: Código bem estruturado e componentizado
- **Arquitetura limpa**: Separação clara de responsabilidades

## 🛠️ Preparação

### 1. Certifique-se que o projeto está rodando: `npm run dev`
### 2. Abra o arquivo `src/app/page.tsx`
### 3. Vamos criar um novo componente!

## 🛠️ Tecnologias Utilizadas

### **Core Technologies**
- **Next.js 14**: Framework React com App Router
- **React 18**: Hooks avançados (useRef, useEffect, useContext)
- **TypeScript**: Tipagem estática para melhor desenvolvimento

### **Styling & UI**
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Puro**: Para desenhos precisos (boneco da forca)
- **Lucide React**: Biblioteca de ícones SVG moderna

### **State Management**
- **Context API**: Estado global sem prop drilling
- **Local Storage**: Persistência de dados do usuário
- **Custom Hooks**: Lógica reutilizável

### **Features Avançadas**
- **Timer**: Contagem regressiva com useEffect
- **Validação**: Entrada de dados robusta
- **Responsividade**: Design adaptativo
- **Acessibilidade**: Interface inclusiva

## 🎨 Melhorias do Desenho

### **CSS Puro vs Tailwind**
Durante o desenvolvimento, descobrimos que **Tailwind CSS tem limitações** para desenhos precisos como o boneco da forca. **CSS puro** oferece muito mais controle:

**❌ Problemas com Tailwind:**
- Classes limitadas para posicionamento exato
- Dificuldade para rotações precisas
- Transformações complexas difíceis de controlar

**✅ Vantagens do CSS puro:**
- **Posicionamento pixel-perfect**: `position: absolute, top: 64px, left: 260px`
- **Transformações precisas**: `transform: 'translateX(-50%) rotate(-45deg)'`
- **Controle total**: `transformOrigin: 'left center'`
- **Flexibilidade**: Qualquer valor CSS é possível

### **Estrutura do Boneco Otimizada**
```css
/* Cabeça - Círculo perfeito */
width: '32px', height: '32px', borderRadius: '50%'

/* Corpo - Linha vertical central */
width: '4px', height: '46px'

/* Braços - Diagonais precisas */
width: '24px', height: '4px'
transform: 'rotate(-45deg)' // Esquerda
transform: 'rotate(45deg)'  // Direita

/* Pernas - Diagonais mais longas */
width: '34px', height: '4px'
```

### **Lógica de Jogo Melhorada**
- **Antes**: Jogo terminava quando `wrongGuesses >= maxWrongGuesses`
- **Agora**: Jogo termina quando `wrongGuesses > maxWrongGuesses`
- **Resultado**: Boneco completo é sempre mostrado antes do fim

### **Base de Dados Expandida**
- **150 palavras** organizadas por dificuldade
- **Fácil**: 50 palavras (3-8 letras) - Animais e natureza
- **Médio**: 50 palavras (9-12 letras) - Lugares e profissões  
- **Difícil**: 50 palavras (13+ letras) - Ciências e tecnologia
- **Variedade**: Muito mais conteúdo para jogar

### **Interface Modernizada**
- **Ícones SVG**: Lucide React substitui emojis
- **Consistência**: Visual profissional em todos os navegadores
- **Acessibilidade**: Melhor experiência para usuários
- **Performance**: Ícones otimizados e escaláveis
- **Paleta de cores uniforme**: Fundo pink-50 sem gradientes
- **Componentização SOLID**: Código bem estruturado e organizado

### **🐛 Correções de Bugs e Melhorias**
- **Fundo azul escuro corrigido**: Removido CSS global que causava fundo azul
- **Campos de entrada duplicados**: Removido input duplicado do GameControls
- **Paleta de cores uniforme**: Fundo pink-50 sem gradientes
- **Componentização adequada**: Cada componente com responsabilidade única
- **InputHandler separado**: Lógica de captura de entrada isolada
- **Código limpo**: Removido código não utilizado

## 🏗️ Princípios SOLID Aplicados

### **S - Single Responsibility Principle (Responsabilidade Única)**
Cada componente tem **UMA** responsabilidade específica:

- **`HangmanDrawing`**: Apenas renderiza o desenho da forca
- **`WordDisplay`**: Apenas exibe a palavra com letras descobertas
- **`GameStatus`**: Apenas mostra o status do jogo
- **`GameControls`**: Apenas gerencia os controles
- **`Keyboard`**: Apenas renderiza o teclado virtual
- **`InputHandler`**: Apenas captura entrada do teclado

### **O - Open/Closed Principle (Aberto/Fechado)**
- **Aberto para extensão**: Podemos adicionar novos componentes sem modificar os existentes
- **Fechado para modificação**: Componentes existentes não precisam ser alterados

### **L - Liskov Substitution Principle (Substituição de Liskov)**
- Qualquer componente pode ser substituído por outro que implemente a mesma interface
- Exemplo: `HangmanDrawing` pode ser substituído por `AnimatedHangmanDrawing`

### **I - Interface Segregation Principle (Segregação de Interface)**
- Cada componente recebe apenas as props que realmente precisa
- Interfaces específicas e focadas

### **D - Dependency Inversion Principle (Inversão de Dependência)**
- Componentes dependem de abstrações (hooks, context) não de implementações concretas
- `useGame()` hook abstrai a lógica do jogo

### **🎯 Benefícios da Arquitetura SOLID:**
- ✅ **Manutenibilidade**: Fácil de modificar e corrigir
- ✅ **Testabilidade**: Cada componente pode ser testado isoladamente
- ✅ **Reutilização**: Componentes podem ser reutilizados em outros jogos
- ✅ **Escalabilidade**: Fácil adicionar novas funcionalidades
- ✅ **Legibilidade**: Código mais limpo e organizado
- ✅ **Consistência**: Mesmo padrão em todas as aulas
- ✅ **Evolução**: Context API → Custom Hook (mais simples)
- ✅ **Didática**: Aprendizado progressivo e lógico

## 🎯 Resultado Final

### **Jogo Completo e Profissional**
- ✅ **150 palavras** organizadas por dificuldade
- ✅ **Desenho preciso** do boneco da forca
- ✅ **Interface moderna** com ícones SVG
- ✅ **Sistema de pontuação** e estatísticas
- ✅ **Persistência de dados** no Local Storage
- ✅ **Timer funcional** com contagem regressiva
- ✅ **Validação robusta** de entrada
- ✅ **Design responsivo** para todos os dispositivos
- ✅ **Acessibilidade** melhorada
- ✅ **Performance otimizada**
- ✅ **Arquitetura SOLID** aplicada
- ✅ **Custom Hook** personalizado
- ✅ **Evolução didática** Context API → Hook

### **Conceitos Aprendidos**
- **Context API** para estado global
- **useRef** para referências DOM
- **useEffect** avançado para timers
- **Local Storage** para persistência
- **CSS puro** vs Tailwind CSS
- **Ícones SVG** modernos
- **Validação** de entrada do usuário
- **Organização** de dados complexos
- **Princípios SOLID** na prática
- **Componentização** adequada
- **Separação de responsabilidades**
- **Arquitetura limpa** e escalável
- **Custom Hooks** personalizados
- **Evolução didática** Context API → Hook
- **Consistência** entre aulas
- **Separação de responsabilidades** (InputHandler)
- **Refatoração avançada** de componentes
- **Correção de bugs** comuns
- **Refatoração** de código
- **Paleta de cores** consistente

## 📝 Passo a Passo

### **Passo 1: Criar estrutura básica e Context API**

**🎯 O que vamos fazer:**
Vamos criar a estrutura básica do jogo da forca e implementar o Context API para gerenciar o estado global do jogo.

**🏗️ Princípios SOLID aplicados:**
- **SRP**: Context API tem responsabilidade única de gerenciar estado
- **DIP**: Componentes dependem de abstração (useGame hook)

**🧠 Por que isso é importante?**
O Context API permite compartilhar estado entre componentes sem precisar passar props por toda a árvore de componentes (prop drilling). É essencial para jogos complexos onde múltiplos componentes precisam acessar o mesmo estado.

**🎯 O que vamos aprender:**
- **Context API**: Como criar e usar contexto global
- **useContext**: Como consumir contexto em componentes
- **Provider**: Como fornecer contexto para componentes filhos
- **Estado global**: Como gerenciar estado compartilhado
- **Estrutura de projeto**: Como organizar contextos

**📚 Conceito Detalhado: Context API**

**O que é Context API?**
Context API é uma forma de compartilhar dados entre componentes sem precisar passar props manualmente por toda a árvore de componentes.

### **Passo 2: Componentização seguindo SOLID**

**🎯 O que vamos fazer:**
Vamos criar componentes específicos seguindo os princípios SOLID, cada um com uma responsabilidade única.

**🏗️ Estrutura de componentes:**
```
src/aulas/aula-03/
├── components/
│   ├── HangmanDrawing.tsx    # SRP: Apenas desenho
│   ├── WordDisplay.tsx       # SRP: Apenas exibição da palavra
│   ├── GameStatus.tsx        # SRP: Apenas status do jogo
│   ├── GameControls.tsx      # SRP: Apenas controles
│   ├── Keyboard.tsx          # SRP: Apenas teclado virtual
│   ├── InputHandler.tsx      # SRP: Apenas captura de entrada
│   ├── DifficultySelector.tsx
│   └── Statistics.tsx
├── hooks/
│   └── useHangmanGame.ts     # Hook personalizado com lógica
└── HangmanGame.tsx          # Orquestrador principal
```

**🎯 Benefícios da componentização:**
- ✅ **Testabilidade**: Cada componente pode ser testado isoladamente
- ✅ **Reutilização**: Componentes podem ser usados em outros jogos
- ✅ **Manutenibilidade**: Fácil de modificar e corrigir
- ✅ **Legibilidade**: Código mais limpo e organizado

**🏗️ Princípios SOLID aplicados:**
- **SRP**: Cada componente tem uma responsabilidade única
- **OCP**: Aberto para extensão, fechado para modificação
- **LSP**: Componentes são substituíveis
- **ISP**: Interfaces específicas e focadas
- **DIP**: Dependem de abstrações, não implementações

### **Passo 3: Hook personalizado (useHangmanGame)**

**🎯 O que vamos fazer:**
Vamos criar um hook personalizado para centralizar toda a lógica do jogo, seguindo o mesmo padrão do jogo da memória.

**🧠 Por que isso é importante?**
- **Consistência**: Mesmo padrão usado na Aula 2
- **Centralização**: Toda lógica em um lugar
- **Reutilização**: Hook pode ser usado em outros componentes
- **Testabilidade**: Lógica isolada e testável

**📚 Conceito Detalhado: Custom Hooks**

**O que são Custom Hooks?**
Custom Hooks são funções JavaScript que começam com "use" e podem usar outros hooks do React. Eles permitem extrair lógica de componentes para funções reutilizáveis.

**Como funciona?**
```tsx
// Hook personalizado
function useHangmanGame() {
  const [gameState, setGameState] = useState(initialState);
  
  const startNewGame = useCallback(() => {
    // Lógica do jogo
  }, []);
  
  return { gameState, startNewGame };
}

// Uso no componente
function HangmanGame() {
  const { gameState, startNewGame } = useHangmanGame();
  // Componente fica mais limpo
}
```

**🎯 Benefícios do Hook:**
- ✅ **Lógica centralizada**: Tudo em um lugar
- ✅ **Reutilização**: Pode ser usado em outros componentes
- ✅ **Testabilidade**: Hook pode ser testado isoladamente
- ✅ **Manutenibilidade**: Fácil de modificar e corrigir
- ✅ **Consistência**: Mesmo padrão da Aula 2

### **🔧 Refatoração Avançada: InputHandler**

**🎯 O que vamos fazer:**
Vamos separar a lógica de captura de entrada em um componente específico, aplicando o princípio da Responsabilidade Única.

**🧠 Por que isso é importante?**
- **SRP**: Cada componente tem uma responsabilidade única
- **Testabilidade**: Lógica de entrada pode ser testada isoladamente
- **Reutilização**: InputHandler pode ser usado em outros jogos
- **Manutenibilidade**: Código mais limpo e organizado

**📚 Conceito Detalhado: Separação de Responsabilidades**

**Antes (violando SRP):**
```tsx
function HangmanGame() {
  const handleKeyPress = (e) => {
    // Lógica de captura de teclado misturada
    // com lógica de orquestração
  };
  
  return (
    <div>
      <input onKeyPress={handleKeyPress} />
      {/* Outros componentes */}
    </div>
  );
}
```

**Depois (seguindo SRP):**
```tsx
// Componente específico para captura
function InputHandler({ gameStatus, onGuess }) {
  const handleKeyPress = (e) => {
    // Apenas lógica de captura
  };
  return <input onKeyPress={handleKeyPress} />;
}

// Componente principal apenas orquestra
function HangmanGame() {
  return (
    <div>
      <InputHandler gameStatus={gameStatus} onGuess={makeGuess} />
      {/* Outros componentes */}
    </div>
  );
}
```

**🎯 Benefícios da Refatoração:**
- ✅ **Responsabilidade única**: InputHandler só cuida de entrada
- ✅ **Testabilidade**: Pode ser testado isoladamente
- ✅ **Reutilização**: Usado em outros jogos
- ✅ **Código limpo**: HangmanGame foca na orquestração

### **🔄 Evolução Didática: Context API → Custom Hook**

**📚 Por que mudamos de Context API para Custom Hook?**

**1. Simplicidade:**
- **Context API**: Requer Provider, Context, useContext
- **Custom Hook**: Apenas uma função que retorna o que precisamos

**2. Consistência:**
- **Aula 2**: Usamos `useMemoryGame` hook
- **Aula 3**: Agora usamos `useHangmanGame` hook
- **Padrão uniforme**: Mesma abordagem em todas as aulas

**3. Manutenibilidade:**
- **Context API**: Mais complexo para gerenciar
- **Custom Hook**: Mais simples e direto

**🎯 Comparação Didática:**

```tsx
// ❌ Context API (mais complexo)
const GameContext = createContext();
function GameProvider({ children }) { /* lógica */ }
function useGame() { return useContext(GameContext); }

// ✅ Custom Hook (mais simples)
function useHangmanGame() {
  const [gameState, setGameState] = useState(initialState);
  return { gameState, startNewGame, makeGuess };
}
```

**🧠 Aprendizado Progressivo:**
1. **Aula 1**: HTML/CSS básico
2. **Aula 2**: React + Custom Hook (`useMemoryGame`)
3. **Aula 3**: React + Custom Hook (`useHangmanGame`) + Princípios SOLID

**Como funciona?**
```tsx
// 1. Criar contexto
const GameContext = createContext();

// 2. Criar provider
function GameProvider({ children }) {
  const [gameState, setGameState] = useState({});
  
  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
}

// 3. Usar em componentes
function GameComponent() {
  const { gameState } = useContext(GameContext);
  return <div>{gameState.word}</div>;
}
```

**Para que serve?**
- **Compartilhamento**: Dados acessíveis por múltiplos componentes
- **Organização**: Estado centralizado
- **Performance**: Evita re-renders desnecessários
- **Simplicidade**: Não precisa passar props manualmente

**Quando usar?**
- Quando múltiplos componentes precisam do mesmo estado
- Quando você tem "prop drilling" (props passadas por muitos níveis)
- Quando quer centralizar lógica de estado
- Em aplicações complexas com estado compartilhado

**📚 Conceito Detalhado: useRef**

**O que é useRef?**
`useRef` é um hook que permite criar referências a elementos DOM ou valores que persistem entre re-renders.

**Como funciona?**
```tsx
const inputRef = useRef(null);

// Focar no input
inputRef.current.focus();

// Acessar valor
const value = inputRef.current.value;
```

**Para que serve?**
- **Referências DOM**: Acessar elementos HTML diretamente
- **Foco automático**: Focar em inputs
- **Valores persistentes**: Valores que não causam re-render
- **Medições**: Obter dimensões de elementos

**Quando usar?**
- Quando precisa acessar elementos DOM
- Para foco automático em inputs
- Para valores que não devem causar re-render
- Para integração com bibliotecas externas

**Primeiro, vamos criar a estrutura:**

```tsx
// src/contexts/GameContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Tipos para o jogo
interface GameState {
  word: string;
  guessedLetters: string[];
  wrongGuesses: number;
  gameStatus: 'playing' | 'won' | 'lost';
  difficulty: 'easy' | 'medium' | 'hard';
  score: number;
  timeLeft: number;
}

interface GameContextType {
  gameState: GameState;
  setGameState: (state: Partial<GameState>) => void;
  startNewGame: () => void;
  makeGuess: (letter: string) => void;
  resetGame: () => void;
}

// Criar contexto
const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider do contexto
export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    word: '',
    guessedLetters: [],
    wrongGuesses: 0,
    gameStatus: 'playing',
    difficulty: 'easy',
    score: 0,
    timeLeft: 300 // 5 minutos
  });

  const startNewGame = () => {
    const words = {
      easy: ['CASA', 'GATO', 'SOL', 'MAR'],
      medium: ['COMPUTADOR', 'ELEFANTE', 'BICICLETA'],
      hard: ['PROGRAMACAO', 'NEUROCIENCIA', 'CRIPTOGRAFIA']
    };
    
    const randomWord = words[gameState.difficulty][
      Math.floor(Math.random() * words[gameState.difficulty].length)
    ];
    
    setGameState({
      ...gameState,
      word: randomWord,
      guessedLetters: [],
      wrongGuesses: 0,
      gameStatus: 'playing',
      timeLeft: 300
    });
  };

  const makeGuess = (letter: string) => {
    if (gameState.guessedLetters.includes(letter)) return;
    
    const newGuessedLetters = [...gameState.guessedLetters, letter];
    const isCorrect = gameState.word.includes(letter);
    const newWrongGuesses = isCorrect ? gameState.wrongGuesses : gameState.wrongGuesses + 1;
    
    // Verificar vitória
    const hasWon = gameState.word.split('').every(char => 
      char === ' ' || newGuessedLetters.includes(char)
    );
    
    // Verificar derrota
    const hasLost = newWrongGuesses >= 6;
    
    setGameState({
      ...gameState,
      guessedLetters: newGuessedLetters,
      wrongGuesses: newWrongGuesses,
      gameStatus: hasWon ? 'won' : hasLost ? 'lost' : 'playing',
      score: hasWon ? gameState.score + 100 : gameState.score
    });
  };

  const resetGame = () => {
    setGameState({
      word: '',
      guessedLetters: [],
      wrongGuesses: 0,
      gameStatus: 'playing',
      difficulty: 'easy',
      score: 0,
      timeLeft: 300
    });
  };

  return (
    <GameContext.Provider value={{
      gameState,
      setGameState,
      startNewGame,
      makeGuess,
      resetGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

// Hook para usar o contexto
export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
```

**📚 Conceito Detalhado: TypeScript Interfaces**

**O que são interfaces?**
Interfaces definem a estrutura de dados que um objeto deve ter, como um "contrato" que especifica quais propriedades são obrigatórias.

**Como funcionam?**
```tsx
interface User {
  name: string;
  age: number;
  email?: string; // Opcional
}

const user: User = {
  name: 'João',
  age: 25
  // email é opcional
};
```

**Para que servem?**
- **Type Safety**: Prevenir erros de tipo
- **Documentação**: Esclarecer estrutura de dados
- **IntelliSense**: Autocompletar no editor
- **Refatoração**: Mudanças seguras no código

**Quando usar?**
- Sempre que definir estruturas de dados
- Para props de componentes
- Para estado de aplicação
- Para APIs e integrações

### **Passo 2: Criar componente principal do jogo**

**🎯 O que vamos fazer:**
Vamos criar o componente principal do jogo da forca que usa o contexto e renderiza a interface do jogo.

**🧠 Por que isso é importante?**
O componente principal coordena todos os outros componentes e usa o contexto para acessar o estado global do jogo.

**🎯 O que vamos aprender:**
- **useContext**: Como consumir contexto em componentes
- **Renderização condicional**: Como mostrar diferentes estados
- **Composição**: Como juntar múltiplos componentes
- **Props**: Como passar dados entre componentes

```tsx
// src/aulas/aula-03/HangmanGame.tsx
'use client';

import { useGame } from '@/contexts/GameContext';
import { useRef, useEffect } from 'react';

export default function HangmanGame() {
  const { gameState, startNewGame, makeGuess, resetGame } = useGame();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focar no input quando o jogo começar
  useEffect(() => {
    if (gameState.gameStatus === 'playing' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameState.gameStatus]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputRef.current) {
      const letter = inputRef.current.value.toUpperCase();
      if (letter && letter.match(/[A-Z]/)) {
        makeGuess(letter);
        inputRef.current.value = '';
      }
    }
  };

  const renderWord = () => {
    return gameState.word.split('').map((char, index) => (
      <span 
        key={index}
        className="text-4xl font-bold mx-1 p-2 border-b-4 border-gray-800 min-w-[40px] text-center"
      >
        {char === ' ' ? ' ' : gameState.guessedLetters.includes(char) ? char : '_'}
      </span>
    ));
  };

  const renderHangman = () => {
    const parts = [
      gameState.wrongGuesses >= 1, // Cabeça
      gameState.wrongGuesses >= 2, // Corpo
      gameState.wrongGuesses >= 3, // Braço esquerdo
      gameState.wrongGuesses >= 4, // Braço direito
      gameState.wrongGuesses >= 5, // Perna esquerda
      gameState.wrongGuesses >= 6, // Perna direita
    ];

    return (
      <div className="relative w-64 h-80 mx-auto">
        {/* Forca */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-800"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-800"></div>
        <div className="absolute top-0 right-0 w-2 h-64 bg-gray-800"></div>
        <div className="absolute bottom-0 left-0 w-32 h-2 bg-gray-800"></div>
        
        {/* Boneco */}
        {parts[0] && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-800 rounded-full"></div>
        )}
        {parts[1] && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gray-800"></div>
        )}
        {parts[2] && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 transform rotate-45 origin-left"></div>
        )}
        {parts[3] && (
          <div className="absolute top-20 left-1/2 transform translate-x-1/2 w-8 h-2 bg-gray-800 transform -rotate-45 origin-right"></div>
        )}
        {parts[4] && (
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 transform rotate-45 origin-left"></div>
        )}
        {parts[5] && (
          <div className="absolute top-32 left-1/2 transform translate-x-1/2 w-8 h-2 bg-gray-800 transform -rotate-45 origin-right"></div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 Jogo da Forca
          </h1>
          <div className="flex justify-center gap-4 text-white">
            <span>Pontuação: {gameState.score}</span>
            <span>Tempo: {Math.floor(gameState.timeLeft / 60)}:{(gameState.timeLeft % 60).toString().padStart(2, '0')}</span>
            <span>Erros: {gameState.wrongGuesses}/6</span>
          </div>
        </header>

        {/* Jogo */}
        <main className="text-center">
          {gameState.gameStatus === 'playing' && (
            <div className="bg-white rounded-lg p-8 shadow-xl mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Adivinhe a palavra!
              </h2>
              
              {/* Palavra */}
              <div className="mb-8">
                {renderWord()}
              </div>

              {/* Forca */}
              <div className="mb-8">
                {renderHangman()}
              </div>

              {/* Input */}
              <div className="mb-4">
                <input
                  ref={inputRef}
                  type="text"
                  maxLength={1}
                  onKeyPress={handleKeyPress}
                  className="text-2xl text-center border-2 border-gray-300 rounded-lg p-2 w-16"
                  placeholder="?"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Digite uma letra e pressione Enter
                </p>
              </div>

              {/* Letras já tentadas */}
              <div className="mb-4">
                <p className="text-gray-600 mb-2">Letras tentadas:</p>
                <div className="flex justify-center gap-2">
                  {gameState.guessedLetters.map((letter, index) => (
                    <span 
                      key={index}
                      className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Resultado */}
          {gameState.gameStatus === 'won' && (
            <div className="bg-green-500 text-white rounded-lg p-8 shadow-xl mb-6">
              <h2 className="text-3xl font-bold mb-4">🎉 Parabéns! Você ganhou!</h2>
              <p className="text-xl mb-4">A palavra era: <strong>{gameState.word}</strong></p>
              <p className="text-lg mb-6">Pontuação: {gameState.score}</p>
              <button
                onClick={startNewGame}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors"
              >
                Jogar Novamente
              </button>
            </div>
          )}

          {gameState.gameStatus === 'lost' && (
            <div className="bg-red-500 text-white rounded-lg p-8 shadow-xl mb-6">
              <h2 className="text-3xl font-bold mb-4">💀 Game Over!</h2>
              <p className="text-xl mb-4">A palavra era: <strong>{gameState.word}</strong></p>
              <button
                onClick={startNewGame}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          )}

          {/* Controles */}
          <div className="bg-white rounded-lg p-6 shadow-xl">
            <div className="flex justify-center gap-4">
              <button
                onClick={startNewGame}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Novo Jogo
              </button>
              <button
                onClick={resetGame}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
              >
                Resetar
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
```

**📚 Conceito Detalhado: useRef com TypeScript**

**Como usar useRef com TypeScript?**
```tsx
// Referência para input
const inputRef = useRef<HTMLInputElement>(null);

// Acessar elemento
if (inputRef.current) {
  inputRef.current.focus();
  inputRef.current.value = '';
}
```

**Para que serve?**
- **Foco automático**: Focar em inputs quando necessário
- **Validação**: Acessar valores de inputs
- **Controle**: Manipular elementos DOM diretamente
- **Performance**: Evitar re-renders desnecessários

### **Passo 3: Adicionar timer e useEffect avançado**

**🎯 O que vamos fazer:**
Vamos implementar um timer de jogo usando useEffect com cleanup para gerenciar o tempo restante.

**🧠 Por que isso é importante?**
Um timer adiciona pressão ao jogo e ensina conceitos importantes sobre useEffect, cleanup e gerenciamento de side effects.

**🎯 O que vamos aprender:**
- **useEffect com dependências**: Como controlar quando o efeito executa
- **Cleanup**: Como limpar timers e evitar memory leaks
- **useEffect avançado**: Múltiplos efeitos e dependências
- **Side effects**: Como gerenciar operações assíncronas

**📚 Conceito Detalhado: useEffect com Cleanup**

**O que é cleanup?**
Cleanup é uma função que limpa recursos quando o componente é desmontado ou quando as dependências mudam.

**Como funciona?**
```tsx
useEffect(() => {
  const timer = setInterval(() => {
    // Lógica do timer
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
  };
}, [dependencies]);
```

**Para que serve?**
- **Prevenir memory leaks**: Limpar timers e listeners
- **Performance**: Evitar operações desnecessárias
- **Estabilidade**: Prevenir erros em componentes desmontados
- **Boas práticas**: Gerenciar recursos adequadamente

**Quando usar?**
- Sempre que usar timers
- Com event listeners
- Com subscriptions
- Com operações assíncronas

```tsx
// Adicionar ao GameContext.tsx
export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    // ... estado anterior
  });

  // Timer effect
  useEffect(() => {
    if (gameState.gameStatus !== 'playing' || gameState.timeLeft <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeLeft <= 1) {
          return { ...prev, gameStatus: 'lost' as const, timeLeft: 0 };
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    // Cleanup
    return () => clearInterval(timer);
  }, [gameState.gameStatus, gameState.timeLeft]);

  // ... resto do código
}
```

**📚 Conceito Detalhado: useEffect com Múltiplas Dependências**

**Como funciona?**
```tsx
useEffect(() => {
  // Executa quando qualquer dependência muda
}, [dep1, dep2, dep3]);

useEffect(() => {
  // Executa apenas quando dep1 muda
}, [dep1]);

useEffect(() => {
  // Executa apenas uma vez (componentDidMount)
}, []);
```

**Para que serve?**
- **Controle fino**: Executar efeitos apenas quando necessário
- **Performance**: Evitar re-execuções desnecessárias
- **Lógica específica**: Diferentes efeitos para diferentes mudanças
- **Debugging**: Facilitar identificação de problemas

### **Passo 4: Implementar Local Storage para persistência**

**🎯 O que vamos fazer:**
Vamos implementar Local Storage para salvar o progresso do jogo, pontuação e estatísticas.

**🧠 Por que isso é importante?**
Local Storage permite que o usuário mantenha seu progresso mesmo fechando o navegador, criando uma experiência mais envolvente.

**🎯 O que vamos aprender:**
- **Local Storage**: Como salvar dados no navegador
- **JSON**: Como serializar/deserializar objetos
- **useEffect**: Como carregar dados na inicialização
- **Persistência**: Como manter dados entre sessões

**📚 Conceito Detalhado: Local Storage**

**O que é Local Storage?**
Local Storage é uma API do navegador que permite salvar dados no computador do usuário, persistindo entre sessões.

**Como funciona?**
```tsx
// Salvar dados
localStorage.setItem('key', JSON.stringify(data));

// Carregar dados
const data = JSON.parse(localStorage.getItem('key') || '{}');

// Remover dados
localStorage.removeItem('key');
```

**Para que serve?**
- **Persistência**: Dados sobrevivem ao fechar o navegador
- **Performance**: Dados acessíveis instantaneamente
- **UX**: Usuário não perde progresso
- **Offline**: Funciona sem internet

**Quando usar?**
- Para salvar preferências do usuário
- Para manter progresso de jogos
- Para cache de dados
- Para configurações da aplicação

```tsx
// Adicionar ao GameContext.tsx
export function GameProvider({ children }: { children: ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    word: '',
    guessedLetters: [],
    wrongGuesses: 0,
    gameStatus: 'playing',
    difficulty: 'easy',
    score: 0,
    timeLeft: 300
  });

  // Carregar dados do Local Storage
  useEffect(() => {
    const savedScore = localStorage.getItem('hangman-score');
    const savedDifficulty = localStorage.getItem('hangman-difficulty');
    
    if (savedScore) {
      setGameState(prev => ({
        ...prev,
        score: parseInt(savedScore),
        difficulty: (savedDifficulty as 'easy' | 'medium' | 'hard') || 'easy'
      }));
    }
  }, []);

  // Salvar pontuação
  const updateScore = (newScore: number) => {
    setGameState(prev => ({ ...prev, score: newScore }));
    localStorage.setItem('hangman-score', newScore.toString());
  };

  // Salvar dificuldade
  const updateDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    setGameState(prev => ({ ...prev, difficulty }));
    localStorage.setItem('hangman-difficulty', difficulty);
  };

  // ... resto do código
}
```

**📚 Conceito Detalhado: JSON Serialization**

**O que é serialização?**
Serialização é o processo de converter objetos JavaScript em strings para armazenamento.

**Como funciona?**
```tsx
// Serializar (objeto → string)
const data = { name: 'João', age: 25 };
const jsonString = JSON.stringify(data);
// Resultado: '{"name":"João","age":25}'

// Deserializar (string → objeto)
const parsedData = JSON.parse(jsonString);
// Resultado: { name: 'João', age: 25 }
```

**Para que serve?**
- **Armazenamento**: Converter objetos para strings
- **Transmissão**: Enviar dados via HTTP
- **Persistência**: Salvar em Local Storage
- **Compatibilidade**: Formato universal

### **Passo 5: Adicionar sistema de dificuldades**

**🎯 O que vamos fazer:**
Vamos implementar um sistema de dificuldades com palavras diferentes e configurações específicas para cada nível.

**🧠 Por que isso é importante?**
Diferentes dificuldades tornam o jogo mais interessante e ensinam sobre configuração de aplicações e gerenciamento de estado complexo.

**🎯 O que vamos aprender:**
- **Configuração**: Como criar sistemas configuráveis
- **Estado complexo**: Como gerenciar múltiplas configurações
- **Validação**: Como validar entrada do usuário
- **UX**: Como criar interfaces intuitivas

```tsx
// Adicionar ao GameContext.tsx
interface GameConfig {
  easy: {
    words: string[];
    timeLimit: number;
    maxWrongGuesses: number;
    pointsPerLetter: number;
  };
  medium: {
    words: string[];
    timeLimit: number;
    maxWrongGuesses: number;
    pointsPerLetter: number;
  };
  hard: {
    words: string[];
    timeLimit: number;
    maxWrongGuesses: number;
    pointsPerLetter: number;
  };
}

const GAME_CONFIG: GameConfig = {
  easy: {
    words: ['CASA', 'GATO', 'SOL', 'MAR', 'LUZ', 'PAZ', 'AMOR', 'VIDA'],
    timeLimit: 300, // 5 minutos
    maxWrongGuesses: 6,
    pointsPerLetter: 10
  },
  medium: {
    words: ['COMPUTADOR', 'ELEFANTE', 'BICICLETA', 'TELEFONE', 'JANELA', 'ESCRITORIO'],
    timeLimit: 240, // 4 minutos
    maxWrongGuesses: 5,
    pointsPerLetter: 15
  },
  hard: {
    words: ['PROGRAMACAO', 'NEUROCIENCIA', 'CRIPTOGRAFIA', 'ALGORITMO', 'DESENVOLVIMENTO'],
    timeLimit: 180, // 3 minutos
    maxWrongGuesses: 4,
    pointsPerLetter: 25
  }
};

export function GameProvider({ children }: { children: ReactNode }) {
  // ... estado anterior

  const startNewGame = () => {
    const config = GAME_CONFIG[gameState.difficulty];
    const randomWord = config.words[Math.floor(Math.random() * config.words.length)];
    
    setGameState({
      ...gameState,
      word: randomWord,
      guessedLetters: [],
      wrongGuesses: 0,
      gameStatus: 'playing',
      timeLeft: config.timeLimit
    });
  };

  const makeGuess = (letter: string) => {
    if (gameState.guessedLetters.includes(letter)) return;
    
    const config = GAME_CONFIG[gameState.difficulty];
    const newGuessedLetters = [...gameState.guessedLetters, letter];
    const isCorrect = gameState.word.includes(letter);
    const newWrongGuesses = isCorrect ? gameState.wrongGuesses : gameState.wrongGuesses + 1;
    
    // Verificar vitória
    const hasWon = gameState.word.split('').every(char => 
      char === ' ' || newGuessedLetters.includes(char)
    );
    
    // Verificar derrota
    const hasLost = newWrongGuesses >= config.maxWrongGuesses;
    
    // Calcular pontuação
    const newScore = hasWon ? 
      gameState.score + (gameState.word.length * config.pointsPerLetter) : 
      gameState.score;
    
    setGameState({
      ...gameState,
      guessedLetters: newGuessedLetters,
      wrongGuesses: newWrongGuesses,
      gameStatus: hasWon ? 'won' : hasLost ? 'lost' : 'playing',
      score: newScore
    });
  };

  // ... resto do código
}
```

### **Passo 6: Criar componente de seleção de dificuldade**

**🎯 O que vamos fazer:**
Vamos criar um componente para selecionar a dificuldade do jogo com interface intuitiva.

**🧠 Por que isso é importante?**
Uma boa interface de seleção de dificuldade melhora a experiência do usuário e ensina sobre design de interfaces.

```tsx
// src/aulas/aula-03/components/DifficultySelector.tsx
'use client';

import { useGame } from '@/contexts/GameContext';

export default function DifficultySelector() {
  const { gameState, setGameState } = useGame();

  const difficulties = [
    {
      level: 'easy',
      name: 'Fácil',
      description: 'Palavras curtas, 5 minutos, 6 erros',
      color: 'green',
      icon: '🟢'
    },
    {
      level: 'medium',
      name: 'Médio',
      description: 'Palavras médias, 4 minutos, 5 erros',
      color: 'yellow',
      icon: '🟡'
    },
    {
      level: 'hard',
      name: 'Difícil',
      description: 'Palavras longas, 3 minutos, 4 erros',
      color: 'red',
      icon: '🔴'
    }
  ];

  const handleDifficultyChange = (difficulty: 'easy' | 'medium' | 'hard') => {
    setGameState({ ...gameState, difficulty });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl mb-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Escolha a Dificuldade
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {difficulties.map((diff) => (
          <button
            key={diff.level}
            onClick={() => handleDifficultyChange(diff.level as 'easy' | 'medium' | 'hard')}
            className={`p-4 rounded-lg border-2 transition-all ${
              gameState.difficulty === diff.level
                ? `border-${diff.color}-500 bg-${diff.color}-50`
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{diff.icon}</div>
              <div className="font-bold text-lg mb-1">{diff.name}</div>
              <div className="text-sm text-gray-600">{diff.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
```

### **Passo 7: Implementar animações CSS**

**🎯 O que vamos fazer:**
Vamos adicionar animações CSS para tornar o jogo mais visualmente atraente e ensinar sobre keyframes e transforms.

**🧠 Por que isso é importante?**
Animações melhoram a experiência do usuário e ensinam conceitos importantes sobre CSS e performance.

**🎯 O que vamos aprender:**
- **Keyframes**: Como criar animações personalizadas
- **Transforms**: Como transformar elementos
- **Transitions**: Como criar transições suaves
- **Performance**: Como otimizar animações

**📚 Conceito Detalhado: CSS Keyframes**

**O que são keyframes?**
Keyframes definem os pontos-chave de uma animação, como frames de um filme.

**Como funcionam?**
```css
@keyframes fadeIn {
  0% { opacity: 0; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}

.element {
  animation: fadeIn 0.5s ease-in-out;
}
```

**Para que servem?**
- **Animações personalizadas**: Criar efeitos únicos
- **Controle fino**: Definir cada frame da animação
- **Performance**: Animações otimizadas pelo navegador
- **UX**: Melhorar experiência do usuário

**Quando usar?**
- Para feedback visual
- Para transições entre estados
- Para chamar atenção
- Para melhorar UX

```tsx
// Adicionar ao HangmanGame.tsx
const renderHangman = () => {
  const parts = [
    gameState.wrongGuesses >= 1, // Cabeça
    gameState.wrongGuesses >= 2, // Corpo
    gameState.wrongGuesses >= 3, // Braço esquerdo
    gameState.wrongGuesses >= 4, // Braço direito
    gameState.wrongGuesses >= 5, // Perna esquerda
    gameState.wrongGuesses >= 6, // Perna direita
  ];

  return (
    <div className="relative w-64 h-80 mx-auto">
      {/* Forca */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gray-800"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gray-800"></div>
      <div className="absolute top-0 right-0 w-2 h-64 bg-gray-800"></div>
      <div className="absolute bottom-0 left-0 w-32 h-2 bg-gray-800"></div>
      
      {/* Boneco com animações */}
      {parts[0] && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 border-4 border-gray-800 rounded-full animate-pulse"></div>
      )}
      {parts[1] && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-gray-800 animate-bounce"></div>
      )}
      {parts[2] && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 transform rotate-45 origin-left animate-pulse"></div>
      )}
      {parts[3] && (
        <div className="absolute top-20 left-1/2 transform translate-x-1/2 w-8 h-2 bg-gray-800 transform -rotate-45 origin-right animate-pulse"></div>
      )}
      {parts[4] && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-800 transform rotate-45 origin-left animate-bounce"></div>
      )}
      {parts[5] && (
        <div className="absolute top-32 left-1/2 transform translate-x-1/2 w-8 h-2 bg-gray-800 transform -rotate-45 origin-right animate-bounce"></div>
      )}
    </div>
  );
};

// Adicionar estilos CSS personalizados
const styles = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
  }
  
  .shake { animation: shake 0.5s ease-in-out; }
  .glow { animation: glow 1s ease-in-out infinite; }
`;

// Adicionar ao componente
export default function HangmanGame() {
  // ... código anterior

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 p-4">
        {/* ... resto do JSX */}
      </div>
    </>
  );
}
```

### **Passo 8: Criar sistema de estatísticas**

**🎯 O que vamos fazer:**
Vamos implementar um sistema de estatísticas que mostra o histórico de jogos, pontuação máxima e outras métricas.

**🧠 Por que isso é importante?**
Estatísticas motivam o usuário a continuar jogando e ensinam sobre análise de dados e persistência.

```tsx
// src/aulas/aula-03/components/Statistics.tsx
'use client';

import { useGame } from '@/contexts/GameContext';
import { useState, useEffect } from 'react';

interface GameStats {
  totalGames: number;
  gamesWon: number;
  gamesLost: number;
  bestScore: number;
  averageScore: number;
  bestTime: number;
  averageTime: number;
  favoriteDifficulty: string;
  currentStreak: number;
  bestStreak: number;
}

export default function Statistics() {
  const { gameState } = useGame();
  const [stats, setStats] = useState<GameStats>({
    totalGames: 0,
    gamesWon: 0,
    gamesLost: 0,
    bestScore: 0,
    averageScore: 0,
    bestTime: 0,
    averageTime: 0,
    favoriteDifficulty: 'easy',
    currentStreak: 0,
    bestStreak: 0
  });

  useEffect(() => {
    const savedStats = localStorage.getItem('hangman-stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  useEffect(() => {
    if (gameState.gameStatus === 'won' || gameState.gameStatus === 'lost') {
      const newStats = {
        ...stats,
        totalGames: stats.totalGames + 1,
        gamesWon: gameState.gameStatus === 'won' ? stats.gamesWon + 1 : stats.gamesWon,
        gamesLost: gameState.gameStatus === 'lost' ? stats.gamesLost + 1 : stats.gamesLost,
        bestScore: Math.max(stats.bestScore, gameState.score),
        averageScore: (stats.averageScore * stats.totalGames + gameState.score) / (stats.totalGames + 1),
        currentStreak: gameState.gameStatus === 'won' ? stats.currentStreak + 1 : 0,
        bestStreak: Math.max(stats.bestStreak, gameState.gameStatus === 'won' ? stats.currentStreak + 1 : 0)
      };
      
      setStats(newStats);
      localStorage.setItem('hangman-stats', JSON.stringify(newStats));
    }
  }, [gameState.gameStatus, gameState.score]);

  const winRate = stats.totalGames > 0 ? (stats.gamesWon / stats.totalGames * 100).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📊 Estatísticas
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{stats.totalGames}</div>
          <div className="text-sm text-gray-600">Jogos</div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{winRate}%</div>
          <div className="text-sm text-gray-600">Taxa de Vitória</div>
        </div>
        
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{stats.bestScore}</div>
          <div className="text-sm text-gray-600">Melhor Pontuação</div>
        </div>
        
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{stats.bestStreak}</div>
          <div className="text-sm text-gray-600">Melhor Sequência</div>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2">Resumo</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Vitórias: {stats.gamesWon}</div>
            <div>Derrotas: {stats.gamesLost}</div>
            <div>Sequência atual: {stats.currentStreak}</div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2">Performance</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div>Pontuação média: {stats.averageScore.toFixed(0)}</div>
            <div>Dificuldade favorita: {stats.favoriteDifficulty}</div>
            <div>Pontuação atual: {gameState.score}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### **Passo 9: Criar página principal com roteamento**

**🎯 O que vamos fazer:**
Vamos criar a página principal que integra todos os componentes e implementa o roteamento Next.js.

```tsx
// src/app/aula-03/page.tsx
import { GameProvider } from '@/contexts/GameContext';
import HangmanGame from '@/aulas/aula-03/HangmanGame';
import DifficultySelector from '@/aulas/aula-03/components/DifficultySelector';
import Statistics from '@/aulas/aula-03/components/Statistics';

export default function Aula03Page() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500">
        <div className="max-w-6xl mx-auto p-4">
          <HangmanGame />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <DifficultySelector />
            <Statistics />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}
```

### **Passo 10: Refatoração com Custom Hooks**

**🎯 O que vamos fazer:**
Vamos refatorar o código criando custom hooks para organizar melhor a lógica e seguir os princípios SOLID.

**🧠 Por que isso é importante?**
Custom hooks permitem reutilizar lógica, facilitam testes e melhoram a organização do código.

```tsx
// src/aulas/aula-03/hooks/useGameTimer.ts
import { useState, useEffect } from 'react';

export function useGameTimer(initialTime: number, isActive: boolean) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const resetTimer = (newTime: number) => {
    setTimeLeft(newTime);
  };

  return { timeLeft, resetTimer };
}

// src/aulas/aula-03/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}
```

## 🔍 O que aprendemos hoje?

### **Conceitos React Avançados:**
- **useRef**: Referências DOM e foco automático
- **Context API**: Estado global sem prop drilling
- **useEffect avançado**: Timer, cleanup e múltiplas dependências
- **Custom Hooks**: Reutilização de lógica
- **TypeScript**: Interfaces e type safety

### **Conceitos de Persistência:**
- **Local Storage**: Salvar dados no navegador
- **JSON**: Serialização de objetos
- **Estatísticas**: Análise de dados do usuário

### **Conceitos Visuais:**
- **Animações CSS**: Keyframes e transforms
- **Transições**: Estados visuais suaves
- **Responsividade**: Design mobile-first

### **Conceitos de Lógica:**
- **Validação**: Verificação de entrada
- **Algoritmos**: Lógica de jogo complexa
- **Configuração**: Sistemas flexíveis
- **Performance**: Otimização de animações

## 🎯 Próxima Aula
Na próxima aula vamos criar um **Sistema de Chat em Tempo Real** e aprender sobre **WebSockets**, **Real-time** e **Backend**!

## 💡 Dicas do Professor

### **Para manter o interesse:**
- Deixe escolher a dificuldade
- Mostre estatísticas em tempo real
- Celebre cada vitória
- "Olha como você está melhorando!"

### **Para ensinar conceitos:**
- Explique cada hook individualmente
- Mostre a diferença entre useState e useRef
- Demonstre o Context API na prática
- Explique quando usar cada ferramenta

### **Para organização:**
- Separe lógica de interface
- Use custom hooks para reutilização
- Mantenha componentes pequenos
- Documente interfaces TypeScript

## 🎉 Parabéns!

Você criou um jogo da forca completo e aprendeu conceitos avançados de React! 🎯
- É interativo e responsivo
- Tem persistência de dados
- Usa Context API para estado global
- Tem animações bonitas
- Salva estatísticas do usuário
- **Agora sabe criar aplicações complexas com React!**

**Na próxima aula vamos criar um chat em tempo real! ⚡**
