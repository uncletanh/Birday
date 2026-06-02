"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

export default function LanguageSelectionOverlay() {
  const { lang, setLang, t, isReady, setReady } = useLanguage();
  const [step, setStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    if (!isReady) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => window.scrollTo(0, 0), 50);
    } else {
      document.body.style.overflow = '';
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isReady]);

  const handleStart = (playMusic: boolean) => {
    if (playMusic && audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      setIsPlaying(true);
    }
    setReady(true);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bgm.mp3" loop />
      
      {/* Floating Music Toggle (visible when ready) */}
      <AnimatePresence>
        {isReady && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-black/50 backdrop-blur-md border border-warm-white/20 rounded-full flex items-center justify-center text-warm-white hover:text-gold transition-colors shadow-lg"
          >
            {isPlaying ? <Music size={20} /> : <VolumeX size={20} />}
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isReady && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
            
            {step === 1 ? (
              <>
                <h1 className="text-3xl font-serif mb-2 text-warm-white">{t('language.selectTitle') || "Ngôn Ngữ / Language"}</h1>
                <p className="text-warm-white/50 mb-12">{t('language.selectSubtitle') || "Choose your preferred language"}</p>

                <div className="flex flex-col gap-4 w-64">
                  <button 
                    onClick={() => setLang('vi')}
                    className={`p-4 rounded border transition-all ${lang === 'vi' ? 'border-gold bg-gold/10 text-gold' : 'border-warm-white/20 text-warm-white/70 hover:border-warm-white/50'}`}
                  >
                    Tiếng Việt
                  </button>
                  <button 
                    onClick={() => setLang('en')}
                    className={`p-4 rounded border transition-all ${lang === 'en' ? 'border-gold bg-gold/10 text-gold' : 'border-warm-white/20 text-warm-white/70 hover:border-warm-white/50'}`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => setLang('zh')}
                    className={`p-4 rounded border transition-all ${lang === 'zh' ? 'border-gold bg-gold/10 text-gold' : 'border-warm-white/20 text-warm-white/70 hover:border-warm-white/50'}`}
                  >
                    中文 (简体)
                  </button>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="mt-12 px-8 py-3 bg-warm-white text-background rounded-full font-medium uppercase tracking-widest text-sm hover:bg-gold transition-colors"
                >
                  {t('language.enter') || "Next"} →
                </button>
              </>
            ) : (
              <>
                <Music size={48} className="text-gold mb-6 opacity-80" />
                <h1 className="text-3xl font-serif mb-4 text-warm-white text-center max-w-md">
                  Bạn có muốn thêm chút nhạc nền không?
                </h1>
                <p className="text-warm-white/50 mb-12 text-center max-w-sm">
                  Trải nghiệm triển lãm sẽ trọn vẹn hơn khi có âm nhạc đồng hành.
                </p>

                <div className="flex flex-col gap-4 w-64">
                  <button 
                    onClick={() => handleStart(true)}
                    className="p-4 rounded border border-gold bg-gold/10 text-gold transition-all hover:bg-gold hover:text-background font-medium"
                  >
                    Có, bật nhạc
                  </button>
                  <button 
                    onClick={() => handleStart(false)}
                    className="p-4 rounded border border-warm-white/20 text-warm-white/70 hover:border-warm-white/50 transition-all"
                  >
                    Không, cảm ơn
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
