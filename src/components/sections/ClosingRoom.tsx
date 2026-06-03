"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Gift, Sparkles } from "lucide-react";
import EasterEggModal from "@/components/ui/EasterEggModal";

const LanternSVG = () => (
  <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-[0_0_20px_rgba(253,224,71,0.6)]">
    <defs>
      <radialGradient id="glow" cx="50%" cy="70%" r="50%">
        <stop offset="0%" stopColor="#FEF08A" stopOpacity="1" />
        <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.85" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.7" />
      </radialGradient>
      <filter id="blur">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
    <path d="M 40 80 C 40 -10, 160 -10, 160 80 L 140 220 C 140 250, 60 250, 60 220 Z" fill="url(#glow)" />
    <path d="M 60 220 C 60 250, 140 250, 140 220" fill="none" stroke="#78350F" strokeWidth="4" />
    <rect x="75" y="230" width="50" height="15" rx="3" fill="#451A03" />
    <circle cx="100" cy="210" r="20" fill="#FEF08A" filter="url(#blur)" className="animate-pulse" style={{ animationDuration: '2s' }} />
    <circle cx="100" cy="210" r="10" fill="#FFFFFF" filter="url(#blur)" />
  </svg>
);

export default function ClosingRoom() {
  const [mounted, setMounted] = useState(false);
  const [isReleasingLanterns, setIsReleasingLanterns] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const { t } = useLanguage();
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanterns = () => {
    setTheme('dark');
    setIsReleasingLanterns(true);
    // Tự động tắt effect sau 25 giây
    setTimeout(() => {
      setIsReleasingLanterns(false);
    }, 25000);
  };

  return (
    <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-background">
      {/* Hiệu ứng thả Thiên Đăng */}
      {mounted && isReleasingLanterns && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => {
            const startX = Math.random() * 100;
            const endX = startX + (Math.random() * 20 - 10);
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 8;
            const size = Math.random() * 0.6 + 0.4;
            
            return (
              <motion.div
                key={`lantern-${i}`}
                initial={{ opacity: 0, y: '10vh', x: `${startX}vw`, scale: size }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  y: '-120vh',
                  x: `${endX}vw` 
                }}
                transition={{ 
                  duration: duration,
                  delay: delay,
                  ease: "easeOut"
                }}
                className="absolute w-12 md:w-20"
                style={{ bottom: -50 }}
              >
                <LanternSVG />
              </motion.div>
            );
          })}
        </div>
      )}

      {mounted && !isReleasingLanterns && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [null, Math.random() * -100 - 50],
                opacity: [null, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center max-w-2xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
        >
          {t('closing.end')}
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-3xl md:text-5xl leading-tight mb-8"
        >
          {t('closing.message')}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-warm-white/50 text-lg"
        >
          {t('closing.wishes')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <button 
            onClick={handleLanterns}
            disabled={isReleasingLanterns}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold uppercase tracking-widest text-sm transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] ${
              isReleasingLanterns 
                ? 'bg-gold/50 text-background cursor-not-allowed scale-95' 
                : 'bg-gold text-background hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]'
            }`}
          >
            {isReleasingLanterns ? <Sparkles size={18} className="animate-spin-slow" /> : <Gift size={18} />}
            {t('closing.openGift') || "Open Gift"}
          </button>
        </motion.div>

        {/* Gợi ý Mật mã ẩn */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16 opacity-30 hover:opacity-100 transition-opacity cursor-pointer inline-block"
          onClick={() => setShowEasterEgg(true)}
        >
          <p className="text-xs tracking-[0.2em] font-medium italic border-b border-warm-white/20 pb-1 flex items-center justify-center gap-2">
            "Yī qǐ ba" (一起吧)
          </p>
        </motion.div>
      </div>

      <EasterEggModal isOpen={showEasterEgg} onClose={() => setShowEasterEgg(false)} />
    </section>
  );
}
