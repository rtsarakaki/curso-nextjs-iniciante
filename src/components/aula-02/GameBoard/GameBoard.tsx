import Card from '../Card/Card';

interface GameBoardProps {
  cards: Array<{ icon: React.ComponentType<{ className?: string }>; name: string }>;
  flippedCards: number[];
  matchedCards: number[];
  onCardClick: (index: number) => void;
}

export default function GameBoard({ cards, flippedCards, matchedCards, onCardClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      {cards.map((card, index) => {
        const isFlipped = flippedCards.includes(index);
        const isMatched = matchedCards.includes(index);
        
        return (
          <Card
            key={index}
            icon={card.icon}
            isFlipped={isFlipped}
            isMatched={isMatched}
            onClick={() => onCardClick(index)}
          />
        );
      })}
    </div>
  );
}
