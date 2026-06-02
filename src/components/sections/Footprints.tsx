"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const ConstellationMap = dynamic(() => import("@/components/ui/ConstellationMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square md:aspect-[16/10] bg-[#030303] rounded-2xl border border-gold/10 flex items-center justify-center">
      <span className="text-gold/30 tracking-widest text-sm uppercase animate-pulse">Initializing Map...</span>
    </div>
  )
});

export default function Footprints() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen w-full py-24 px-6 bg-[#050505] relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h3 className="font-serif text-4xl md:text-5xl text-warm-white mb-4">{t('footprints.title')}</h3>
          <p className="text-warm-white/50 max-w-2xl mx-auto">{t('footprints.subtitle')}</p>
        </motion.div>

        <ConstellationMap />
      </div>
    </section>
  );
}
