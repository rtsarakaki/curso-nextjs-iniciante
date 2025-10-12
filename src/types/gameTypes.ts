export interface GameCard {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

export interface GameState {
  gameStarted: boolean;
  cards: GameCard[];
  flippedCards: number[];
  matchedCards: number[];
  moves: number;
  isGameComplete: boolean;
}

export interface GameActions {
  startNewGame: () => void;
  handleCardClick: (index: number) => void;
}

export interface CardProps {
  card: GameCard;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export interface GameBoardProps {
  cards: GameCard[];
  flippedCards: number[];
  matchedCards: number[];
  onCardClick: (index: number) => void;
}

export interface HeaderProps {
  gameStarted: boolean;
  moves: number;
  onStartGame: () => void;
}

export interface VictoryMessageProps {
  moves: number;
  onPlayAgain: () => void;
}
