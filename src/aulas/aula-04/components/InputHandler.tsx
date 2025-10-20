import React, { useEffect, useRef } from 'react';

export default function InputHandler({ onKey }:{ onKey:(pad:0|1|2|3)=>void }){
  const ref = useRef<HTMLDivElement>(null);
  const onKeyRef = useRef(onKey);
  
  // Manter referência atualizada
  useEffect(() => {
    onKeyRef.current = onKey;
  }, [onKey]);
  
  useEffect(() => {
    // Adicionar listener global para capturar teclas
    const handleKeyDown = (e: KeyboardEvent) => {
      const map: Record<string,0|1|2|3> = { 
        ArrowUp: 0,      // ↑ = Verde (topo)
        ArrowRight: 1,    // → = Vermelho (direita)
        ArrowDown: 2,     // ↓ = Amarelo (baixo)
        ArrowLeft: 3,     // ← = Azul (esquerda)
        '1': 0, '2': 1, '3': 2, '4': 3,  // Números alternativos
        'w': 0, 'd': 1, 's': 2, 'a': 3   // WASD alternativo
      };
      
      if (e.key in map) {
        e.preventDefault();
        e.stopPropagation();
        onKeyRef.current(map[e.key]);
      }
    };
    
    // Adicionar listener global
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Array vazio - sem dependências
  
  return (
    <div
      ref={ref}
      tabIndex={0}
      aria-live="polite"
      onKeyDown={(e)=>{
        // Mapeamento das setas para cores do Genius
        const map: Record<string,0|1|2|3> = { 
          ArrowUp: 0,      // ↑ = Verde (topo)
          ArrowRight: 1,    // → = Vermelho (direita)
          ArrowDown: 2,     // ↓ = Amarelo (baixo)
          ArrowLeft: 3,     // ← = Azul (esquerda)
          '1': 0, '2': 1, '3': 2, '4': 3,  // Números alternativos
          'w': 0, 'd': 1, 's': 2, 'a': 3   // WASD alternativo
        } as any;
        if (e.key in map) {
          e.preventDefault(); // Evitar scroll da página
          e.stopPropagation();
          onKey(map[e.key]);
        }
      }}
      className="outline-none absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1000 }}
    />
  );
}


