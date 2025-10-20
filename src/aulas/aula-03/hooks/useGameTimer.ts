import { useState, useEffect } from 'react';

export function useGameTimer(initialTime: number, isActive: boolean) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const resetTimer = (newTime: number) => {
    setTimeLeft(newTime);
  };

  return { timeLeft, resetTimer };
}
