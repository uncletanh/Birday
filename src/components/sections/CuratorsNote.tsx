"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CuratorsNote() {
  const { t } = useLanguage();
  return (
    <section id="curators-note" className="min-h-screen w-full flex items-center justify-center py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1 }}
        className="max-w-3xl w-full"
      >
        <div className="relative border border-warm-white/10 bg-warm-white/5 p-10 md:p-16 backdrop-blur-sm rounded-sm">
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold/50 -translate-x-px -translate-y-px" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold/50 translate-x-px -translate-y-px" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold/50 -translate-x-px translate-y-px" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold/50 translate-x-px translate-y-px" />

          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-8 text-center">
            {t('curatorsNote.title')}
          </h2>
          
          <div className="space-y-6 text-center font-serif text-xl md:text-2xl leading-relaxed text-warm-white/90">
            <p>
              {t('curatorsNote.p1')}
            </p>
            <p className="text-lg md:text-xl text-warm-white/60">
              {t('curatorsNote.p2')}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
