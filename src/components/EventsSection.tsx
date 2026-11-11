import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { weddingConfig, WeddingEvent } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';
import { TraditionalEventIcon } from './decorations/TraditionalIcons';
import { FloralBorder } from './decorations/FloralBorder';

export const EventsSection: React.FC = () => {
  const mainEvent = weddingConfig.events.find(e => e.isMainEvent) || weddingConfig.events[1] || weddingConfig.events[0];
  const otherEvents = weddingConfig.events.filter(e => !e.isMainEvent);

  return (
    <section id="events" className="relative w-full py-16 px-4 bg-[#FAF6EF] text-[#6E3943]">
      <div className="max-w-md md:max-w-xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-serif block mb-1">
            Auspicious Ceremonies
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            Wedding Events
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* ------------------------------------------------------------- */}
        {/* 1. FEATURED MAIN EVENT: MUHURTHAM (Inspired by Frame 008 & 010) */}
        {/* ------------------------------------------------------------- */}
        {mainEvent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mb-14 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EF] to-[#F3EBDD] border-2 border-[#B89B5E]/50 shadow-invitation overflow-hidden"
          >
            {/* Top Floral Border */}
            <FloralBorder position="top" className="opacity-80" />

            <div className="p-6 md:p-8 flex flex-col items-center text-center relative z-10">
              
              {/* Sacred Badge */}
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#6E3943] text-[#FAF6EF] text-xs font-serif tracking-widest uppercase mb-4 shadow-sm">
                ✨ Main Auspicious Ritual ✨
              </div>

              {/* Event Title */}
              <h3 className="font-serif text-3xl md:text-5xl font-bold tracking-wider text-[#6E3943] mb-1">
                {mainEvent.title}
              </h3>
              
              {mainEvent.subtitle && (
                <p className="font-serif italic text-sm text-[#B89B5E] mb-4 font-medium">
                  {mainEvent.subtitle}
                </p>
              )}

              {/* Traditional Icon */}
              <div className="my-2 scale-125">
                <TraditionalEventIcon type={mainEvent.iconType} />
              </div>

              {/* Date & Time Highlights */}
              <div className="w-full my-4 py-4 px-3 rounded-2xl bg-[#FAF6EF] border border-[#B89B5E]/30 flex flex-col sm:flex-row items-center justify-around gap-3 shadow-inner">
                <div className="flex items-center space-x-2 text-[#6E3943]">
                  <Calendar className="w-4 h-4 text-[#B89B5E]" />
                  <span className="font-serif text-base font-semibold tracking-wide">{mainEvent.date}</span>
                </div>
                <div className="h-4 w-px bg-[#B89B5E]/40 hidden sm:block" />
                <div className="flex items-center space-x-2 text-[#6E3943]">
                  <Clock className="w-4 h-4 text-[#B89B5E]" />
                  <span className="font-serif text-lg font-bold text-[#A82836]">{mainEvent.time}</span>
                </div>
              </div>

              {/* Venue & Description */}
              <div className="space-y-2 max-w-md">
                <a
                  href={weddingConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 text-[#8A6468] hover:text-[#6E3943] text-xs md:text-sm font-medium transition-colors group cursor-pointer"
                  title="Open location in Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#B89B5E] group-hover:scale-110 transition-transform shrink-0" />
                  <span className="group-hover:underline underline-offset-2">{mainEvent.venueName}, {mainEvent.address}</span>
                </a>
                <p className="font-serif text-xs md:text-sm text-[#8A6468] italic leading-relaxed pt-2">
                  "{mainEvent.description}"
                </p>
              </div>

              {/* Marriage Hall / Event Venue Artwork */}
              <div className="mt-6 w-full max-w-sm rounded-2xl overflow-hidden border border-[#B89B5E]/30 shadow-sm bg-[#FAF6EF]">
                <img 
                  src={mainEvent.image || weddingConfig.marriageHallImage || weddingConfig.templeVenueImage} 
                  alt={mainEvent.venueName || mainEvent.title} 
                  className="w-full h-48 md:h-56 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to temple venue image if custom hall image is not yet placed in assets
                    e.currentTarget.src = weddingConfig.templeVenueImage;
                  }}
                />
              </div>

            </div>

            {/* Bottom Floral Border */}
            <FloralBorder position="bottom" className="opacity-80" />
          </motion.div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* 2. OTHER INDIVIDUAL EVENTS */}
        {/* ------------------------------------------------------------- */}
        <div className={`grid grid-cols-1 ${otherEvents.length === 1 ? 'max-w-md mx-auto' : otherEvents.length === 2 ? 'md:grid-cols-2 max-w-2xl mx-auto' : 'md:grid-cols-3'} gap-6`}>
          {otherEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative p-6 rounded-2xl bg-[#F3EBDD]/60 border border-[#B89B5E]/35 shadow-card flex flex-col justify-between text-center hover:bg-[#FAF6EF] hover:border-[#B89B5E] transition-all group"
            >
              <div>
                {/* Event Icon */}
                <div className="flex justify-center mb-3">
                  <TraditionalEventIcon type={event.iconType} className="w-12 h-12" />
                </div>

                {/* Event Title */}
                <h4 className="font-serif text-xl font-semibold text-[#6E3943] mb-1">
                  {event.title}
                </h4>

                {event.subtitle && (
                  <p className="font-serif text-xs text-[#B89B5E] italic mb-3">
                    {event.subtitle}
                  </p>
                )}

                <div className="w-12 h-px bg-[#B89B5E]/40 mx-auto mb-3" />

                {/* Date & Time */}
                <p className="font-serif text-sm font-medium text-[#6E3943] mb-1">
                  {event.date}
                </p>
                <p className="font-serif text-xs font-semibold text-[#8A6468] mb-3">
                  {event.time}
                </p>
              </div>

              <div>
                {/* Venue */}
                <a
                  href={weddingConfig.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xs text-[#8A6468] hover:text-[#6E3943] font-medium flex items-center justify-center gap-1 group cursor-pointer"
                  title="Open location in Google Maps"
                >
                  <MapPin className="w-3 h-3 text-[#B89B5E] group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline underline-offset-2">{event.venueName}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
