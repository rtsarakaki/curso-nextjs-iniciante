import { memo } from 'react';
import { FaBrain } from 'react-icons/fa';
import { HeaderProps } from '@/types/gameTypes';

const Header = memo(({ gameStarted, moves, onStartGame }: HeaderProps) => {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
        <FaBrain className="text-yellow-400" />
        Jogo da Memória
      </h1>
      <p className="text-xl text-blue-100 mb-6">
        Encontre os pares de ícones!
      </p>
      
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={onStartGame}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          aria-label={gameStarted ? 'Iniciar novo jogo' : 'Começar jogo'}
        >
          {gameStarted ? 'Novo Jogo' : 'Começar Jogo'}
        </button>
        
        {gameStarted && (
          <div 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold shadow-lg"
            role="status"
            aria-live="polite"
          >
            Movimentos: {moves}
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
