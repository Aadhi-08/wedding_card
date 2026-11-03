import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, HeartHandshake } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { KolamDivider } from './decorations/KolamDivider';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [attendance, setAttendance] = useState<'accept' | 'decline'>('accept');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const rsvpData = {
      name: name.trim(),
      guestCount: parseInt(guestCount, 10),
      attendance,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      // Modular RSVP Handler: replace endpoint or handler here if needed
      if (weddingConfig.rsvp.submissionEndpoint) {
        await fetch(weddingConfig.rsvp.submissionEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(rsvpData),
        });
      } else {
        // Mock simulated delay
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger festive celebration confetti if accepted!
      if (attendance === 'accept') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B89B5E', '#6E3943', '#D4AF37', '#E599B2'],
        });
      }
    } catch (err) {
      console.error('RSVP submission error:', err);
      setIsSubmitting(false);
      // Fallback success for mock demo
      setIsSubmitted(true);
    }
  };

  return (
    <section id="rsvp" className="relative w-full py-16 px-4 bg-[#F3EBDD]/60 text-[#6E3943]">
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
            Rejoice With Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#6E3943]">
            Will You Join Us?
          </h2>
          <KolamDivider className="scale-75 my-2" />
        </motion.div>

        {/* RSVP Card Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative p-6 md:p-8 rounded-3xl bg-[#FAF6EF] border border-[#B89B5E]/40 shadow-invitation text-left"
        >
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-[#6E3943]/10 text-[#6E3943] mb-2">
                <CheckCircle2 className="w-10 h-10 text-[#B89B5E]" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#6E3943]">
                Thank You, {name}!
              </h3>
              <p className="font-serif text-sm text-[#8A6468] leading-relaxed">
                {attendance === 'accept'
                  ? "We are delighted to know you will be celebrating with us! Your presence will make our day truly special."
                  : "We understand you cannot join us in person, but your warm wishes mean the world to us."}
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setMessage('');
                }}
                className="mt-4 text-xs font-serif uppercase tracking-widest text-[#B89B5E] underline underline-offset-4 hover:text-[#6E3943]"
              >
                Send Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-[#8A6468] font-semibold mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya & Family"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89B5E]/35 text-[#6E3943] font-serif text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all placeholder:text-[#8A6468]/50"
                />
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-[#8A6468] font-semibold mb-1.5">
                  Number of Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89B5E]/35 text-[#6E3943] font-serif text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Attendance Toggle */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-[#8A6468] font-semibold mb-2">
                  Attendance Confirmation
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('accept')}
                    className={`py-3 px-3 rounded-xl font-serif text-xs font-semibold tracking-wide border transition-all flex items-center justify-center space-x-1.5 ${
                      attendance === 'accept'
                        ? 'bg-[#6E3943] text-[#FAF6EF] border-[#6E3943] shadow-xs'
                        : 'bg-[#FFFDF9] text-[#6E3943] border-[#B89B5E]/35 hover:border-[#B89B5E]'
                    }`}
                  >
                    <HeartHandshake className="w-4 h-4 text-[#B89B5E]" />
                    <span>Happily Accept</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAttendance('decline')}
                    className={`py-3 px-3 rounded-xl font-serif text-xs font-semibold tracking-wide border transition-all flex items-center justify-center space-x-1.5 ${
                      attendance === 'decline'
                        ? 'bg-[#8A6468] text-[#FAF6EF] border-[#8A6468] shadow-xs'
                        : 'bg-[#FFFDF9] text-[#6E3943] border-[#B89B5E]/35 hover:border-[#B89B5E]'
                    }`}
                  >
                    <span>Regretfully Decline</span>
                  </button>
                </div>
              </div>

              {/* Special Warm Wishes Message */}
              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-[#8A6468] font-semibold mb-1.5">
                  Warm Wishes / Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your blessings or dietary notes for the couple..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFFDF9] border border-[#B89B5E]/35 text-[#6E3943] font-serif text-sm focus:outline-none focus:border-[#B89B5E] focus:ring-1 focus:ring-[#B89B5E] transition-all placeholder:text-[#8A6468]/50"
                />
              </div>

              {errorMsg && (
                <p className="text-xs font-serif text-[#A82836] font-medium">
                  {errorMsg}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#6E3943] via-[#8A6468] to-[#6E3943] text-[#FAF6EF] font-serif text-sm font-semibold tracking-widest uppercase shadow-md hover:shadow-lg hover:opacity-95 transition-all flex items-center justify-center space-x-2 border border-[#B89B5E]/30"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#B89B5E]" />
                    <span>Send RSVP</span>
                  </>
                )}
              </button>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
