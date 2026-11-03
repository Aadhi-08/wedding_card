import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="relative w-full py-16 px-4 bg-[#FAF6EF] text-[#6E3943] overflow-hidden">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-serif block mb-1">
            The Beloved Couple
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            {weddingConfig.groom} <span className="font-script text-2xl md:text-3xl text-[#B89B5E]">&</span> {weddingConfig.bride}
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* Framed Couple Portrait Artwork */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-xs md:max-w-sm mb-6"
        >
          {/* Outer Decorative Gold Frame with Floral Motifs */}
          <div className="relative p-3 rounded-t-[140px] rounded-b-3xl bg-[#F3EBDD] border border-[#B89B5E]/50 shadow-invitation">
            
            {/* Top Arch Floral Motif Overlay */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FAF6EF] px-3 py-0.5 rounded-full border border-[#B89B5E]/40 text-[#B89B5E] text-xs font-serif shadow-xs">
              🌸 Auspicious Union 🌸
            </div>

            {/* Image Container */}
            <div className="w-full aspect-[4/5] rounded-t-[130px] rounded-b-2xl overflow-hidden border border-[#B89B5E]/30 bg-[#FFFDF9]">
              <img 
                src={weddingConfig.couplePortraitImage} 
                alt={`${weddingConfig.groom} & ${weddingConfig.bride}`} 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Romantic Romantic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="px-4"
        >
          <p className="font-serif italic text-lg md:text-xl text-[#6E3943] mb-2 font-medium">
            "Two hearts, one beautiful beginning."
          </p>
          <p className="font-serif text-xs md:text-sm text-[#8A6468] leading-relaxed max-w-sm">
            Bound by tradition, cherished by family, and blessed by the divine. We step into a lifetime of shared laughter and sacred promises.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
