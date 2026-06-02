"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Mindset() {
  const { t } = useLanguage();

  const quotes = [
    t('mindset.q1'),
    t('mindset.q2'),
    t('mindset.q3'),
    t('mindset.q4'),
    t('mindset.q5'),
  ];

  return (
    <section className="min-h-screen w-full py-24 px-6 bg-black relative flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">{t('mindset.title')}</h2>
          <p className="text-warm-white/40">{t('mindset.subtitle')}</p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-20">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className="relative max-w-2xl">
                <span className="absolute -top-10 -left-6 text-8xl text-warm-white/5 font-serif leading-none select-none">"</span>
                <p className="font-serif text-2xl md:text-4xl text-warm-white/80 leading-snug relative z-10 hover:text-gold transition-colors duration-500">
                  {quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
