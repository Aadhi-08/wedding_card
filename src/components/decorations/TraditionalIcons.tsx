import React from 'react';

interface EventIconProps {
  type: 'haldi' | 'mehendi' | 'muhurtham' | 'reception';
  className?: string;
}

export const TraditionalEventIcon: React.FC<EventIconProps> = ({ type, className = 'w-12 h-12' }) => {
  switch (type) {
    case 'haldi':
      return (
        // Turmeric Bowl with Marigold Petals & Kumkum
        <div className={`relative inline-flex items-center justify-center p-2 rounded-full bg-[#FAF6EF] border border-[#B89B5E]/30 shadow-sm ${className}`}>
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Bowl */}
            <path d="M12 36 C12 50, 52 50, 52 36 Z" fill="#D4AF37" stroke="#997E43" strokeWidth="2" />
            <ellipse cx="32" cy="36" rx="20" ry="5" fill="#E5C158" stroke="#997E43" strokeWidth="1.5" />
            {/* Turmeric Powder Mound */}
            <path d="M16 36 C18 24, 46 24, 48 36 Z" fill="#F4B41A" />
            {/* Kumkum Dot on Haldi */}
            <circle cx="32" cy="27" r="3" fill="#A82836" />
            {/* Green Mango leaves sticking out */}
            <path d="M10 32 C4 24, 8 16, 18 22 Z" fill="#4B7B34" />
            <path d="M54 32 C60 24, 56 16, 46 22 Z" fill="#4B7B34" />
          </svg>
        </div>
      );

    case 'mehendi':
      return (
        // Henna Hand Artwork with Paisley / Mandala pattern
        <div className={`relative inline-flex items-center justify-center p-2 rounded-full bg-[#FAF6EF] border border-[#B89B5E]/30 shadow-sm ${className}`}>
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Henna Hand Silhouette & Mehendi Motif */}
            <path d="M22 56 V34 C22 34, 18 22, 24 14 C26 12, 28 14, 28 18 V28 H30 V12 C30 10, 33 10, 34 12 V28 H36 V14 C36 12, 39 12, 40 14 V28 H42 V20 C42 18, 45 18, 46 20 V38 C46 48, 40 56, 32 56 Z" fill="#F3EBDD" stroke="#8A4A28" strokeWidth="2" />
            {/* Mandala on Palm */}
            <circle cx="34" cy="40" r="6" stroke="#8A4A28" strokeWidth="1.5" fill="none" />
            <circle cx="34" cy="40" r="2" fill="#8A4A28" />
            <path d="M34 32 V34 M34 46 V48 M26 40 H28 M40 40 H42" stroke="#8A4A28" strokeWidth="1.5" />
            {/* Leaves around wrist */}
            <path d="M16 50 C20 46, 24 52, 20 56 Z" fill="#4B7B34" />
            <path d="M48 50 C44 46, 40 52, 44 56 Z" fill="#4B7B34" />
          </svg>
        </div>
      );

    case 'muhurtham':
      return (
        // Sacred Havan Kund / Fire & Mangalsutra Knot
        <div className={`relative inline-flex items-center justify-center p-2 rounded-full bg-[#FAF6EF] border border-[#B89B5E]/40 shadow-sm ${className}`}>
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Havan Kund Pyramid base */}
            <path d="M10 52 H54 L46 38 H18 Z" fill="#B89B5E" stroke="#755F30" strokeWidth="2" />
            <path d="M16 38 H48 L42 30 H22 Z" fill="#D4AF37" stroke="#755F30" strokeWidth="1.5" />
            {/* Sacred Agni Fire Flames */}
            <path d="M32 8 C38 18, 44 24, 38 30 C34 34, 30 34, 26 30 C20 24, 26 18, 32 8 Z" fill="#E65100" />
            <path d="M32 14 C36 21, 40 25, 36 29 C33 32, 30 32, 27 29 C23 25, 27 21, 32 14 Z" fill="#FF9800" />
            <path d="M32 20 C34 24, 36 26, 34 28 C32 30, 30 30, 29 28 C27 26, 29 24, 32 20 Z" fill="#FFEB3B" />
          </svg>
        </div>
      );

    case 'reception':
      return (
        // Kalash with Coconut & Mango leaves
        <div className={`relative inline-flex items-center justify-center p-2 rounded-full bg-[#FAF6EF] border border-[#B89B5E]/30 shadow-sm ${className}`}>
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            {/* Brass Kalash Vessel */}
            <path d="M22 34 C16 40, 16 52, 32 54 C48 52, 48 40, 42 34 Z" fill="#D4AF37" stroke="#997E43" strokeWidth="2" />
            <rect x="24" y="30" width="16" height="4" rx="2" fill="#B89B5E" stroke="#997E43" strokeWidth="1.5" />
            {/* Mango Leaves */}
            <path d="M32 30 L16 16 C22 22, 28 26, 32 30 Z" fill="#388E3C" />
            <path d="M32 30 L48 16 C42 22, 36 26, 32 30 Z" fill="#388E3C" />
            <path d="M32 30 L32 10 C32 18, 32 24, 32 30 Z" fill="#4CAF50" />
            {/* Sacred Coconut */}
            <ellipse cx="32" cy="22" rx="7" ry="9" fill="#795548" stroke="#4E342E" strokeWidth="1.5" />
            <circle cx="32" cy="44" r="3" fill="#A82836" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
