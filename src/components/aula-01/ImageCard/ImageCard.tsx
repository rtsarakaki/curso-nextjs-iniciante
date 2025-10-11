import Image from 'next/image';
import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  label: string;
  borderColor: 'red' | 'green' | 'blue';
}

export default function ImageCard({ src, alt, label, borderColor }: ImageCardProps) {
  const borderColorClass = {
    red: 'border-red-500',
    green: 'border-green-500',
    blue: 'border-blue-500'
  }[borderColor];
  
  return (
    <div className={`w-48 h-36 relative rounded-lg overflow-hidden border-2 ${borderColorClass}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-1 text-center">
        ● {label}
      </div>
    </div>
  );
}
