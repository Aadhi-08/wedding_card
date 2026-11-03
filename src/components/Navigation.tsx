import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Calendar, MapPin, Image, Clock, Send, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

interface NavItem {
  label: string;
  targetId: string;
  icon: React.ReactNode;
}

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', targetId: 'hero', icon: <Sparkles className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Our Story', targetId: 'couple', icon: <Heart className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Blessings', targetId: 'blessings', icon: <Sparkles className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Events', targetId: 'events', icon: <Calendar className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Venue', targetId: 'venue', icon: <MapPin className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Gallery', targetId: 'gallery', icon: <Image className="w-4 h-4 text-[#B89B5E]" /> },
    { label: 'Countdown', targetId: 'countdown', icon: <Clock className="w-4 h-4 text-[#B89B5E]" /> },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Small Floating Menu Button (Top Left / Right) */}
      <div className="fixed top-5 left-5 z-50 select-none">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-[#FAF6EF]/90 border border-[#B89B5E]/40 text-[#6E3943] shadow-md backdrop-blur-md hover:bg-[#FAF6EF] hover:border-[#B89B5E] transition-all"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="font-serif text-xs uppercase tracking-widest font-semibold pr-0.5">
            {isOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {/* Navigation Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex justify-start"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-72 max-w-[80vw] h-full bg-[#FAF6EF] border-r border-[#B89B5E]/40 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="pt-12 pb-6 border-b border-[#B89B5E]/30 text-center">
                  <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#B89B5E] block mb-1">
                    Wedding Invitation
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#6E3943]">
                    {weddingConfig.groom} & {weddingConfig.bride}
                  </h3>
                  <p className="font-serif text-xs text-[#8A6468] italic mt-1">
                    {weddingConfig.weddingDateFormatted}
                  </p>
                </div>

                {/* Nav Links */}
                <nav className="py-6 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.targetId}
                      onClick={() => scrollToSection(item.targetId)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-serif text-sm font-medium text-[#6E3943] hover:bg-[#F3EBDD] hover:text-[#4A1E27] transition-all text-left group"
                    >
                      <div className="p-1.5 rounded-lg bg-[#FAF6EF] border border-[#B89B5E]/30 group-hover:border-[#B89B5E]">
                        {item.icon}
                      </div>
                      <span className="tracking-wide">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer */}
              <div className="pt-4 border-t border-[#B89B5E]/30 text-center">
                <p className="font-serif text-xs italic text-[#8A6468]">
                  "Two hearts, one beautiful beginning."
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
