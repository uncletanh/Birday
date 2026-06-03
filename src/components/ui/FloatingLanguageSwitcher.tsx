"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { useState } from "react";

export default function FloatingLanguageSwitcher() {
  const { lang, setLang, isReady } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  if (!isReady) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-warm-white/10 backdrop-blur border border-warm-white/20 flex items-center justify-center text-warm-white/70 hover:text-gold hover:border-gold/50 transition-colors"
      >
        <Globe size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-14 right-0 bg-background/95 backdrop-blur border border-warm-white/10 rounded overflow-hidden shadow-xl"
          >
            <div className="flex flex-col min-w-[120px]">
              <button 
                onClick={() => { setLang('vi'); setIsOpen(false); }}
                className={`px-4 py-3 text-left text-sm transition-colors ${lang === 'vi' ? 'bg-gold/10 text-gold' : 'text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white'}`}
              >
                Tiếng Việt
              </button>
              <button 
                onClick={() => { setLang('en'); setIsOpen(false); }}
                className={`px-4 py-3 text-left text-sm transition-colors ${lang === 'en' ? 'bg-gold/10 text-gold' : 'text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white'}`}
              >
                English
              </button>
              <button 
                onClick={() => { setLang('zh'); setIsOpen(false); }}
                className={`px-4 py-3 text-left text-sm transition-colors ${lang === 'zh' ? 'bg-gold/10 text-gold' : 'text-warm-white/70 hover:bg-warm-white/5 hover:text-warm-white'}`}
              >
                中文 (简体)
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
