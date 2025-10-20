import React from 'react';

export default function Stats(){
  const data = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('simon-stats')||'{"games":0,"wins":0}') : {games:0,wins:0};
  const winrate = data.games ? Math.round((data.wins/data.games)*100) : 0;
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-pink-50 rounded">Jogos: <b>{data.games}</b></div>
      <div className="p-4 bg-purple-50 rounded">Win Rate: <b>{winrate}%</b></div>
    </div>
  );
}


