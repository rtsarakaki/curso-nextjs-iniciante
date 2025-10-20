import { useState, useEffect, useCallback } from 'react';

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

// Configuração do jogo
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
    words: [
      'CASA', 'GATO', 'SOL', 'MAR', 'LUZ', 'PAZ', 'AMOR', 'VIDA', 'FOGO', 'AGUA',
      'PEDRA', 'FLOR', 'ARVORE', 'CACHORRO', 'PEIXE', 'PASSARO', 'BORBOLETA', 'ABELHA',
      'FORMIGA', 'RATO', 'GALO', 'VACA', 'CAVALO', 'PORCO', 'COELHO', 'LEAO', 'TIGRE',
      'ELEFANTE', 'GIRAFA', 'MACACO', 'URSO', 'LOBO', 'RAPOSA', 'COBRA', 'LAGARTO',
      'SAPO', 'TARTARUGA', 'PEIXE', 'TUBARAO', 'BALEIA', 'GOLFINHO', 'POLVO', 'CARANGUEJO',
      'LAGOSTA', 'CAMARAO', 'SALMAO', 'ATUM', 'SARDINHA', 'ANCHOVA'
    ],
    timeLimit: 300, // 5 minutos
    maxWrongGuesses: 6,
    pointsPerLetter: 10
  },
  medium: {
    words: [
      'COMPUTADOR', 'ELEFANTE', 'BICICLETA', 'TELEFONE', 'JANELA', 'ESCRITORIO',
      'BIBLIOTECA', 'HOSPITAL', 'FARMACIA', 'SUPERMERCADO', 'RESTAURANTE', 'ESCOLA',
      'UNIVERSIDADE', 'MUSEU', 'TEATRO', 'CINEMA', 'SHOPPING', 'AEROPORTO', 'ESTACAO',
      'TERMINAL', 'EMPRESA', 'FABRICA', 'OFICINA', 'LABORATORIO', 'CLINICA',
      'CONSULTORIO', 'DENTISTA', 'MEDICO', 'ENFERMEIRO', 'PROFESSOR', 'ESTUDANTE',
      'ENGENHEIRO', 'ARQUITETO', 'DESIGNER', 'PROGRAMADOR', 'ANALISTA', 'GERENTE',
      'DIRETOR', 'PRESIDENTE', 'SECRETARIA', 'RECEPCIONISTA', 'VENDEDOR', 'CAIXA',
      'GARCOM', 'COZINHEIRO', 'MOTORISTA', 'PILOTO', 'CAPITAO', 'MARINHEIRO'
    ],
    timeLimit: 240, // 4 minutos
    maxWrongGuesses: 5,
    pointsPerLetter: 15
  },
  hard: {
    words: [
      'PROGRAMACAO', 'NEUROCIENCIA', 'CRIPTOGRAFIA', 'ALGORITMO', 'DESENVOLVIMENTO',
      'ARQUITETURA', 'ENGENHARIA', 'MATEMATICA', 'FISICA', 'QUIMICA', 'BIOLOGIA',
      'PSICOLOGIA', 'SOCIOLOGIA', 'FILOSOFIA', 'HISTORIA', 'GEOGRAFIA', 'LITERATURA',
      'LINGUISTICA', 'ANTROPOLOGIA', 'ARQUEOLOGIA', 'PALEONTOLOGIA', 'GEOLOGIA',
      'ASTRONOMIA', 'ASTROFISICA', 'COSMOLOGIA', 'QUANTUM', 'RELATIVIDADE', 'TERMODINAMICA',
      'ELETROMAGNETISMO', 'MECANICA', 'OPTICA', 'ACUSTICA', 'TERMODINAMICA', 'ESTATISTICA',
      'PROBABILIDADE', 'CALCULO', 'ALGEBRA', 'GEOMETRIA', 'TRIGONOMETRIA', 'ANALISE',
      'TOPOLOGIA', 'TEORIA', 'HYPOTHESIS', 'EXPERIMENTO', 'OBSERVACAO', 'DEDUCAO',
      'INDUCAO', 'SINTESE', 'ANALISE', 'COMPARACAO', 'CLASSIFICACAO'
    ],
    timeLimit: 180, // 3 minutos
    maxWrongGuesses: 4,
    pointsPerLetter: 25
  }
};

/**
 * Hook personalizado para gerenciar a lógica do jogo da forca
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export function useHangmanGame() {
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

    return () => clearInterval(timer);
  }, [gameState.gameStatus, gameState.timeLeft]);

  const startNewGame = useCallback(() => {
    setGameState(prevState => {
      const config = GAME_CONFIG[prevState.difficulty];
      const randomWord = config.words[Math.floor(Math.random() * config.words.length)];
      
      console.log('Dificuldade:', prevState.difficulty);
      console.log('Palavra selecionada:', randomWord);
      console.log('Total de palavras:', config.words.length);
      
      return {
        ...prevState,
        word: randomWord,
        guessedLetters: [],
        wrongGuesses: 0,
        gameStatus: 'playing',
        timeLeft: config.timeLimit
      };
    });
  }, []);

  const makeGuess = useCallback((letter: string) => {
    // Validar se o jogo está ativo e a letra é válida
    if (gameState.gameStatus !== 'playing' || !letter || gameState.guessedLetters.includes(letter)) {
      return;
    }
    
    const config = GAME_CONFIG[gameState.difficulty];
    const newGuessedLetters = [...gameState.guessedLetters, letter];
    const isCorrect = gameState.word.includes(letter);
    const newWrongGuesses = isCorrect ? gameState.wrongGuesses : gameState.wrongGuesses + 1;
    
    // Verificar vitória
    const hasWon = gameState.word.split('').every(char => 
      char === ' ' || newGuessedLetters.includes(char)
    );
    
    // Verificar derrota - só perde após mostrar o boneco completo
    const hasLost = newWrongGuesses > config.maxWrongGuesses;
    
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

    // Salvar pontuação no Local Storage
    if (hasWon) {
      localStorage.setItem('hangman-score', newScore.toString());
    }
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState({
      word: '',
      guessedLetters: [],
      wrongGuesses: 0,
      gameStatus: 'playing',
      difficulty: 'easy',
      score: 0,
      timeLeft: 300
    });
  }, []);

  const setDifficulty = useCallback((difficulty: 'easy' | 'medium' | 'hard') => {
    console.log('Mudando dificuldade para:', difficulty);
    setGameState(prev => ({
      ...prev,
      difficulty
    }));
    localStorage.setItem('hangman-difficulty', difficulty);
  }, []);

  return {
    gameState,
    startNewGame,
    makeGuess,
    resetGame,
    setDifficulty
  };
}
