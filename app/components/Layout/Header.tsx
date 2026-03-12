/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WordsPullUp } from "../ui/WordPullUp";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedGroup, AnimatedIcon } from "../ui/AnimatedGroup";

const menuItems = [
  { name: "About me", id: "aboutme" },
  { name: "Resume", id: "Resume" },
  { name: "Company", id: "Company" },
  { name: "Skills", id: "Skills" },
  { name: "Projects", id: "Projects" },
  { name: "Contact", id: "Contact" },
];

const socials = [
  {
    name: "GitHub",
    imgUrl: "/images/github.png",
    url: "https://github.com/Haitoan1998",
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Lấy vị trí của phần tử
      const offset = 80; // Khoảng cách bù trừ nếu bạn có Header cố định (Sticky)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Đóng menu mobile sau khi click
    }
    setOpen(false);
  };
  if (!mounted) return null;

  return (
    <>
      {/* ================= HEADER ================= */}

      <motion.div
        className="w-[90%] xl:w-2/3 mx-auto dark:bg-[#1a1a20] bg-[#333a32] text-slate-50 ps-4 sm:ps-6 mt-4 mb-6 rounded-lg border border-zinc-800 flex items-stretch justify-between overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        }}
      >
        {/* ================= LOGO ================= */}

        <div className="flex items-center py-2 sm:py-3">
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, type: "spring", delay: 0.2 }} whileHover={{ rotate: 15, scale: 1.1 }} className="mr-3">
            <Image src="/images/Logo.png" alt="Logo" width={24} height={24} className="sm:w-7 sm:h-7" />
          </motion.div>

          <motion.div
            className="lg:text-lg xl:text-2xl font-bold bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              backgroundPosition: ["200% center", "0% center"],
            }}
            transition={{
              clipPath: { duration: 1.5, ease: "easeInOut", delay: 0.2 },
              backgroundPosition: {
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
          >
            Toan.dev
          </motion.div>
        </div>

        {/* ================= MENU DESKTOP ================= */}

        <div className="hidden xl:flex items-center justify-center gap-4 sm:gap-6 py-2 sm:py-3">
          {menuItems.map((item, index) => (
            <WordsPullUp onClick={handleScroll} key={index} baseDelay={0.6 + index * 0.15} text={item?.name} className="text-sm md:text-base cursor-pointer hover:text-white transition-colors" />
          ))}
        </div>

        {/* ================= SOCIAL + THEME ================= */}

        <div className="flex items-stretch items-center">
          {/* SOCIAL */}
          <AnimatedGroup delay={1.2} stagger={0.1} className="flex items-center gap-4 py-2 sm:py-3 pe-4 sm:pe-6">
            {socials.map((item, index) => (
              <AnimatedIcon key={index} href={item.url}>
                <Image src={item.imgUrl} alt={item.name} width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
              </AnimatedIcon>
            ))}
          </AnimatedGroup>

          {/* THEME BUTTON */}

          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            whileHover="hover"
            whileTap="tap"
            className="
  flex items-center justify-center
  px-3 sm:px-4 md:px-6
  h-full
  dark:bg-[#32323b] bg-[#3d443c]
  hover:bg-zinc-600
  transition-colors
  cursor-pointer
"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0 },

                show: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                },

                hover: {
                  y: -3,
                  scale: 1.15,
                  filter: "drop-shadow(0px 5px 15px rgba(255,255,255,0.3))",
                },

                tap: { scale: 0.9 },
              }}
            >
              <Image src={theme === "light" ? "/images/moon.png" : "/images/sun.png"} alt="theme" width={18} height={18} className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
            </motion.div>
          </motion.button>

          {/* HAMBURGER (MOBILE) */}

          <div className="flex xl:hidden items-center px-3 sm:px-4">
            <button onClick={() => setOpen(!open)}>
              <Image src="/images/bar.png" alt="menu" width={20} height={20} className="sm:w-[22px] sm:h-[22px]" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* ================= OVERLAY ================= */}

      {open && <div onClick={() => setOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" />}

      {/* ================= SIDEBAR ================= */}

      <motion.div initial={{ x: "-100%" }} animate={{ x: open ? 0 : "-100%" }} transition={{ type: "spring", stiffness: 260, damping: 25 }} className="fixed top-0 left-0 h-full w-3/4 sm:w-64 dark:bg-[#1a1a20] bg-white z-50 p-4 sm:p-6 flex flex-col gap-6 sm:gap-8 xl:hidden">
        {/* CLOSE BUTTON */}

        <button onClick={() => setOpen(false)} className="self-end">
          <Image src="/images/clodeBar.png" alt="close" width={18} height={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* MENU ITEMS */}

        <div className="flex flex-col gap-6 mt-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -20,
              }}
              transition={{ delay: index * 0.1 }}
              className="text-base sm:text-lg cursor-pointer hover:text-zinc-300 dark:text-white text-black"
              onClick={() => handleScroll(item.id)}
            >
              {item?.name}
            </motion.div>
          ))}
        </div>

        {/* SOCIAL MOBILE */}

        <div className="flex gap-4 mt-auto">
          {socials.map((item, index) => (
            <a key={index} href={item.url}>
              <Image src={item.imgUrl} alt={item.name} width={18} height={18} className="sm:w-5 sm:h-5" />
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Header;
