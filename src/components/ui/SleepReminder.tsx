"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SleepReminder() {
  const [isVisible, setIsVisible] = useState(false);
  const { isReady } = useLanguage();

  useEffect(() => {
    // Chỉ kích hoạt khi đã hoàn thành các bước thiết lập đầu vào
    if (!isReady) return;

    // Kiểm tra giờ hiện tại (Từ 00:00 đến 05:00 sáng)
    const currentHour = new Date().getHours();
    const isLate = currentHour >= 0 && currentHour < 5; 

    // Kiểm tra session để không làm phiền liên tục
    const hasSeen = sessionStorage.getItem("hasSeenSleepReminder");

    if (isLate && !hasSeen) {
      // Đợi 5 giây sau khi vào triển lãm mới thò mặt ra "cà khịa"
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("hasSeenSleepReminder", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 left-6 z-[100] max-w-sm w-[calc(100vw-3rem)] md:w-full bg-background/95 border border-gold/30 rounded-2xl p-6 shadow-2xl backdrop-blur-lg"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-warm-white/50 hover:text-gold hover:rotate-90 transition-all duration-300"
          >
            <X size={18} />
          </button>
          
          <div className="flex items-center gap-3 mb-4 text-gold">
            <Moon size={24} className="animate-pulse" />
            <h3 className="font-serif text-xl font-semibold tracking-wide">Ủa alo?</h3>
          </div>
          
          <div className="space-y-3 text-warm-white/80 leading-relaxed italic border-l-2 border-gold/30 pl-4 mb-4">
            <p>"Hôm nay mình nhất định sẽ đi ngủ sớm."</p>
          </div>
          
          <p className="text-sm text-warm-white/60 mb-3">
            Đồng hồ đã báo giờ giới nghiêm rồi kìa!
          </p>
          <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
            <p className="text-sm font-medium text-gold">
              "Thôi lỡ rồi, xem nốt triển lãm rồi đi ngủ nhé!"
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
