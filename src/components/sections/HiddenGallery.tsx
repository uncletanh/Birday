"use client";

import { motion } from "framer-motion";
import { useExhibition } from "@/context/ExhibitionContext";
import { Lock, Play, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HiddenGallery() {
  const { isQuizPassed } = useExhibition();
  const { t } = useLanguage();

  const songs = [
    { id: "song1", title: t('soundtrack.s1Title') || "Flowers of Suzhou", artist: t('soundtrack.s1Artist') || "苏州的花", desc: t('soundtrack.s1Desc'), url: "https://www.youtube.com/embed/l2ePxDzA3J4" },
    { id: "song2", title: t('soundtrack.s2Title') || "Gentle Ripples on West Lake", artist: t('soundtrack.s2Artist') || "西湖微澜", desc: t('soundtrack.s2Desc'), url: "https://www.youtube.com/embed/w9wzZplR66E" },
    { id: "song3", title: t('soundtrack.s3Title') || "Rainy Night in Wuzhen", artist: t('soundtrack.s3Artist') || "乌镇夜雨", desc: t('soundtrack.s3Desc'), url: "https://www.youtube.com/embed/szzAhILqXfM" },
    { id: "song4", title: t('soundtrack.s4Title') || "Lights of Qinhuai", artist: t('soundtrack.s4Artist') || "秦淮灯火", desc: t('soundtrack.s4Desc'), url: "https://www.youtube.com/embed/thlWgTK_0K0" },
  ];

  return (
    <section id="hidden-gallery" className="min-h-screen w-full py-24 px-6 relative overflow-hidden bg-[#050505]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4 flex items-center justify-center gap-2">
            <Heart size={14} className="text-gold" />
            {t('hidden.tag') || "Hidden Gallery"}
            <Heart size={14} className="text-gold" />
          </h2>
          <h3 className="font-serif text-4xl md:text-5xl text-warm-white mb-4">{t('hidden.title') || "Góc Bí Mật"}</h3>
          <p className="text-warm-white/50">{t('hidden.subtitle') || "Nơi lưu giữ những điều chân thành nhất."}</p>
        </motion.div>

        {!isQuizPassed ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 border border-warm-white/5 bg-warm-white/[0.02] rounded-2xl backdrop-blur-sm max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-warm-white/5 border border-warm-white/10 flex items-center justify-center mb-8 text-warm-white/30 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
              <Lock size={32} />
            </div>
            <h4 className="text-2xl font-serif text-warm-white mb-4">Khu vực bị khóa</h4>
            <p className="text-warm-white/50 text-center max-w-md px-4 leading-relaxed">
              Hãy vượt qua bài kiểm tra HSK phía trên để chứng minh bạn chính là người được mời đến Góc Bí Mật này.
            </p>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-24"
          >
            {/* The Unsent Letter */}
            <div className="max-w-4xl mx-auto w-full bg-warm-white/[0.03] border border-gold/20 p-8 md:p-16 rounded-2xl backdrop-blur-sm relative shadow-[0_0_50px_rgba(212,175,55,0.05)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-6 py-2 border border-gold/20 rounded-full">
                <span className="font-serif italic text-gold text-xl md:text-2xl">A Letter for 27</span>
              </div>
              
              <div className="font-serif text-warm-white/80 leading-[2.2] space-y-6 text-lg md:text-xl text-justify">
                <p>Lúc đầu, em chỉ định gửi cho chị một vài dòng tin nhắn cùng một chiếc playlist Giang Nam. Nhưng em nghĩ, một người kiên cường và đặc biệt như chị xứng đáng có cả một không gian triển lãm để lưu giữ trọn vẹn tuổi 27 này.</p>
                <p>Toàn bộ âm nhạc trong này là tâm huyết em dành tặng chị. Em mong rằng, dù sau này chị đi đến phương trời nào, thì cũng luôn có tiếng nhạc em đánh, lời nhạc em viết đợi chị ở đó. Mệt mỏi thì cứ dừng lại nghỉ ngơi (<i>“唯许执念慢栖息”</i>), giữ cho lòng bình yên (<i>“西湖微澜，渡我一苇远行”</i>), và sống thật kiêu hãnh tự tại (<i>“笑叹红尘几更迭”</i>).</p>
                <p>Nhạc thì em gửi trước, còn người thì tháng 3 sang năm sẽ có mặt để ngắm hoa cùng chị (<i>“如果还能再见的话，陪你看遍苏州的花”</i>).</p>
                <p>Ngày hôm nay, bức bản đồ thanh xuân của chị đã có 12 dấu chân rực sáng. Chúc chị tuổi 27 chân cứng đá mềm để đi trọn vẹn mọi vùng đất của Trung Hoa, tự do cất cánh bay đến mọi chân trời mà chị khao khát, và có được mọi điều mà chị hằng ước mong.</p>
                <p className="text-gold font-semibold pt-4">Sinh nhật rực rỡ nhé, Hạnh Nguyên!</p>
              </div>

              <div className="mt-14 flex justify-center">
                <a 
                  href="https://youtube.com/playlist?list=PL1qjNyT6fEAqUtFY9OkvhasL7b9VzmF1L&si=qy32Fru7wHQ_Y_09" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-background font-semibold rounded-full hover:bg-gold/80 transition-all uppercase tracking-widest text-sm hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Play size={18} fill="currentColor" />
                  Nghe toàn bộ Playlist
                </a>
              </div>
            </div>

            {/* Zigzag Videos Layout */}
            <div className="space-y-20 max-w-5xl mx-auto w-full pt-10">
              {songs.map((song, index) => (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-warm-white/10 group relative">
                    <iframe 
                      src={song.url} 
                      title={song.title} 
                      className="w-full h-full border-0 grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="w-full md:w-1/2 space-y-5 px-4 md:px-0">
                    <div className="inline-block px-3 py-1 border border-gold/30 rounded-full text-gold text-xs tracking-[0.2em] uppercase">
                      Track 0{index + 1}
                    </div>
                    <h4 className="text-3xl md:text-4xl font-serif text-warm-white leading-tight">{song.title}</h4>
                    <p className="text-warm-white/40 tracking-widest uppercase text-sm font-medium">{song.artist}</p>
                    <p className="text-warm-white/70 leading-relaxed italic border-l-2 border-gold/50 pl-6 text-lg">
                      "{song.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        )}
      </div>
    </section>
  );
}
