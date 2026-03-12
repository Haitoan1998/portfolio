"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Onlivetv.vn",
    description: "Sports, Esports, and Entertainment Platform",
    img: "/images/project/onlivetv.png",
    time: "Ongoing",
    tech: "Typescript, Nextjs, Sentry, Tailwind, Redux",
    demo: "https://onlivetv.vn/",
  },
  {
    title: "Onplus.vn",
    description: "Platform for Live Sports, Esports, and Entertainment News.",
    img: "/images/project/onplus.png",
    time: "Ongoing",
    tech: "Typescript, Nextjs, Sentry, Tailwind, React-query",
    demo: "https://onplus.com.vn/",
  },
  {
    title: "Onlivetv smart-tv",
    description: "Sports, Esports, and Entertainment Platform on TV",
    img: "/images/project/smarttv.png",
    time: "Ongoing",
    tech: "Reactjs, Redux, Redux saga, Framer Motion, Popmotion, React-speech-recognition.",
    demo: "https://lg.onlivetv.vn/",
  },
  {
    title: "Yêu hồ 9D",
    description: "Trang chủ đăng ký trước, tải đa nền tảng và thông tin phát hành trò chơi",
    img: "/images/project/yeuho.png",
    time: "1 months",
    tech: "Nextjs, TypeScript, Talwind",
    demo: "https://yeuho9d.vplay.vn/",
  },
  {
    title: "Meta tam quốc",
    description: "Trang chủ đăng ký trước, tải đa nền tảng và thông tin phát hành trò chơi",
    img: "/images/project/meta.png",
    time: "1 months",
    tech: "Nextjs, TypeScript, Talwind",
    demo: "https://metatamquoc.vplay.vn/",
  },
  {
    title: "Minh chỉ võ lâm",
    description: "Trang chủ đăng ký trước, tải đa nền tảng và thông tin phát hành trò chơi",
    img: "/images/project/minhchu.png",
    time: "1 months",
    tech: "Nextjs, TypeScript, Talwind",
    demo: "https://minhchuvolam.vplay.vn/",
  },
  {
    title: "Samkok tam quốc",
    description: "Trang chủ đăng ký trước, tải đa nền tảng và thông tin phát hành trò chơi",
    img: "/images/project/samkok.png",
    time: "1 months",
    tech: "Nextjs, TypeScript, Talwind",
    demo: "https://samkoktamquoc.vplay.vn/",
  },
  // Bạn có thể thêm nhiều dự án vào đây
];

export default function Project() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <section className="w-full mx-auto p-4 sm:p-6 md:p-8 dark:bg-[#23232d] bg-white rounded-2xl font-mono text-white">
      <h2 className="text-emerald-500 mb-2 sm:mb-4 text-sm sm:text-base">• Projects</h2>
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
        {/* Phần ảnh dự án - Thêm AnimatePresence để ảnh chuyển động mượt */}
        <div className="w-full md:w-1/2 h-64 sm:h-72 md:h-80 relative bg-zinc-800 rounded-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.img} // Key thay đổi theo ảnh sẽ trigger animation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image src={project.img} alt={project.title} fill className="object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Phần thông tin */}
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-3 sm:mb-4 md:mb-6">{project.title}</h3>
              <p className="dark:text-zinc-300 text-black mb-4 sm:mb-6 md:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">{project.description}</p>

              <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 text-xs sm:text-sm">
                <p className="dark:text-zinc-300 text-black text-xs sm:text-sm md:text-base">
                  <span className="dark:text-zinc-500 text-black text-xs sm:text-sm md:text-base">Completion Time:</span> {project.time}
                </p>
                <p className="dark:text-zinc-300 text-black text-xs sm:text-sm md:text-base">
                  <span className="dark:text-zinc-500 text-black text-xs sm:text-sm md:text-base">Technologies:</span> {project.tech}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <a href={project.demo} target="_blank" className="text-emerald-400 border-b font-bold border-emerald-400 text-sm sm:text-base">
                  ↗ Link
                </a>
                <div className="flex gap-2 sm:gap-4">
                  <button onClick={() => setIndex((prev) => Math.max(prev - 1, 0))} className="bg-zinc-700 p-1 sm:p-2 rounded-full hover:bg-zinc-600 disabled:opacity-50 cursor-pointer text-sm sm:text-base" disabled={index === 0}>
                    ←
                  </button>
                  <button onClick={() => setIndex((prev) => Math.min(prev + 1, projects.length - 1))} className="bg-emerald-500 p-1 sm:p-2 rounded-full hover:bg-emerald-400 disabled:opacity-50 cursor-pointer text-sm sm:text-base" disabled={index === projects.length - 1}>
                    →
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
