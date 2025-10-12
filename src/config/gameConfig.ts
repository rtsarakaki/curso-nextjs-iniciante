export const GAME_CONFIG = {
  GRID_COLS: 4,
  FLIP_DELAY: 1000,
  MIN_MOVES: 8,
  MAX_MOVES: 50
} as const;

export const GAME_MESSAGES = {
  TITLE: 'Jogo da Memória',
  SUBTITLE: 'Encontre os pares de ícones!',
  START_BUTTON: 'Começar Jogo',
  NEW_GAME_BUTTON: 'Novo Jogo',
  VICTORY_TITLE: 'Parabéns! Você ganhou!',
  VICTORY_SUBTITLE: 'Você completou o jogo em {moves} movimentos!',
  PLAY_AGAIN: 'Jogar Novamente'
} as const;
