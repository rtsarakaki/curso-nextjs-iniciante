import { memo } from 'react';
import { FaQuestion } from 'react-icons/fa';
import { CardProps } from '@/types/gameTypes';

const Card = memo(({ card, isFlipped, isMatched, onClick }: CardProps) => {
  const IconComponent = card.icon;
  
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
        hover:scale-110
      `}
      role="button"
      tabIndex={0}
      aria-label={`Carta ${card.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {isFlipped || isMatched ? (
        <IconComponent className="text-blue-600" />
      ) : (
        <FaQuestion className="text-white" />
      )}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
