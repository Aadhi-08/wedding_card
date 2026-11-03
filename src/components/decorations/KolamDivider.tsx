import React from 'react';

interface KolamDividerProps {
  className?: string;
  variant?: 'simple' | 'lotus' | 'ornate';
}

export const KolamDivider: React.FC<KolamDividerProps> = ({ className = '', variant = 'lotus' }) => {
  return (
    <div className={`flex items-center justify-center my-6 text-[#B89B5E] ${className}`}>
      <svg className="w-48 h-8 md:w-64 md:h-10" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left thin gold line */}
        <path d="M10 20 H110" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <circle cx="110" cy="20" r="2" fill="currentColor" />
        
        {/* Center motif - Lotus Flower & Flourish */}
        {variant === 'lotus' ? (
          <g transform="translate(150, 20)">
            {/* Center lotus */}
            <path d="M0 -10 C-4 -4, -12 2, 0 10 C12 2, 4 -4, 0 -10 Z" fill="#6E3943" opacity="0.8" />
            <path d="M0 -12 C-8 -4, -16 6, 0 12 C16 6, 8 -4, 0 -12 Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M-6 -6 C-14 -2, -18 8, -6 10 C-2 6, -4 0, -6 -6 Z" fill="currentColor" opacity="0.7" />
            <path d="M6 -6 C14 -2, 18 8, 6 10 C2 6, 4 0, 6 -6 Z" fill="currentColor" opacity="0.7" />
            {/* Outer flourish petals */}
            <path d="M-12 0 C-18 4, -24 0, -22 -6" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M12 0 C18 4, 24 0, 22 -6" stroke="currentColor" strokeWidth="1" fill="none" />
          </g>
        ) : (
          <g transform="translate(150, 20)">
            <polygon points="0,-8 6,0 0,8 -6,0" fill="currentColor" />
            <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
          </g>
        )}

        {/* Right thin gold line */}
        <circle cx="190" cy="20" r="2" fill="currentColor" />
        <path d="M190 20 H290" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
};
