import React from 'react';

interface HobbyCardProps {
  hobby: {
    id: number;
    name: string;
    icon: string;
    color: string;
  };
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  const colorClass = {
    yellow: 'bg-yellow-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
    red: 'bg-red-100'
  }[hobby.color];
  
  return (
    <div className={`${colorClass} text-center p-5 rounded-lg w-36`}>
      <div className="text-3xl mb-2">{hobby.icon}</div>
      <h3 className="text-gray-800 font-bold">{hobby.name}</h3>
    </div>
  );
}
