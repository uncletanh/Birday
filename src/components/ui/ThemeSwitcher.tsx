"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Palette, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { isReady } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { id: 'dark', name: 'Nguyên bản', color: '#0A1128' },
    { id: 'magnolia', name: 'Mộc Lan', color: '#FFF5F5' },
    { id: 'porcelain', name: 'Thanh Hoa', color: '#F4F7F6' },
    { id: 'autumn', name: 'Nắng Thu', color: '#FDF6E3' },
    { id: 'jade', name: 'Ngọc Bích', color: '#E8F5E9' }
  ] as const;

  if (!isReady) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-background/80 backdrop-blur-md border border-warm-white/20 rounded-xl p-3 flex flex-col gap-2 shadow-2xl w-40"
          >
            <p className="text-xs uppercase tracking-wider text-warm-white/50 mb-1 px-1">Chủ đề màu</p>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors ${
                  theme === t.id ? 'bg-warm-white/10 text-gold' : 'text-warm-white hover:bg-warm-white/5'
                }`}
              >
                <div 
                  className="w-4 h-4 rounded-full border border-warm-white/20 shadow-inner flex items-center justify-center"
                  style={{ backgroundColor: t.color }}
                >
                  {theme === t.id && <Check size={10} className="text-black" />}
                </div>
                <span className="text-sm">{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-background/80 backdrop-blur-md border border-warm-white/20 rounded-full flex items-center justify-center text-warm-white hover:text-gold transition-colors shadow-lg"
      >
        <Palette size={20} />
      </motion.button>
    </div>
  );
}
