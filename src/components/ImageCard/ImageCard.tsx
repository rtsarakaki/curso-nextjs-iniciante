import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  label: string;
  borderColor: 'red' | 'green' | 'blue';
}

export default function ImageCard({ src, alt, label, borderColor }: ImageCardProps) {
  const borderClass = `photo-card-${borderColor}`;
  
  return (
    <div className={`photo-card ${borderClass}`}>
      <Image 
        src={src} 
        alt={alt} 
        width={200}
        height={150}
        style={{ objectFit: 'cover' }}
      />
      <div className="photo-overlay">
        ● {label}
      </div>
    </div>
  );
}
