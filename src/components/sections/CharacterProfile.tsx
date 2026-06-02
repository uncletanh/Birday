"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function CharacterProfile() {
  const { t } = useLanguage();

  const stats = [
    { label: t('profile.statStrong'), value: 95 },
    { label: t('profile.statCute'), value: 88 },
    { label: t('profile.statOptimistic'), value: 92 },
    { label: t('profile.statDedicated'), value: 90 },
    { label: t('profile.statEnergy'), value: 85 },
  ];

  return (
    <section className="min-h-screen w-full flex items-center justify-center py-24 px-6 bg-background">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[3/4] w-full max-w-sm mx-auto"
        >
          <div className="absolute inset-0 bg-warm-white/5 border border-warm-white/10 rounded-xl overflow-hidden group">
            <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center">
              <img src="/images/gallery/Hàng Châu.png" alt="Profile" className="w-full h-full object-cover shadow-2xl shadow-black/50" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-2">{t('profile.name')}</h2>
            <p className="text-gold tracking-widest uppercase text-sm">{t('profile.level')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-warm-white/40 uppercase tracking-wider text-xs mb-2">{t('profile.specialSkills')}</h3>
              <p className="text-warm-white/90 text-lg">{t('profile.specialSkillsDesc')}</p>
            </div>
            <div>
              <h3 className="text-warm-white/40 uppercase tracking-wider text-xs mb-2">{t('profile.favoriteThings')}</h3>
              <p className="text-warm-white/90 text-lg">{t('profile.favoriteThingsDesc')}</p>
            </div>
            <div>
              <h3 className="text-warm-white/40 uppercase tracking-wider text-xs mb-2">{t('profile.funFacts')}</h3>
              <p className="text-warm-white/90 text-lg">{t('profile.funFactsDesc')}</p>
            </div>
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-warm-white/40 uppercase tracking-wider text-xs mb-4">{t('profile.coreStats')}</h3>
            {stats.map((stat, index) => (
              <div key={stat.label} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-warm-white/80">{stat.label}</span>
                  <span className="text-gold">{stat.value}/100</span>
                </div>
                <div className="h-1.5 w-full bg-warm-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.5, delay: 0.1 * index, ease: "easeOut" }}
                    className="h-full bg-gold rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
