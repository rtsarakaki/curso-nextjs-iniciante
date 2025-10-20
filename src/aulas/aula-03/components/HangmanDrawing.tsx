import React from 'react';

interface HangmanDrawingProps {
  wrongGuesses: number;
}

/**
 * Componente responsável APENAS por renderizar o desenho da forca
 * Segue o princípio da Responsabilidade Única (SRP)
 */
export default function HangmanDrawing({ wrongGuesses }: HangmanDrawingProps) {
  const parts = [
    wrongGuesses >= 1, // Cabeça
    wrongGuesses >= 2, // Corpo
    wrongGuesses >= 3, // Braço esquerdo
    wrongGuesses >= 4, // Braço direito
    wrongGuesses >= 5, // Perna esquerda
    wrongGuesses >= 6, // Perna direita
  ];

  return (
    <div style={{ position: 'relative', width: '320px', height: '384px', margin: '0 auto' }}>
      {/* Estrutura da forca */}
      <div style={{
        position: 'absolute',
        bottom: '128px',
        left: '128px',
        width: '228px',
        height: '8px',
        backgroundColor: '#1f2937'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '0',
        left: '128px',
        width: '8px',
        height: '256px',
        backgroundColor: '#1f2937'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '0',
        left: '128px',
        width: '128px',
        height: '8px',
        backgroundColor: '#1f2937'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '0',
        left: '256px',
        width: '8px',
        height: '32px',
        backgroundColor: '#1f2937'
      }}></div>
      
      {/* Corda */}
      <div style={{
        position: 'absolute',
        top: '32px',
        left: '258px',
        width: '4px',
        height: '32px',
        backgroundColor: '#1f2937'
      }}></div>
      
      {/* Boneco da forca */}
      {/* 1. CABEÇA - Círculo na corda */}
      {parts[0] && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: '260px',
          transform: 'translateX(-50%)',
          width: '32px',
          height: '32px',
          border: '4px solid #1f2937',
          borderRadius: '50%'
        }}></div>
      )}
      
      {/* 2. CORPO - Linha vertical central */}
      {parts[1] && (
        <div style={{
          position: 'absolute',
          top: '96px',
          left: '260px',
          transform: 'translateX(-50%)',
          width: '4px',
          height: '46px',
          backgroundColor: '#1f2937'
        }}></div>
      )}
      
      {/* 3. BRAÇO ESQUERDO - Linha diagonal para esquerda */}
      {parts[2] && (
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '254px',
          transform: 'translateX(-50%) rotate(-45deg)',
          width: '24px',
          height: '4px',
          backgroundColor: '#1f2937',
          transformOrigin: 'left center'
        }}></div>
      )}
      
      {/* 4. BRAÇO DIREITO - Linha diagonal para direita */}
      {parts[3] && (
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '266px',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '24px',
          height: '4px',
          backgroundColor: '#1f2937',
          transformOrigin: 'right center'
        }}></div>
      )}
      
      {/* 5. PERNA ESQUERDA - Linha diagonal para esquerda */}
      {parts[4] && (
        <div style={{
          position: 'absolute',
          top: '160px',
          left: '254px',
          transform: 'translateX(-50%) rotate(-45deg)',
          width: '34px',
          height: '4px',
          backgroundColor: '#1f2937',
          transformOrigin: 'left center'
        }}></div>
      )}
      
      {/* 6. PERNA DIREITA - Linha diagonal para direita */}
      {parts[5] && (
        <div style={{
          position: 'absolute',
          top: '160px',
          left: '266px',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '34px',
          height: '4px',
          backgroundColor: '#1f2937',
          transformOrigin: 'right center'
        }}></div>
      )}
    </div>
  );
}
