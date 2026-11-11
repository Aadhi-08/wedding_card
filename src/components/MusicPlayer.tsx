import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userStoppedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      if (userStoppedRef.current) return;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          // Autoplay blocked by browser policy until user gesture
          console.log('Autoplay waiting for user gesture:', err);
        });
    };

    // 1. Attempt immediate autoplay on mount
    tryPlay();

    // 2. Play on first user interaction anywhere (click, tap, scroll, keypress)
    const handleFirstInteraction = () => {
      if (!userStoppedRef.current && audio.paused) {
        tryPlay();
      }
      removeListeners();
    };

    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    const removeListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    events.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      removeListeners();
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      userStoppedRef.current = true;
    } else {
      userStoppedRef.current = false;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio playback prevented:', err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
      {/* Hidden HTML Audio element */}
      <audio
        ref={audioRef}
        src={weddingConfig.music.audioUrl}
        loop
        autoPlay
        preload="auto"
      />

      {/* Floating Pill Button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        className={`group relative flex items-center space-x-2 px-3 py-2.5 rounded-full border shadow-lg transition-all duration-300 ${
          isPlaying
            ? 'bg-[#6E3943] text-[#FAF6EF] border-[#B89B5E] shadow-gold-glow scale-105'
            : 'bg-[#FAF6EF] text-[#6E3943] border-[#B89B5E]/50 hover:border-[#B89B5E]'
        }`}
      >
        {/* Animated Ring Indicator when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#B89B5E] animate-ping opacity-30 pointer-events-none" />
        )}

        <div className="flex items-center justify-center">
          {isPlaying ? (
            <Music className="w-4 h-4 text-[#D4AF37] animate-bounce" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#8A6468]" />
          )}
        </div>

        <span className="font-serif text-xs font-semibold tracking-wider uppercase pr-1 hidden sm:inline">
          {isPlaying ? 'Music Playing' : 'Play Music'}
        </span>

        {/* Small Sparkle Icon */}
        {isPlaying && (
          <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse hidden sm:inline" />
        )}
      </button>
    </div>
  );
};
