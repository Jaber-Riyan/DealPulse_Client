import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const ParticlesBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate static initial particles that flow with keyframes or simple interval drift
    const initialParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 6 + 2, // px
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.1, // flow upwards smoothly
      opacity: Math.random() * 0.4 + 0.1,
    }));

    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newY = p.y + p.speedY;
          let newX = p.x + p.speedX;

          // wrap around screen
          if (newY < -5) newY = 105;
          if (newX < -5) newX = 105;
          if (newX > 105) newX = -5;

          return { ...p, x: newX, y: newY };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full transition-all duration-75 ease-linear"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'var(--text-main)',
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px var(--text-main)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10 dark:via-white/5 dark:to-transparent opacity-30" />
    </div>
  );
};
