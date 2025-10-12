import { memo } from 'react';
import Card from '../Card/Card';
import { GameBoardProps } from '@/types/gameTypes';

const GameBoard = memo(({ cards, flippedCards, matchedCards, onCardClick }: GameBoardProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {cards.map((card, index) => {
        const isFlipped = flippedCards.includes(index);
        const isMatched = matchedCards.includes(index);
        
        return (
          <Card
            key={`${card.name}-${index}`}
            card={card}
            isFlipped={isFlipped}
            isMatched={isMatched}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
});

GameBoard.displayName = 'GameBoard';

export default GameBoard;
