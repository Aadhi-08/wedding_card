import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

interface DesktopWrapperProps {
  children: React.ReactNode;
}

export const DesktopWrapper: React.FC<DesktopWrapperProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#EFE7D8] flex justify-center items-center relative overflow-x-hidden">
      {/* Background Subtle Floral Watermark Pattern for Desktop Ambient Space */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: `radial-gradient(#B89B5E 0.75px, transparent 0.75px), radial-gradient(#B89B5E 0.75px, #EFE7D8 0.75px)`,
          backgroundSize: `30px 30px`,
          backgroundPosition: `0 0, 15px 15px`,
        }}
      />

      {/* Decorative Outer Left & Right Ornate Pillars for Large Screens */}
      <div className="hidden lg:block fixed left-8 top-12 bottom-12 w-24 border-r border-[#B89B5E]/30 pointer-events-none">
        <div className="h-full flex flex-col justify-between items-center py-6 text-[#B89B5E]/60 text-xs font-serif tracking-[0.3em] [writing-mode:vertical-lr] rotate-180">
          <span>SACRED UNION • {weddingConfig.groom.toUpperCase()} & {weddingConfig.bride.toUpperCase()}</span>
          <span className="text-base">🪔</span>
          <span>TRADITIONAL INVITATION</span>
        </div>
      </div>

      <div className="hidden lg:block fixed right-8 top-12 bottom-12 w-24 border-l border-[#B89B5E]/30 pointer-events-none">
        <div className="h-full flex flex-col justify-between items-center py-6 text-[#B89B5E]/60 text-xs font-serif tracking-[0.3em] [writing-mode:vertical-lr]">
          <span>NOV 21-22, 2026 • CHENNAI</span>
          <span className="text-base">🌸</span>
          <span>WITH THE BLESSINGS OF ELDERS</span>
        </div>
      </div>

      {/* Main Centered Mobile Invitation Viewport Container */}
      <main className="relative z-10 w-full max-w-[480px] sm:max-w-[540px] lg:my-8 bg-[#FAF6EF] shadow-[0_20px_60px_-15px_rgba(110,57,67,0.2),0_0_0_1px_rgba(184,155,94,0.4)] lg:rounded-[40px] overflow-hidden min-h-screen lg:min-h-0 border-x border-[#B89B5E]/40">
        {children}
      </main>
    </div>
  );
};
