"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView, Variants } from "framer-motion";

// --- COMPONENT ĐẾM SỐ ---
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // ĐÃ SỬA: Hạ delay xuống 0.5s để khớp hoàn toàn với thời gian khung cha xuất hiện
      const controls = animate(count, value, { duration: 2, ease: "easeOut", delay: 0.5 });
      return controls.stop;
    }
  }, [count, value, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- VARIANTS KHUNG TỔNG ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5, // Khung cha chờ 0.5s rồi mới lướt lên
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
      staggerChildren: 0.15, // (Tùy chọn) Thêm lại stagger để 3 cột hiện lên nối đuôi nhau cho đẹp
      delayChildren: 0.5,
    },
  },
};

// --- VARIANTS CHO 3 CỘT CON ---
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Resume = () => {
  return (
    <motion.div id="resume"
      style={{ backgroundImage: "url('/images/grid.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      className="w-full mx-auto bg-white dark:bg-[#1a1a20] text-slate-50 py-4 sm:py-6 px-4 sm:px-6 rounded-xl mb-5 border dark:border-zinc-800 grid grid-cols-3 justify-center gap-6 md:gap-12 items-center overflow-hidden font-mono"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* CỘT 1 */}
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <Image src={'/images/year.png'} alt={`resume`} width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
          <div className="text-5xl sm:text-6xl md:text-7xl text-black dark:text-white font-bold flex items-center">
          <AnimatedNumber value={3} />
          <span className="dark:text-[#8f8f92] text-gray-500">+</span>
        </div>
        <div className="text-black dark:text-white text-xs sm:text-sm md:text-base text-nowrap">Year Experience</div>
      </motion.div>

      {/* CỘT 2 */}
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <Image src={'/images/year.png'} alt={`resume`} width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
        <div className="text-5xl sm:text-6xl md:text-7xl text-black dark:text-white font-bold flex items-center">
          <AnimatedNumber value={7} />
          <span className="dark:text-[#8f8f92] text-gray-500">+</span>
        </div>
        <div className="text-black dark:text-white text-xs sm:text-sm md:text-base text-nowrap">Project Completed</div>
      </motion.div>

      {/* CỘT 3 */}
      <motion.div variants={itemVariants} className="flex flex-col items-center">
        <Image src={'/images/year.png'} alt={`resume`} width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
        <div className="text-5xl sm:text-6xl md:text-7xl text-black dark:text-white font-bold flex items-center">
          <AnimatedNumber value={3} />
          <span className="dark:text-[#8f8f92] text-gray-500">+</span>
        </div>
        <div className="text-black dark:text-white text-xs sm:text-sm md:text-base text-nowrap">Company</div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;