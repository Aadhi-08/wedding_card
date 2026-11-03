import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

export const BlessingsSection: React.FC = () => {
  return (
    <section id="blessings" className="relative w-full py-16 px-4 bg-[#F3EBDD]/50 text-[#6E3943]">
      <div className="max-w-md mx-auto text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-serif block mb-1">
            Grace & Eldest Omens
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            With the Blessings Of
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* Family Cards Container */}
        <div className="space-y-6">
          {weddingConfig.blessings.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative p-6 rounded-2xl bg-[#FAF6EF] border border-[#B89B5E]/35 shadow-card overflow-hidden group hover:border-[#B89B5E] transition-all"
            >
              {/* Subtle Gold Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#B89B5E]/60" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#B89B5E]/60" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#B89B5E]/60" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#B89B5E]/60" />

              {/* Sub-label */}
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#B89B5E] block mb-3 font-medium">
                {group.role}
              </span>

              {/* Names */}
              <div className="space-y-1">
                {group.names.map((name, nIdx) => (
                  <React.Fragment key={nIdx}>
                    <p className="font-serif text-lg md:text-xl font-medium text-[#6E3943] tracking-wide">
                      {name}
                    </p>
                    {nIdx < group.names.length - 1 && (
                      <span className="font-script text-lg text-[#B89B5E] block my-0.5">&</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Family Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-xs text-[#8A6468] italic mt-8"
        >
          Along with relatives & friends Cordially Request Your Gracious Presence
        </motion.p>

      </div>
    </section>
  );
};
