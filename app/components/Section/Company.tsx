"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// --- CẤU HÌNH HIỆU ỨNG ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8, // Khung cha chờ 0.5s rồi mới lướt lên
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.15, // (Tùy chọn) Thêm lại stagger để 3 cột hiện lên nối đuôi nhau cho đẹp
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
const experiences = [
  {
    company: "Công ty cổ phần truyền hình tương tác Việt Nam - VTVLive",

    logo: "/images/company/vtv.webp",

    years: "02/2024 - Present",

    des: [
      "Payment Gateway Integration: Developed and maintained secure payment recharge systems, ensuring high transaction reliability.",

      "User Profile Management: Built comprehensive dashboards for user information management and account security.",

      "MediaHub CMS & SmartTV: Developed robust CMS for media content management and optimized video playback experiences on SmartTV platforms.",

      "High-Performance Landing Pages: Built dynamic landing pages using Next.js and traditional MVC architectures, focusing on SEO and high conversion rates.",
    ],
  },

  {
    company: "Wgentech .,JSC",

    logo: "/images/company/wgt.png",

    years: "07/2023 - 12/2023",

    des: ["E-commerce Development: Built and customized high-conversion sales interfaces using Shopify.", "Backend Integration: Implemented and maintained custom features using PHP to enhance store functionality.", "Performance Optimization: Streamlined page loading and user flow to improve the shopping experience."],
  },

  {
    company: "Nodemy Vietnam Technology Co., Ltd.",

    logo: "/images/company/nodemy.png",

    years: "02/2022 - 06/2023",

    des: ["UI/UX Implementation: Translate design mockups into functional, responsive, and pixel-perfect web interfaces", "Feature Development: Build and maintain interactive website features using modern frameworks like React or Next.js.", "Performance & SEO: Optimize page load speed, accessibility, and search engine visibility to improve user experience."],
  },
];
export default function Company() {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);

  return (
    <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="w-full mx-auto bg-white dark:bg-[#1a1a20] text-slate-50 p-4 sm:p-6 md:p-8 rounded-xl mb-5 border dark:border-zinc-800 font-mono overflow-hidden">
    <h2 className="text-emerald-500 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base">• Company</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Danh sách công ty - Thêm variants */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {experiences.map((exp) => (
            <motion.div key={exp.company} variants={itemVariants} onClick={() => setSelectedExp(exp)} whileHover={{ x: 5 }} className={`p-3 sm:p-4 rounded-sm flex items-center gap-3 sm:gap-4 cursor-pointer border transition-colors ${selectedExp.company === exp.company ? "border-emerald-400 bg-emerald-500/10" : "border-transparent"}`}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative flex-shrink-0">
                <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
              </div>
              <div>
                <h3 className={`font-bold text-xs sm:text-sm md:text-base ${selectedExp.company === exp.company ? "text-emerald-400" : "dark:text-white text-black"}`}>{exp.company}</h3>
                <p className={`text-xs sm:text-sm ${selectedExp.company === exp.company ? "dark:text-zinc-300 text-black" : "dark:text-zinc-500 text-black"}`}>{exp.years}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nội dung chi tiết - Giữ nguyên hiệu ứng AnimatePresence */}
        <div className="border-t md:border-t-0 md:border-l border-zinc-700 pt-4 md:pt-0 md:pl-6 lg:pl-8">
          <AnimatePresence mode="wait">
            <motion.div key={selectedExp.company} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.4, ease: "easeOut" }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4 md:mb-6">{selectedExp.company}</h3>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 mb-4 sm:mb-6 md:mb-6 italic">{selectedExp.years}</p>
              <ul className="space-y-3 sm:space-y-4 md:space-y-4 text-white">
                {selectedExp.des?.map((item, idx) => (
                  <motion.li key={idx} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-emerald-400 flex-shrink-0">•</span>
                    <span className="dark:text-white text-black">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
