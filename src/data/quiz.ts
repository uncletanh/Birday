export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizBank: QuizQuestion[] = [
  // Lời bài hát "Flowers of Suzhou"
  {
    id: "q_song_1",
    question: "Điền vào chỗ trống trong câu hát: 细雨落在青石路上, 晚风轻轻吹进___ (Xìyǔ luò zài qīngshí lù shàng, wǎnfēng qīngqīng chuī jìn...)",
    options: ["梦乡 (mèngxiāng)", "心房 (xīnfáng)", "眼眶 (yǎnkuàng)", "天堂 (tiāntáng)"],
    correctAnswer: 1,
    explanation: "Câu đúng là '晚风轻轻吹进心房' (Gió chiều khẽ thổi vào tận đáy lòng)."
  },
  {
    id: "q_song_2",
    question: "苏州的花又开___, 你会不会想起我啊 (Sūzhōu de huā yòu kāi..., nǐ huì bú huì xiǎngqǐ wǒ a)",
    options: ["了吗 (le ma)", "了没 (le méi)", "了呢 (le ne)", "了呀 (le ya)"],
    correctAnswer: 0,
    explanation: "Câu đúng là '苏州的花又开了吗' (Mùa hoa ở Tô Châu đã nở trở lại chưa?)."
  },
  {
    id: "q_song_3",
    question: "我在长街等着你呀, 等到春天都___ (Wǒ zài chángjiē děng zhe nǐ ya, děng dào chūntiān dōu...)",
    options: ["开花 (kāihuā)", "回家 (huí jiā)", "落下 (luò xià)", "去哪 (qù nǎ)"],
    correctAnswer: 1,
    explanation: "Câu đúng là '等到春天都回家' (Đợi đến khi mùa xuân cũng tìm đường trở về)."
  },
  {
    id: "q_song_4",
    question: "如果还能再见的话, 陪你看遍苏州的___ (Rúguǒ hái néng zàijiàn de huà, péi nǐ kàn biàn Sūzhōu de...)",
    options: ["花 (huā)", "雨 (yǔ)", "街 (jiē)", "夜 (yè)"],
    correctAnswer: 0,
    explanation: "Bài hát tên là 'Flowers of Suzhou' nên chắc chắn là xem '花' rồi!"
  },
  // Kiến thức về Tô Châu
  {
    id: "q_sz_1",
    question: "Tô Châu (Suzhou) thường được mệnh danh là gì?",
    options: ["Bắc Kinh thu nhỏ (小北京)", "Paris của phương Đông (东方巴黎)", "Venice của phương Đông (东方威尼斯)", "Thành phố sương mù (雾都)"],
    correctAnswer: 2,
    explanation: "Tô Châu nổi tiếng với hệ thống kênh rạch chằng chịt và những cây cầu đá, nên được gọi là 东方威尼斯 (Venice của phương Đông)."
  },
  {
    id: "q_sz_2",
    question: "Câu thành ngữ nổi tiếng nào nói về vẻ đẹp của Tô Châu và Hàng Châu?",
    options: ["上有天堂，下有苏杭 (Trên có thiên đàng, dưới có Tô Hàng)", "桂林山水甲天下 (Sơn thủy Quế Lâm đẹp nhất thiên hạ)", "不到长城非好汉 (Chưa đến Trường Thành chưa phải hảo hán)", "桂林苏杭，人间天堂 (Quế Lâm Tô Hàng, thiên đường trần gian)"],
    correctAnswer: 0,
    explanation: "Thành ngữ '上有天堂，下有苏杭' (Thượng hữu thiên đàng, hạ hữu Tô Hàng) ý nói vẻ đẹp của Tô Châu và Hàng Châu sánh ngang thiên đường."
  },
  {
    id: "q_sz_3",
    question: "Đại học Tô Châu (Soochow University) có tên tiếng Trung là gì?",
    options: ["苏州大学 (Sūzhōu Dàxué)", "苏大 (Sūdà)", "Cả hai đều đúng", "Cả hai đều sai"],
    correctAnswer: 2,
    explanation: "Trường gọi đầy đủ là 苏州大学, và gọi tắt là 苏大."
  },
  {
    id: "q_sz_4",
    question: "Điểm du lịch nào KHÔNG thuộc Tô Châu?",
    options: ["Hổ Khâu (虎丘)", "Hồ Kim Kê (金鸡湖)", "Tây Hồ (西湖)", "Lâm viên Tô Châu (苏州园林)"],
    correctAnswer: 2,
    explanation: "Tây Hồ (西湖) là điểm du lịch vô cùng nổi tiếng, nhưng nó nằm ở Hàng Châu chứ không phải Tô Châu!"
  },
  // HSK 3-4 Vui nhộn
  {
    id: "q_hsk_1",
    question: "Điền từ: ___我很想减肥，___天天喝奶茶。(Mặc dù tôi rất muốn giảm cân, nhưng ngày nào cũng uống trà sữa.)",
    options: ["因为... 所以...", "虽然... 但是...", "不但... 而且...", "既然... 就..."],
    correctAnswer: 1,
    explanation: "Mẫu câu tương phản '虽然... 但是...' (Tuy... Nhưng...)."
  },
  {
    id: "q_hsk_2",
    question: "Câu nào dùng đúng cấu trúc bị động (被) trong hoàn cảnh 'ngộ độc thực phẩm'?",
    options: ["我把肚子吃坏了。(Wǒ bǎ dùzi chī huài le)", "我被外卖吃坏了肚子。(Wǒ bèi wàimài chī huài le dùzi)", "外卖把我吃了肚子。(Wàimài bǎ wǒ chī le dùzi)", "肚子被我吃坏了。(Dùzi bèi wǒ chī huài le)"],
    correctAnswer: 1,
    explanation: "Câu B dùng cấu trúc bị động hợp lý (bị đồ ăn ngoài làm hỏng bụng), dù thực tế người ta hay nói '吃坏肚子了'."
  },
  {
    id: "q_hsk_3",
    question: "Điền từ: 他太累了，___饭___没吃就睡了。(Cậu ấy mệt quá, ĐẾN CẢ cơm CŨNG chưa ăn đã ngủ rồi.)",
    options: ["连... 都...", "除了... 也...", "只要... 就...", "只有... 才..."],
    correctAnswer: 0,
    explanation: "Cấu trúc nhấn mạnh '连... 都/也...' (Đến cả ... cũng ...)."
  },
  {
    id: "q_hsk_4",
    question: "Khi bạn muốn mua bánh ngọt mà hết tiền, bạn nói: '对我___，最难的不是学中文，是没钱买蛋糕。'",
    options: ["来看", "来说", "来讲", "来听"],
    correctAnswer: 1,
    explanation: "Cấu trúc '对 (ai đó) 来说' (Đối với ... mà nói)."
  },
  {
    id: "q_hsk_5",
    question: "Câu nào thể hiện ý chí 'Dù ốm cũng phải đi chơi'?",
    options: ["即使生病了，我也要去玩。 (Jíshǐ shēngbìng le, wǒ yě yào qù wán)", "因为生病了，所以我去玩。 (Yīnwèi shēngbìng le, suǒyǐ wǒ qù wán)", "不但生病了，而且去玩。 (Búdàn shēngbìng le, érqiě qù wán)", "只要生病了，我就去玩。 (Zhǐyào shēngbìng le, wǒ jiù qù wán)"],
    correctAnswer: 0,
    explanation: "Cấu trúc nhượng bộ '即使... 也...' (Cho dù... cũng...)."
  },
  {
    id: "q_hsk_6",
    question: "Điền từ: ___喝奶茶___，我还喜欢吃火锅。(Ngoài uống trà sữa ra, tôi còn thích ăn lẩu.)",
    options: ["除了... 以外", "为了... 所以", "因为... 以外", "虽然... 以外"],
    correctAnswer: 0,
    explanation: "Cấu trúc '除了... (以外)...' (Ngoài ... ra ...)."
  },
  {
    id: "q_hsk_7",
    question: "Bạn thấy đề thi HSK khó quá, bạn than vãn: 这次考试___太难了吧！",
    options: ["竟然 (jìngrán)", "忽然 (hūrán)", "实在 (shízài)", "其实 (qíshí)"],
    correctAnswer: 2,
    explanation: "'实在太难了' (thực sự là quá khó). '竟然' là bất ngờ, '忽然' là đột nhiên, '其实' là thực ra."
  },
  {
    id: "q_hsk_8",
    question: "Điền từ phù hợp với hoàn cảnh đi du lịch bị lạc: 没关系，___找不到路，我们___可以打车。",
    options: ["既然... 就", "无论... 都", "要是... 就", "只要... 才"],
    correctAnswer: 2,
    explanation: "Câu giả định '要是... 就...' (Nếu như... thì...)."
  },
  {
    id: "q_hsk_9",
    question: "Dịch câu 'Tôi ăn no rồi' sao cho chuẩn HSK?",
    options: ["我吃好了。", "我吃饱了。", "我吃完饱了。", "我被吃饱了。"],
    correctAnswer: 1,
    explanation: "'吃饱' (ăn no) là bổ ngữ kết quả chuẩn nhất."
  },
  {
    id: "q_hsk_10",
    question: "Câu thả thính chuẩn HSK 4: 世界上___有那么多人，我___只喜欢你。 (Trên thế giới có nhiều người như vậy, anh lại chỉ thích mình em)",
    options: ["竟然 / 就", "既然 / 都", "虽然 / 却", "要是 / 就"],
    correctAnswer: 2,
    explanation: "'虽然... 却...' (Mặc dù... lại...). Nhưng ở đây dùng 却 để nhấn mạnh sự đối lập cực kỳ lãng mạn."
  },
  {
    id: "q_hsk_11",
    question: "Điền lượng từ đúng: 一___蛋糕 (Một chiếc bánh ngọt)",
    options: ["个 (gè)", "本 (běn)", "块 (kuài)", "条 (tiáo)"],
    correctAnswer: 2,
    explanation: "Lượng từ cho miếng/chiếc bánh là '块' (khối/miếng)."
  },
  {
    id: "q_hsk_12",
    question: "Bạn muốn khen cô ấy chụp ảnh đẹp ở Lệ Giang, bạn nói: 你拍的照片___好看了！",
    options: ["真 (zhēn)", "太 (tài)", "很 (hěn)", "非常 (fēicháng)"],
    correctAnswer: 1,
    explanation: "Cấu trúc cảm thán phổ biến là '太...了' (Quá... rồi!)."
  },
  {
    id: "q_hsk_13",
    question: "Bạn nhắn tin hỏi cô ấy: 'Bao giờ em mới chịu ngủ?'. Chọn từ điền vào chỗ trống: 你___才睡觉？",
    options: ["什么时候 (shénme shíhou)", "怎么 (zěnme)", "几点 (jǐ diǎn)", "到底什么时候 (dàodǐ shénme shíhou)"],
    correctAnswer: 3,
    explanation: "'到底' (rốt cuộc) nhấn mạnh sự sốt ruột: 'Rốt cuộc bao giờ em mới ngủ?'"
  },
  {
    id: "q_sz_5",
    question: "Khu Lâm viên Tô Châu được UNESCO công nhận là Di sản Thế giới nổi bật với thiết kế gì?",
    options: ["Hùng vĩ, tráng lệ", "Hòa hợp thiên nhiên, tinh tế (Gồm nước, đá, cây cảnh)", "Hiện đại, cao tầng", "Rộng lớn, nguy nga"],
    correctAnswer: 1,
    explanation: "Đặc trưng của Lâm viên Tô Châu là sự tinh xảo, mượn cảnh thiên nhiên tạo nên vẻ đẹp tĩnh lặng."
  },
  {
    id: "q_hsk_14",
    question: "Thành ngữ '人山人海' (Nhân sơn nhân hải) nghĩa là gì, thường dùng khi cô ấy đi du lịch vào ngày lễ?",
    options: ["Núi và biển đẹp", "Người đông như kiến (Biển người)", "Người thích đi núi và biển", "Không có ai cả"],
    correctAnswer: 1,
    explanation: "'Nhân sơn nhân hải' dùng để tả cảnh tượng đông nghịt người, đặc sản du lịch Trung Quốc mùa lễ hội!"
  },
  {
    id: "q_song_5",
    question: "Hãy đoán từ còn thiếu: 烟雨杭城，洗尽半生___ (Yānyǔ Hángchéng, xǐ jìn bànshēng...)",
    options: ["浮名 (fúmíng)", "深情 (shēnqíng)", "伤心 (shāngxīn)", "回忆 (huíyì)"],
    correctAnswer: 0,
    explanation: "Câu đúng là '洗尽半生浮名' (Gột rửa hết những hư danh nửa đời người)."
  }
];
