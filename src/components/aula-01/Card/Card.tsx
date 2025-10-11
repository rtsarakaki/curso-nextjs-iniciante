import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="bg-white p-8 mb-8 rounded-lg">
      <h2 className="text-gray-800 text-2xl mb-4">{title}</h2>
      {children}
    </section>
  );
}
