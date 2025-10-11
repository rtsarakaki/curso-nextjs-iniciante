import React from 'react';

interface FooterProps {
  copyright: string;
  icons: string[];
}

export default function Footer({ copyright, icons }: FooterProps) {
  return (
    <footer className="text-center text-white mt-10 max-w-4xl w-full">
      <p>{copyright}</p>
      <div className="mt-4">
        {icons.map((icon, index) => (
          <span key={index} className="text-blue-200 mx-2">{icon}</span>
        ))}
      </div>
    </footer>
  );
}
