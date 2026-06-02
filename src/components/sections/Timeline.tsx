"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Timeline() {
  const { t } = useLanguage();
  
  const memories = [
    { id: 1, date: t('timeline.m1Date'), title: t('timeline.m1Title'), story: t('timeline.m1Story'), image: "/images/gallery/960116643389679.jpg" },
    { id: 2, date: t('timeline.m2Date'), title: t('timeline.m2Title'), story: t('timeline.m2Story'), image: "/images/gallery/Học bài.png" },
    { id: 3, date: t('timeline.m3Date'), title: t('timeline.m3Title'), story: t('timeline.m3Story'), image: "/images/gallery/Tô Châu.png" },
    { id: 4, date: t('timeline.m4Date'), title: t('timeline.m4Title'), story: t('timeline.m4Story'), image: "/images/gallery/Đại Lý.png" },
  ];

  const [selected, setSelected] = useState<typeof memories[0] | null>(null);

  return (
    <section className="min-h-screen w-full py-24 px-6 relative flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">{t('timeline.gallery')}</h2>
          <h3 className="font-serif text-4xl md:text-5xl">{t('timeline.title')}</h3>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-warm-white/10 -translate-y-1/2" />
          <div className="md:hidden absolute top-0 left-4 w-px h-full bg-warm-white/10" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelected(memory)}
                className="relative cursor-pointer group flex md:flex-col md:items-center w-full md:w-64"
              >
                <div className="absolute left-[-5px] md:relative md:left-auto md:mb-6 w-3 h-3 rounded-full bg-gold/50 group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                <div className="pl-12 md:pl-0 md:text-center mt-[-6px] md:mt-0">
                  <p className="text-gold text-sm tracking-wider uppercase mb-2">{memory.date}</p>
                  <h4 className="text-xl font-medium mb-2 group-hover:text-gold transition-colors duration-300">{memory.title}</h4>
                  <span className="inline-block mt-4 text-xs uppercase tracking-widest text-warm-white/40 group-hover:text-warm-white transition-colors flex items-center gap-1 justify-start md:justify-center">
                    {t('timeline.readMore')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="absolute inset-0 bg-background/90 backdrop-blur-md cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-[#111827] border border-warm-white/10 p-8 md:p-12 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-lg z-10"
          >
            <button 
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-warm-white/50 hover:text-warm-white transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <p className="text-gold text-sm tracking-wider uppercase mb-4">{selected.date}</p>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">{selected.title}</h3>
            

            <p className="text-warm-white/80 leading-relaxed text-lg">
              {selected.story}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
