"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, KeyRound, Unlock } from "lucide-react";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  const [passcode, setPasscode] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (val: string) => {
    setError(false);
    if (passcode.length < 3) {
      const newPass = passcode + val;
      setPasscode(newPass);
      if (newPass.length === 3) {
        if (newPass === "178") {
          setIsUnlocked(true);
        } else {
          setError(true);
          setTimeout(() => setPasscode(""), 500); // reset after error
        }
      }
    }
  };

  const handleDelete = () => {
    setPasscode(passcode.slice(0, -1));
    setError(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-background border border-gold/30 rounded-2xl p-8 relative shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-warm-white/50 hover:text-gold transition-colors z-10"
            >
              <X size={24} />
            </button>

            {!isUnlocked ? (
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <KeyRound size={32} className="text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-warm-white mb-2">Cánh Cửa Thứ 13</h3>
                <p className="text-warm-white/60 text-center mb-8">
                  Nhập mật mã để mở khóa khu vực ẩn.
                </p>

                {/* Display Dots */}
                <div className={`flex gap-4 mb-8 ${error ? 'animate-shake' : ''}`}>
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i} 
                      className={`w-4 h-4 rounded-full border-2 transition-all ${
                        passcode.length > i 
                          ? error ? 'bg-red-500 border-red-500' : 'bg-gold border-gold' 
                          : 'border-warm-white/20'
                      }`}
                    />
                  ))}
                </div>

                {/* Numpad */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-[250px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleInput(num.toString())}
                      className="w-full aspect-square rounded-full flex items-center justify-center text-xl font-medium border border-warm-white/10 hover:bg-gold/10 hover:text-gold hover:border-gold/30 transition-all active:scale-95 text-warm-white"
                    >
                      {num}
                    </button>
                  ))}
                  <div /> {/* empty slot */}
                  <button
                    onClick={() => handleInput("0")}
                    className="w-full aspect-square rounded-full flex items-center justify-center text-xl font-medium border border-warm-white/10 hover:bg-gold/10 hover:text-gold hover:border-gold/30 transition-all active:scale-95 text-warm-white"
                  >
                    0
                  </button>
                  <button
                    onClick={handleDelete}
                    className="w-full aspect-square rounded-full flex items-center justify-center text-warm-white/50 hover:text-gold transition-all active:scale-95"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center w-full"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Unlock size={32} className="text-gold" />
                </div>
                <h3 className="font-serif text-3xl text-gold mb-2 text-center">Trạm Dừng Số 27</h3>
                
                <div className="w-full bg-warm-white/5 rounded-xl border border-gold/20 p-6 md:p-8 mt-4 shadow-[0_0_30px_rgba(212,175,55,0.05)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
                  
                  <div className="space-y-6 text-warm-white/90 leading-relaxed font-serif text-lg">
                    <p className="italic border-l-2 border-gold/50 pl-4 text-warm-white/70">
                      "Hôm nay nhất định đi ngủ sớm... để ngày mai còn sức đi ngắm nhìn thế giới."
                    </p>
                    <p>
                      12 thành phố đã qua chỉ là sự khởi đầu. Tuổi 27 có thể sẽ bận rộn hơn, nhưng mong chị vẫn luôn giữ được sự bình yên như Giang Nam mùa thu, và rực rỡ như những chiếc đèn trời này.
                    </p>
                    <p>
                      Bất cứ khi nào mệt mỏi, hãy cứ xách balo lên...
                    </p>
                    <p className="text-right text-gold font-medium mt-8 text-xl">
                      — 178 (一起吧)
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
