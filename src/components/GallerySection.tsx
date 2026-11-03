import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { weddingConfig, GalleryPhoto } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="relative w-full py-16 px-4 bg-[#FAF6EF] text-[#6E3943]">
      <div className="max-w-md md:max-w-2xl mx-auto text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-serif block mb-1">
            Cherished Memories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            Our Moments
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* Digital Magazine / Photo Album Layout */}
        <div className="space-y-6">
          {weddingConfig.gallery.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => setSelectedPhoto(photo)}
              className="relative rounded-3xl bg-[#F3EBDD] p-3 md:p-4 border border-[#B89B5E]/40 shadow-invitation group cursor-pointer overflow-hidden transition-all hover:shadow-xl"
            >
              {/* Photo Frame Container */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-[#B89B5E]/30 bg-[#FFFDF9]">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-auto max-h-[480px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Hover / Tap Overlay */}
                <div className="absolute inset-0 bg-[#6E3943]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-[#FFFDF9]">
                  <div className="flex items-center space-x-2 bg-[#6E3943]/80 px-4 py-2 rounded-full border border-[#B89B5E]/50 backdrop-blur-xs text-xs font-serif tracking-widest uppercase">
                    <ZoomIn className="w-4 h-4 text-[#B89B5E]" />
                    <span>View Photo</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="pt-3 pb-1 px-2 text-center">
                <p className="font-serif text-sm md:text-base italic text-[#6E3943] font-medium">
                  "{photo.caption}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#FAF6EF] p-4 rounded-3xl border border-[#B89B5E] shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#6E3943] text-[#FAF6EF] hover:bg-[#A82836] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden mb-3 border border-[#B89B5E]/30">
                <img 
                  src={selectedPhoto.url} 
                  alt={selectedPhoto.caption} 
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <p className="font-serif text-center italic text-[#6E3943] text-sm md:text-base font-medium px-2 py-1">
                {selectedPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
