import React from 'react';
import { weddingConfig } from '../config/weddingConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-[#FAF6EF] border-t border-[#B89B5E]/30 text-center text-[#8A6468] select-none">
      <div className="max-w-md mx-auto px-4 space-y-2">
        <p className="font-serif text-sm font-semibold tracking-wider text-[#6E3943]">
          {weddingConfig.groom} & {weddingConfig.bride} Wedding Invitation
        </p>
        <p className="font-serif text-xs italic">
          Designed with love & traditional South Indian grace
        </p>
        <p className="text-[10px] tracking-widest text-[#B89B5E] uppercase pt-2">
          {weddingConfig.weddingDateFormatted} • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
