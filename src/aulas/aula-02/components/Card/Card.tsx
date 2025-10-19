import { FaQuestion } from 'react-icons/fa';

interface CardProps {
  icon: React.ComponentType<{ className?: string }>;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function Card({ icon: IconComponent, isFlipped, isMatched, onClick }: CardProps) {
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
      {isFlipped || isMatched ? (
        <IconComponent className="text-blue-600" />
      ) : (
        <FaQuestion className="text-white" />
      )}
    </div>
  );
}
