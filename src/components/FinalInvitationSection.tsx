import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';
import { FloralBorder } from './decorations/FloralBorder';

export const FinalInvitationSection: React.FC = () => {
  return (
    <section id="final-invitation" className="relative w-full py-20 px-4 bg-[#FAF6EF] text-[#6E3943] overflow-hidden text-center">
      
      {/* Background radial soft light */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(243,235,221,0.8)_0%,rgba(250,246,239,0)_80%)]" />

      {/* Decorative Top Floral Garland */}
      <FloralBorder position="top" className="absolute top-0 left-0 right-0 opacity-80" />

      <div className="relative z-10 max-w-md mx-auto py-8">
        
        {/* Mandapam Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative p-8 rounded-t-[140px] rounded-b-[40px] bg-gradient-to-b from-[#FFFDF9] to-[#F3EBDD]/60 border border-[#B89B5E]/40 shadow-invitation flex flex-col items-center"
        >
          {/* Top Om / Lotus Icon */}
          <div className="w-10 h-10 rounded-full bg-[#FAF6EF] border border-[#B89B5E]/40 flex items-center justify-center text-[#B89B5E] text-base mb-4 shadow-xs">
            🪔
          </div>

          <span className="font-serif text-xs uppercase tracking-[0.3em] text-[#B89B5E] block mb-2 font-medium">
            With Joyous Hearts
          </span>

          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943] mb-1">
            {weddingConfig.groom} <span className="font-script text-2xl md:text-3xl text-[#B89B5E]">&</span> {weddingConfig.bride}
          </h2>

          <KolamDivider className="scale-75 my-3" />

          <p className="font-serif text-base md:text-lg italic text-[#6E3943] font-medium leading-relaxed max-w-xs mb-4">
            "{weddingConfig.finalMessage.line2}"
          </p>

          <div className="w-16 h-px bg-[#B89B5E]/40 my-3" />

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="mt-4"
          >
            <p className="font-serif text-lg md:text-xl font-semibold text-[#A82836] tracking-wide">
              {weddingConfig.finalMessage.closing}
            </p>
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative Bottom Floral Garland */}
      <FloralBorder position="bottom" className="absolute bottom-0 left-0 right-0 opacity-80" />
    </section>
  );
};
