import React from 'react';
import type { Pad } from '../hooks/useSimonGame';

interface BoardProps {
  highlight: Pad|null;
  disabled?: boolean;
  onPad?: (pad: Pad) => void;
}

export default function Board({ highlight, disabled, onPad }: BoardProps){
  const pads: Pad[] = [0,1,2,3];
  
  // Cores mais vibrantes e próximas ao Genius original
  const getPadStyle = (p: Pad) => {
    const baseColors = {
      0: 'bg-green-500', // Verde mais vibrante
      1: 'bg-red-500',   // Vermelho mais vibrante  
      2: 'bg-yellow-400', // Amarelo mais vibrante
      3: 'bg-blue-500'   // Azul mais vibrante
    };
    
    const highlightColors = {
      0: 'bg-green-300', // Verde claro quando destacado
      1: 'bg-red-300',   // Vermelho claro quando destacado
      2: 'bg-yellow-200', // Amarelo claro quando destacado
      3: 'bg-blue-300'   // Azul claro quando destacado
    };
    
    const isHighlighted = highlight === p;
    const colorClass = isHighlighted ? highlightColors[p] : baseColors[p];
    
    return `w-32 h-32 sm:w-40 sm:h-40 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 ${colorClass} ${
      isHighlighted ? 'scale-110 shadow-2xl' : 'scale-100'
    }`;
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-[400px] ${disabled? 'pointer-events-none select-none opacity-80':''}`} aria-disabled={disabled}>
      {/* Layout circular como o Genius original */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96">
        {/* Círculo externo - disco do Genius */}
        <div className="absolute inset-0 rounded-full border-8 border-gray-600 shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900"></div>
        {/* Pad Verde (topo) */}
        <button 
          key={0}
          aria-label="Pad Verde" 
          disabled={disabled}
          onClick={() => onPad && onPad(0)} 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${getPadStyle(0)}`}
        />
        
        {/* Pad Vermelho (direita) */}
        <button 
          key={1}
          aria-label="Pad Vermelho" 
          disabled={disabled}
          onClick={() => onPad && onPad(1)} 
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${getPadStyle(1)}`}
        />
        
        {/* Pad Amarelo (baixo) */}
        <button 
          key={2}
          aria-label="Pad Amarelo" 
          disabled={disabled}
          onClick={() => onPad && onPad(2)} 
          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${getPadStyle(2)}`}
        />
        
        {/* Pad Azul (esquerda) */}
        <button 
          key={3}
          aria-label="Pad Azul" 
          disabled={disabled}
          onClick={() => onPad && onPad(3)} 
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 ${getPadStyle(3)}`}
        />
        
        {/* Centro do Genius - área de controle (sem bloquear cliques) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-800 rounded-full shadow-inner flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


