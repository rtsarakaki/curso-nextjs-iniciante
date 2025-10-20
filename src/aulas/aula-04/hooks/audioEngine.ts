export interface AudioEngine {
  playPad(pad: 0|1|2|3): void;
  success(): void;
  fail(): void;
  enabled: boolean;
  setEnabled(v: boolean): void;
}

export function createWebAudioEngine(): AudioEngine {
  let ctx: AudioContext | null = null;
  let enabled = true;
  
  // Frequências dos pads (notas musicais)
  const frequencies = [329.63, 261.63, 220.00, 164.81]; // E4, C4, A3, E3
  
  function initContext() {
    if (!ctx && typeof window !== 'undefined' && 'AudioContext' in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      ctx = new AudioContextClass();
    }
    return ctx;
  }

  function playTone(frequency: number, duration: number = 200) {
    if (!enabled) return;
    
    const audioContext = initContext();
    if (!audioContext) return;

    // Resume se estiver suspenso
    if (audioContext.state === 'suspended') {
      audioContext.resume().catch(() => {});
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Configuração do oscilador
    oscillator.type = 'triangle'; // Som mais suave que sine
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

    // Envelope ADSR simples
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.01); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration / 1000); // Decay

    // Conexão
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Execução
    oscillator.start(now);
    oscillator.stop(now + duration / 1000);

    // Limpeza automática
    oscillator.onended = () => {
      try {
        oscillator.disconnect();
        gainNode.disconnect();
      } catch {
        // Ignorar erros de desconexão
      }
    };
  }

  return {
    playPad(pad: 0|1|2|3) {
      playTone(frequencies[pad], 180);
    },
    
    success() {
      playTone(523.25, 220); // C5
    },
    
    fail() {
      playTone(110.00, 320); // A2
    },
    
    get enabled() {
      return enabled;
    },
    
    setEnabled(value: boolean) {
      enabled = value;
    }
  };
}

export function createSilentEngine(): AudioEngine {
  return {
    playPad() {},
    success() {},
    fail() {},
    enabled: false,
    setEnabled() {}
  };
}