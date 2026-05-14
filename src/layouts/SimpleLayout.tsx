import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ParticlesBackground } from '../components/ParticlesBackground';

export const SimpleLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};
