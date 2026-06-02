"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function TraitsGallery() {
  const { t } = useLanguage();

  const traits = [
    { title: t('traits.t1Title'), desc: t('traits.t1Desc') },
    { title: t('traits.t2Title'), desc: t('traits.t2Desc') },
    { title: t('traits.t3Title'), desc: t('traits.t3Desc') },
    { title: t('traits.t4Title'), desc: t('traits.t4Desc') },
    { title: t('traits.t5Title'), desc: t('traits.t5Desc') },
    { title: t('traits.t6Title'), desc: t('traits.t6Desc') },
  ];

  return (
    <section className="min-h-screen w-full py-24 px-6 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">{t('traits.title1')}</h2>
          <h3 className="font-serif text-4xl md:text-5xl">{t('traits.title2')}</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-warm-white/5 border border-warm-white/10 p-8 rounded-lg cursor-default overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-full border border-gold/30 flex items-center justify-center text-gold/50 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                  <span className="font-serif italic text-xl">{index + 1}</span>
                </div>
                <h4 className="text-xl font-medium mb-3 text-warm-white">{trait.title}</h4>
                <p className="text-warm-white/60 text-sm leading-relaxed">{trait.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
