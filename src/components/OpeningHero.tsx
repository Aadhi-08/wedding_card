import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';
import { FloralBorder } from './decorations/FloralBorder';

interface OpeningHeroProps {
  onExploreClick?: () => void;
}

export const OpeningHero: React.FC<OpeningHeroProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#FAF6EF] text-[#6E3943] overflow-hidden px-4 py-8 select-none"
    >
      {/* Decorative Top Garland */}
      <FloralBorder position="top" className="absolute top-0 left-0 right-0 z-10 opacity-90" />

      {/* Subtle Background Glow Rays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(229,213,170,0.4)_0%,rgba(250,246,239,0)_70%)]" />

      {/* Top Header Tagline */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 text-center mt-12 mb-4"
      >
        <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-[#8A6468] font-serif font-medium border-b border-[#B89B5E]/30 pb-1">
          {weddingConfig.tagline}
        </span>
      </motion.div>

      {/* Main Celestial Divine Artwork Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 w-full max-w-sm md:max-w-md flex flex-col items-center justify-center my-auto"
      >
        {/* Mandapam Golden Arch Frame Container */}
        <div className="relative p-3 md:p-4 rounded-t-full rounded-b-[40px] bg-gradient-to-b from-[#F3EBDD] to-[#FAF6EF] border border-[#B89B5E]/40 shadow-invitation text-center overflow-hidden group">
          {/* Subtle Corner Flourishes */}
          <div className="absolute top-2 left-2 text-[#B89B5E]/50 text-xs">🪔</div>
          <div className="absolute top-2 right-2 text-[#B89B5E]/50 text-xs">🪔</div>

          {/* Divine Hand Reach Artwork */}
          <div className="relative w-full aspect-[4/5] rounded-t-full rounded-b-2xl overflow-hidden mb-4 border border-[#B89B5E]/30 bg-[#FFFDF9]">
            <img 
              src={weddingConfig.divineHeroImage} 
              alt={`Wedding of ${weddingConfig.groom} & ${weddingConfig.bride}`} 
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6E3943]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bride & Groom Couple Names */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="px-2"
          >
            <h1 className="font-serif text-3xl md:text-5xl font-semibold tracking-wider text-[#6E3943] leading-tight">
              {weddingConfig.groom} <span className="font-script text-2xl md:text-4xl text-[#B89B5E] font-normal mx-1">&</span> {weddingConfig.bride}
            </h1>

            <KolamDivider className="my-2 scale-75" />

            <p className="font-serif text-xs md:text-sm text-[#8A6468] italic max-w-xs mx-auto leading-relaxed px-2">
              "{weddingConfig.invitationMessage}"
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="z-10 text-center mb-6 flex flex-col items-center cursor-pointer"
        onClick={() => {
          if (onExploreClick) {
            onExploreClick();
          } else {
            document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="flex items-center space-x-1 text-[#B89B5E] text-xs uppercase tracking-[0.25em] font-serif mb-1">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span>Scroll to Explore</span>
          <Sparkles className="w-3 h-3 animate-pulse" />
        </div>

        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[#6E3943]/70 hover:text-[#6E3943] transition-colors p-1"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* Bottom Garland */}
      <FloralBorder position="bottom" className="absolute bottom-0 left-0 right-0 z-10 opacity-90" />
    </section>
  );
};
