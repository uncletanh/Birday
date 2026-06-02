"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function VisualArchives() {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  const images = [
    "/images/gallery/Chiết Giang.png",
    "/images/gallery/Hàng Châu.png",
    "/images/gallery/Thượng Hải.png",
    "/images/gallery/Hồ Kim Kê, Tô Châu.png",
    "/images/gallery/Hổ Khâu, Tô Châu.png",
    "/images/gallery/Lam Nguyệt Cốc, Lệ Giang.png",
    "/images/gallery/Thiên Nhất Các, Ninh Ba.png",
    "/images/gallery/Lệ Giang cảnh.png",
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-[100svh] flex items-center overflow-hidden">
        
        <div className="absolute top-12 left-6 md:left-12 z-10">
          <h3 className="font-serif text-3xl md:text-5xl text-warm-white mb-2">{t('visualArchives.title')}</h3>
          <p className="text-warm-white/50">{t('visualArchives.subtitle')} →</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 mt-32 md:mt-40 will-change-transform">
          {images.map((imgSrc, index) => (
            <div 
              key={index}
              className={`relative flex-shrink-0 w-[80vw] md:w-[40vw] lg:w-[30vw] h-[60vh] bg-warm-white/5 border border-warm-white/10 rounded-lg overflow-hidden group ${index % 2 !== 0 ? 'mt-24' : ''}`}
            >
              <div className="w-full h-full bg-gradient-to-br from-gold/5 to-transparent flex items-center justify-center">
                <img src={imgSrc} alt={`Memory ${index + 1}`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                 <span className="text-gold font-serif italic text-2xl drop-shadow-lg">Memory 0{index + 1}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
