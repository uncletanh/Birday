"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EntranceHall() {
  const { t } = useLanguage();
  
  const scrollToNext = () => {
    document.getElementById("curators-note")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6"
        >
          {t('entrance.specialExhibition')}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8"
        >
          {t('entrance.title1')} <br/> {t('entrance.title2')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-warm-white/70 text-lg md:text-xl font-light mb-16 max-w-xl mx-auto"
        >
          {t('entrance.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-6 md:gap-16 text-sm text-warm-white/50 uppercase tracking-widest border-t border-warm-white/10 pt-8"
        >
          <div>
            <p className="mb-1 text-warm-white/30">{t('entrance.visitorCount')}</p>
            <p className="text-warm-white">{t('entrance.you')}</p>
          </div>
          <div>
            <p className="mb-1 text-warm-white/30">{t('entrance.openingDate')}</p>
            <p className="text-warm-white">03/06/2026</p>
          </div>
          <div>
            <p className="mb-1 text-warm-white/30">{t('entrance.curator')}</p>
            <p className="text-warm-white">{t('entrance.curatorName')}</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToNext}
        className="absolute bottom-12 flex flex-col items-center text-warm-white/50 hover:text-gold transition-colors duration-300"
      >
        <span className="text-xs uppercase tracking-widest mb-3">{t('entrance.enter')}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
}
