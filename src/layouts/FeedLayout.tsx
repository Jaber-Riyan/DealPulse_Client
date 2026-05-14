import React from "react";
import { Navbar } from "../components/Navbar";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { MobileNav } from "../components/MobileNav";
import { ParticlesBackground } from "../components/ParticlesBackground";

export const FeedLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      <ParticlesBackground />
      <Navbar />
      <div className="flex-1 w-full mx-auto flex pb-16 lg:pb-0 relative z-10">
        <LeftSidebar />
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          {children}
        </main>
        <RightSidebar />
      </div>
      <MobileNav />
    </div>
  );
};
