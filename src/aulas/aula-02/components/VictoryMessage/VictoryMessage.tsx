import { FaTrophy } from 'react-icons/fa';

interface VictoryMessageProps {
  moves: number;
  onPlayAgain: () => void;
}

export default function VictoryMessage({ moves, onPlayAgain }: VictoryMessageProps) {
  return (
    <div className="text-center mt-8">
      <div className="bg-white rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-bold text-green-600 mb-4 flex items-center justify-center gap-3">
          <FaTrophy className="text-yellow-500" />
          Parabéns! Você ganhou!
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
