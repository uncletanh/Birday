"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useExhibition } from "@/context/ExhibitionContext";
import { quizBank, QuizQuestion } from "@/data/quiz";

// Hàm trộn mảng ngẫu nhiên (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function GrammarQuiz() {
  const { t } = useLanguage();
  const { isQuizPassed, setQuizPassed } = useExhibition();

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  
  // Trạng thái hiệu ứng cho lựa chọn hiện tại
  const [shake, setShake] = useState(false);

  // Chọn 4 câu ngẫu nhiên khi component mount hoặc khi chơi lại
  const startNewGame = () => {
    const shuffled = shuffleArray(quizBank).slice(0, 4);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setShake(false);
  };

  useEffect(() => {
    startNewGame();
  }, []);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Không cho chọn lại
    
    setSelectedAnswer(index);
    
    if (index === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500); // Tắt hiệu ứng rung sau 0.5s
    }
  };

  const handleNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
      if (score === 4) {
        setQuizPassed(true);
      }
    }
  };

  // Tính điểm cuối cùng
  const finalScore = isFinished ? score : 0;

  return (
    <section className="min-h-screen w-full py-24 px-6 bg-background flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            {t('quiz.tag') || "The HSK & Suzhou Challenge"}
          </h2>
          <h3 className="font-serif text-3xl md:text-5xl mb-4">
            {t('quiz.title') || "Khảo sát năng lực phiên bản giới hạn"}
          </h3>
          <p className="text-warm-white/60 text-base md:text-lg">
            {t('quiz.subtitle') || "Đạt 4/4 điểm để mở khóa Góc Bí Mật phía dưới nhé!"}
          </p>
        </motion.div>

        {!isFinished ? (
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-warm-white/5 border border-warm-white/10 p-8 md:p-12 rounded-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-warm-white/10 rounded-t-2xl overflow-hidden">
              <motion.div 
                className="h-full bg-gold"
                initial={{ width: `${(currentIndex / 4) * 100}%` }}
                animate={{ width: `${((currentIndex + 1) / 4) * 100}%` }}
              />
            </div>
            
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-6">
              Question 0{currentIndex + 1}
            </p>
            <h4 className="text-xl md:text-2xl font-serif leading-relaxed mb-10">
              {currentQ.question}
            </h4>

            <motion.div 
              className="flex flex-col gap-4"
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQ.correctAnswer;
                
                let btnClass = "border-warm-white/20 hover:border-gold/50 text-warm-white/80 bg-transparent";
                
                if (selectedAnswer !== null) {
                  if (isCorrect) {
                    btnClass = "border-green-500 bg-green-500/10 text-green-400";
                  } else if (isSelected) {
                    btnClass = "border-red-500 bg-red-500/10 text-red-400";
                  } else {
                    btnClass = "border-warm-white/10 text-warm-white/30 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedAnswer !== null}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-300 ${btnClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </motion.div>

            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  className="overflow-hidden"
                >
                  <div className={`p-4 rounded-lg text-sm ${selectedAnswer === currentQ.correctAnswer ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    <span className="font-bold mr-2">
                      {selectedAnswer === currentQ.correctAnswer ? t("quiz.correct") || "Chính xác!" : t("quiz.wrong") || "Sai rồi!"}
                    </span>
                    {currentQ.explanation}
                  </div>
                  
                  <button
                    onClick={handleNext}
                    className="mt-6 w-full py-4 bg-gold text-background font-medium rounded-xl hover:bg-gold/80 transition-colors uppercase tracking-widest text-sm"
                  >
                    {currentIndex < 3 ? t("quiz.next") || "Câu tiếp theo" : t("quiz.viewResult") || "Xem kết quả"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-warm-white/5 border border-warm-white/10 p-12 rounded-2xl text-center"
          >
            <div className="text-6xl mb-6">
              {finalScore === 4 ? "🎉" : "😅"}
            </div>
            <h4 className="text-3xl font-serif mb-4">
              {finalScore === 4 ? t("quiz.perfect") || "Hoàn hảo! (4/4)" : `${t("quiz.tooBad") || "Tiếc quá!"} (${finalScore}/4)`}
            </h4>
            <p className="text-warm-white/60 mb-8">
              {finalScore === 4 
                ? t("quiz.passedMsg") || "Thực lực HSK 5 có khác! Góc Bí Mật đã được mở khóa dành riêng cho chị."
                : t("quiz.failedMsg") || "Phải trả lời đúng 100% cơ. Hình như lúc nãy vô tình bấm nhầm đúng không? Thử lại nhé!"}
            </p>
            
            {finalScore === 4 ? (
              <button
                onClick={() => document.getElementById("hidden-gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gold text-background font-medium rounded-full hover:bg-gold/80 transition-colors uppercase tracking-widest text-sm inline-flex items-center gap-2"
              >
                {t("quiz.enterSecret") || "Tiến vào Góc Bí Mật"}
              </button>
            ) : (
              <button
                onClick={startNewGame}
                className="px-8 py-3 bg-warm-white/10 border border-warm-white/20 text-warm-white rounded-full hover:bg-warm-white hover:text-background transition-all uppercase tracking-widest text-sm inline-flex items-center gap-2"
              >
                {t("quiz.tryAgain") || "Thử lại ngay"}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
