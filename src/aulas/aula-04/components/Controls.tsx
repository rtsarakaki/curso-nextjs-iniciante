import React from 'react';

interface ControlsProps {
  onStart: () => void;
  strict: boolean;
  onStrict: (v:boolean)=>void;
  difficulty: 'easy'|'medium'|'hard';
  onDifficulty: (d:'easy'|'medium'|'hard')=>void;
  soundOn: boolean;
  onSound: (v:boolean)=>void;
}

export default function Controls({ onStart, strict, onStrict, difficulty, onDifficulty, soundOn, onSound }: ControlsProps){
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-inner">
      <div className="space-y-4">
        {/* Botão Start principal */}
        <div className="text-center">
          <button 
            onClick={onStart} 
            className="w-20 h-20 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-bold text-lg"
          >
            START
          </button>
        </div>
        
        {/* Controles secundários */}
        <div className="grid grid-cols-2 gap-4">
          {/* Modo Strict */}
          <div className="flex items-center justify-center space-x-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={strict} 
                onChange={(e)=>onStrict(e.target.checked)}
                className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500"
              />
              <span className="text-white text-sm font-medium">STRICT</span>
            </label>
          </div>
          
          {/* Som */}
          <div className="flex items-center justify-center space-x-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={soundOn} 
                onChange={(e)=>onSound(e.target.checked)}
                className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded focus:ring-green-500"
              />
              <span className="text-white text-sm font-medium">SOM</span>
            </label>
          </div>
        </div>
        
        {/* Seletor de dificuldade */}
        <div className="text-center">
          <label className="block text-white text-sm font-medium mb-2">DIFICULDADE</label>
          <select 
            value={difficulty} 
            onChange={(e)=>onDifficulty(e.target.value as any)} 
            className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="easy">FÁCIL</option>
            <option value="medium">MÉDIO</option>
            <option value="hard">DIFÍCIL</option>
          </select>
        </div>
      </div>
    </div>
  );
}


