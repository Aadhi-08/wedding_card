import React from 'react';

interface FloralBorderProps {
  position?: 'top' | 'bottom';
  className?: string;
}

export const FloralBorder: React.FC<FloralBorderProps> = ({ position = 'top', className = '' }) => {
  const isTop = position === 'top';

  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className} ${isTop ? '-mb-2' : '-mt-2'}`}>
      <svg
        className={`w-full h-12 md:h-16 text-[#B89B5E] ${isTop ? '' : 'rotate-180'}`}
        viewBox="0 0 500 50"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E599B2" />
            <stop offset="100%" stopColor="#6E3943" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#557C3E" />
            <stop offset="100%" stopColor="#2E4A1E" />
          </linearGradient>
        </defs>

        {/* Hanging Jasmine / Mango Leaf Toran Pattern */}
        {/* Hanging garland arch */}
        <path d="M0 0 Q 125 35, 250 15 Q 375 35, 500 0 V 0 H 0 Z" fill="#F3EBDD" opacity="0.3" />
        <path d="M0 2 C 125 40, 375 40, 500 2" stroke="#B89B5E" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />

        {/* Lotus & Mango Leaf Accents along the top garland */}
        {/* Left Mango Leaves */}
        <path d="M40 5 C30 20, 20 28, 10 32 C25 25, 35 15, 40 5 Z" fill="url(#leafGradient)" />
        <path d="M80 8 C70 24, 60 32, 50 35 C65 28, 75 18, 80 8 Z" fill="url(#leafGradient)" />

        {/* Center Main Lotus */}
        <g transform="translate(250, 22)">
          {/* Main Petals */}
          <path d="M0 -15 C-12 -5, -18 10, 0 16 C18 10, 12 -5, 0 -15 Z" fill="url(#lotusGradient)" />
          <path d="M-8 -10 C-18 -2, -22 12, -6 14 C-2 8, -4 0, -8 -10 Z" fill="#D87896" opacity="0.9" />
          <path d="M8 -10 C18 -2, 22 12, 6 14 C2 8, 4 0, 8 -10 Z" fill="#D87896" opacity="0.9" />
          <path d="M-14 -4 C-24 4, -26 14, -12 12 C-8 6, -10 0, -14 -4 Z" fill="url(#lotusGradient)" opacity="0.8" />
          <path d="M14 -4 C24 4, 26 14, 12 12 C8 6, 10 0, 14 -4 Z" fill="url(#lotusGradient)" opacity="0.8" />
          {/* Gold Center Pod */}
          <circle cx="0" cy="4" r="3" fill="#D4AF37" />
        </g>

        {/* Left Side Small Lotus */}
        <g transform="translate(125, 18)">
          <path d="M0 -10 C-8 -3, -12 7, 0 11 C12 7, 8 -3, 0 -10 Z" fill="url(#lotusGradient)" />
          <path d="M-5 -7 C-12 -1, -14 8, -4 9 Z" fill="#D87896" />
          <path d="M5 -7 C12 -1, 14 8, 4 9 Z" fill="#D87896" />
        </g>

        {/* Right Side Small Lotus */}
        <g transform="translate(375, 18)">
          <path d="M0 -10 C-8 -3, -12 7, 0 11 C12 7, 8 -3, 0 -10 Z" fill="url(#lotusGradient)" />
          <path d="M-5 -7 C-12 -1, -14 8, -4 9 Z" fill="#D87896" />
          <path d="M5 -7 C12 -1, 14 8, 4 9 Z" fill="#D87896" />
        </g>

        {/* Right Mango Leaves */}
        <path d="M420 8 C430 24, 440 32, 450 35 C435 28, 425 18, 420 8 Z" fill="url(#leafGradient)" />
        <path d="M460 5 C470 20, 480 28, 490 32 C475 25, 465 15, 460 5 Z" fill="url(#leafGradient)" />
      </svg>
    </div>
  );
};
