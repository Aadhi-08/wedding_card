import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

export const VenueSection: React.FC = () => {
  const { venue } = weddingConfig;

  return (
    <section id="venue" className="relative w-full py-16 px-4 bg-[#FAF6EF] text-[#6E3943]">
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
            Sacred Destination
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            The Venue
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* Temple Gopuram Artwork Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-xs md:max-w-sm mb-6"
        >
          <div className="relative p-3 rounded-t-[140px] rounded-b-3xl bg-[#F3EBDD] border border-[#B89B5E]/50 shadow-invitation overflow-hidden">
            
            {/* Top Arch Label */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#FAF6EF] px-3 py-0.5 rounded-full border border-[#B89B5E]/30 text-[#B89B5E] text-xs font-serif z-10 shadow-xs">
              🏛️ Sacred Mandapam
            </div>

            {/* Gopuram Temple Image */}
            <div className="w-full aspect-[4/5] rounded-t-[130px] rounded-b-2xl overflow-hidden border border-[#B89B5E]/30 bg-[#FFFDF9]">
              <img 
                src={venue.image} 
                alt={venue.name} 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = weddingConfig.templeVenueImage;
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Venue Address & Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-2 mb-6"
        >
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-[#6E3943] mb-1">
            {venue.name}
          </h3>
          <p className="font-serif text-xs text-[#B89B5E] italic mb-3">
            {venue.subTitle}
          </p>

          <p className="font-serif text-sm text-[#8A6468] leading-relaxed max-w-xs mx-auto">
            {venue.completeAddress}
          </p>
          <p className="font-serif text-xs text-[#8A6468]/80 font-medium">
            {venue.cityState}
          </p>
        </motion.div>

        {/* Prominent Gold Pill "View on Google Maps" Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#B89B5E] via-[#D4AF37] to-[#B89B5E] text-[#FAF6EF] font-serif text-sm font-semibold tracking-wider uppercase shadow-gold-glow hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-[#FFFDF9]/40"
          >
            <MapPin className="w-4 h-4" />
            <span>View on Google Maps</span>
            <Navigation className="w-3.5 h-3.5 ml-1 opacity-80" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
