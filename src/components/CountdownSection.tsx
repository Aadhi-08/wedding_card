import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(weddingConfig.countdownTargetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative w-full py-16 px-4 bg-[#F3EBDD]/60 text-[#6E3943] overflow-hidden">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-[#B89B5E] font-serif block mb-1">
            Counting the Moments
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-semibold text-[#6E3943]">
            Our New Beginning Starts In
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* Live Countdown Grid Boxes (Inspired by frame 020) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-4 gap-2 md:gap-4 w-full max-w-sm mb-10"
        >
          {timeUnits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl bg-[#FAF6EF] border border-[#B89B5E]/40 shadow-card transition-all hover:border-[#B89B5E]"
            >
              <span className="font-serif text-2xl md:text-4xl font-light text-[#6E3943] tracking-tight">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-serif text-[10px] md:text-xs text-[#8A6468] uppercase tracking-wider mt-1 font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Elegant Maroon Banner Message Below Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-sm py-4 px-6 rounded-2xl bg-[#6E3943] text-[#FAF6EF] shadow-md border border-[#B89B5E]/30"
        >
          <p className="font-serif text-sm md:text-base font-normal tracking-wide text-center leading-relaxed">
            We can't wait to celebrate this beautiful day with you. ❤️
          </p>
        </motion.div>

      </div>
    </section>
  );
};
