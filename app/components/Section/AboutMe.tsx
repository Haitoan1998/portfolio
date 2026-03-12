"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const socials = [
  { name: "Facebook", imgUrl: "/images/fb.png", url: "https://facebook.com/..." },
  { name: "LinkedIn", imgUrl: "/images/In.png", url: "https://linkedin.com/..." },
  { name: "GitHub", imgUrl: "/images/github.png", url: "https://github.com/..." },
];

const techs = ["React", "Next.js"];
const libs = ["Redux", "RTK Query", "React Query", "Tailwind CSS", "Framer Motion", "Ant Design", "Material UI", "Sentry"];
const listTechsIcon = ["/images/nextjs.png", "/images/reactjs.png", "/images/tailwind.png", "/images/redux.png", "/images/vite.png", "/images/sentry.png"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const AboutMe = () => {
  return (
    <motion.div id="about-me" className="w-full mx-auto bg-white dark:bg-[#1a1a20] text-slate-50 py-4 sm:py-6 px-4 sm:px-6 rounded-xl mb-5 border dark:border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center overflow-hidden font-mono" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}>
      <motion.div className="relative flex items-center justify-center h-full" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}>
        <>
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="rounded-hexagon" clipPathUnits="objectBoundingBox">
                <path d="M 0.45 0.025 Q 0.5 0 0.55 0.025 L 0.95 0.225 Q 1 0.25 1 0.3 L 1 0.7 Q 1 0.75 0.95 0.775 L 0.55 0.975 Q 0.5 1 0.45 0.975 L 0.05 0.775 Q 0 0.75 0 0.7 L 0 0.3 Q 0 0.25 0.05 0.225 Z" />
              </clipPath>
            </defs>
          </svg>

          <div
            className="w-[350px] h-[350px] bg-zinc-700/50 bg-cover bg-center"
            style={{
              clipPath: "url(#rounded-hexagon)",
              backgroundImage: "url('/images/test.jpg')",
            }}
          ></div>
        </>
      </motion.div>

      <motion.div className="flex flex-col gap-4 sm:gap-2 md:gap-2 xl:gap-4  flex-1" variants={containerVariants} initial="hidden" animate="visible">
        {/* --- DÒNG 1: TYPING EFFECT --- */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center">
          <span className="text-fuchsia-400 text-sm mr-1">&lt;h1&gt;</span>
          <span className="dark:text-zinc-300 text-black flex items-center">
            {"I'm Nguyen Dang Hai Toan".split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: (i) => ({
                    opacity: 1,
                    display: "inline",
                    transition: { delay: 1.5 + i * 0.05 },
                  }),
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span className="inline-block w-[2px] h-[1.1rem] dark:bg-zinc-300 bg-black ml-[2px] mr-2" animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
          </span>
          <span className="text-fuchsia-400 text-sm">&lt;/h1&gt;</span>
        </motion.div>

        <motion.h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold" variants={itemVariants}>
          {/* Note nhỏ: Chuyển text-emerald-400 thành text-transparent để dải màu gradient lộ ra đẹp nhất */}
          <span className="bg-gradient-to-r from-zinc-500 text-emerald-400 via-zinc-100 to-zinc-500 bg-clip-text bg-[length:200%_auto] animate-gradient block">
            {"Frontend Developer".split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1 + i * 0.04, // Bắt đầu sau khi dòng tên đã gõ gần xong
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1], // Gia tốc trượt mượt mà
                    },
                  }),
                }}
                className="inline-block" // Bắt buộc phải có inline-block để thuộc tính transform (y) hoạt động
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* --- ĐOẠN VĂN MÔ TẢ VỚI HIỆU ỨNG BLUR IN --- */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              filter: "blur(10px)", // Bắt đầu với độ nhòe 10px
              y: 10,
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)", // Hiện rõ nét
              y: 0,
              transition: {
                duration: 1.2,
                delay: 1.5, // Xuất hiện sau khi các dòng trên đã hoàn tất
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="dark:text-zinc-300 text-black leading-relaxed"
        >
          <span className="text-fuchsia-400 text-sm">&lt;p&gt;</span>
          <p className="inline leading-relaxed mx-1 md:text-sm xl:text-base">
            Frontend developer with 3 years of experience in the{" "}
            {techs.map((tech, i) => (
              <span key={tech} className="text-fuchsia-400 mx-1">
                {tech}
                {i < techs.length - 1 ? "," : " "}
              </span>
            ))}
            ecosystem Experienced in optimizing application performance through strategic <span className="text-cyan-400">CSR/SSR</span> implementation and advanced state management using <span className="text-cyan-400">Redux</span> and <span className="text-cyan-400">React Query</span> for seamless data synchronization. Strongly focused on building scalable, high-performance web solutions with clean code and robust frontend architecture. Proficient in ensuring application reliability using{" "}
            <span className="text-cyan-400">Sentry</span> to deliver efficient and sustainable technology solutions.
          </p>
          <span className="text-fuchsia-400 text-sm">&lt;/p&gt;</span>
        </motion.div>

        <motion.div className="flex items-center gap-4 mt-2" variants={itemVariants}>
          <div className="flex gap-3">
            {listTechsIcon.map((icon, i) => (
              <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded dark:bg-zinc-800 bg-[#f8f8f8] flex items-center justify-center text-emerald-400 dark:border-zinc-700 border-[#c0dcbc] border">
                <Image src={icon} alt={`Tech ${i + 1}`} width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
              </div>
            ))}
          </div>
          <span className="text-xs dark:text-white text-black">...and more</span>
        </motion.div>
        {/* NÚT DOWNLOAD CV */}
        <motion.a
          href="/images/mycv.pdf" // Đường dẫn file tính từ thư mục public
          download="Nguyễn Đăng Hải Toàn - Fe.pdf" // Tên file khi tải về máy người dùng
          className="inline-flex items-center gap-2 mt-2 cursor-pointer dark:text-zinc-300 text-black hover:text-emerald-400 dark:hover:text-emerald-400 transition-colors w-fit group"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div
            className="rounded flex items-center justify-center font-bold"
            variants={{
              tap: { scale: 0.8 },
            }}
          >
            <Image src={"/images/down.png"} alt={`down`} width={16} height={16} className="sm:w-5 sm:h-5 dark:invert group-hover:opacity-80" />
          </motion.div>

          <motion.div
            className="font-bold"
            variants={{
              hover: { x: 4 },
              tap: { scale: 0.95 },
            }}
          >
            {`[ Download my CV ]`}
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
