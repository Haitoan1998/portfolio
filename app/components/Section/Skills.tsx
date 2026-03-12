/* eslint-disable react-hooks/purity */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import Image from "next/image";
import { motion, easeOut, Variants } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Skill {
  name: string;
  iconUrl: string;
  description: string;
}

interface FloatingSkillProps {
  skill: Skill;
  index: number;
  totalSkills: number;
  onClick: () => void;
  isSelected: boolean;
  orbitRadii: number[]; // Nhận giá trị động từ cha,
  scale: number;
}

const skills: Skill[] = [
  {
    name: "React",
    iconUrl: "/skills/react.png",
    description: "Strong understanding of core React concepts such as the Virtual DOM, component-based architecture, and state management using Hooks (useState, useEffect, useContext). I can build highly interactive user interfaces, handle events efficiently, and structure components to ensure maintainable and scalable applications.",
  },
  {
    name: "Next.js",
    iconUrl: "/skills/nextjs.png",
    description: "Solid understanding of the differences between SSR, SSG, and client-side rendering, and how to apply them effectively depending on the project requirements. Experienced in structuring applications using file-based routing, optimizing SEO with metadata, and improving performance through built-in features like image and font optimization.",
  },
  {
    name: "Redux",
    iconUrl: "/skills/redux.png",
    description: "Experienced in using Redux Toolkit for centralized state management in medium-scale web applications. Familiar with setting up Redux stores, creating slices, and using RTK Query to simplify API data fetching and caching, resulting in cleaner and more maintainable client-side code.",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "/skills/tailwindcss.png",
    description: "Proficient with the utility-first approach of Tailwind CSS to build interfaces rapidly without writing excessive custom CSS. Skilled in creating complex layouts using Flexbox and Grid, implementing responsive designs across devices, and customizing Tailwind configuration to maintain design consistency.",
  },
  {
    name: "Ant Design",
    iconUrl: "/skills/antd.png",
    description: "Experienced in integrating Ant Design into projects to build professional enterprise-level user interfaces. Comfortable working with advanced components such as Tables, Forms, and Modals, which helps accelerate development while maintaining a reliable user experience.",
  },
  {
    name: "Framer Motion",
    iconUrl: "/skills/framermotion.png",
    description: "Able to implement smooth animations and transitions to enhance user experience. Familiar with key Framer Motion features such as initial, animate, and exit to create component entry animations and fluid page transitions.",
  },
  {
    name: "Material UI",
    iconUrl: "/skills/mui.png",
    description: "Experienced in building interfaces using Material UI components following Material Design principles. Capable of customizing themes to control colors, typography, and UI consistency across the entire application.",
  },
  {
    name: "Sentry",
    iconUrl: "/skills/sentry.png",
    description: "Experienced in integrating Sentry for real-time error monitoring on both client and server. Able to analyze error reports, review stack traces, and identify root causes efficiently, which helps streamline the debugging process.",
  },
  {
    name: "Git",
    iconUrl: "/skills/git.png",
    description: "Experienced with standard Git workflows including branching strategies, meaningful commits, and resolving conflicts during merge or rebase operations. Familiar with collaborative development through Pull Requests or Merge Requests to ensure code quality before deployment.",
  },
];

// Giữ nguyên variants của bạn
const containerVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      type: "spring",
      bounce: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const FloatingSkill = ({ skill, index, totalSkills, onClick, isSelected, orbitRadii, scale }: FloatingSkillProps) => {
  const keyframes = useMemo(() => {
    const ringIndex = index % 3;
    const direction = ringIndex % 2 === 0 ? 1 : -1;

    // SỬA TẠI ĐÂY: Sử dụng orbitRadii từ props thay vì hằng số global
    const baseR = orbitRadii[ringIndex];

    const skillsPerRing = Math.ceil(totalSkills / 3);
    const positionInRing = Math.floor(index / 3);
    const baseAngle = (positionInRing / skillsPerRing) * Math.PI * 2;

    const pointsX = [];
    const pointsY = [];
    for (let i = 0; i <= 12; i++) {
      const angleTravel = (i / 12) * Math.PI * 2 * direction;
      const r = baseR + (Math.random() * 6 - 3);
      pointsX.push(r * Math.cos(baseAngle + angleTravel));
      pointsY.push(r * Math.sin(baseAngle + angleTravel));
    }
    return { x: pointsX, y: pointsY, duration: [35, 45, 55][ringIndex] };

    // Thêm orbitRadii vào dependency để tính toán lại khi màn hình resize
  }, [index, totalSkills, orbitRadii]);

  return (
    <motion.div
      onClick={onClick}
      className={`absolute flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full border cursor-pointer shadow-xl p-2 z-20 transition-colors ${isSelected ? "border-fuchsia-500 ring-2 ring-fuchsia-500/50" : "border-zinc-700/50 hover:border-fuchsia-500"}`}
      style={{ left: "50%", top: "50%", margin: "-20px 0 0 -20px" }}
      animate={{
        x: keyframes.x,
        y: keyframes.y,
        rotate: isSelected ? 0 : [0, 8, -8, 4, 0],
        scale: isSelected ? scale : 1,
      }}
      transition={{
        x: { duration: keyframes.duration, ease: "linear", repeat: Infinity },
        y: { duration: keyframes.duration, ease: "linear", repeat: Infinity },
        scale: { duration: 0.3 },
      }}
      whileHover={{ scale: isSelected ? 1.6 : 1.3 }}
    >
      <Image src={skill.iconUrl} alt={skill.name} width={20} height={20} className="object-contain" />
    </motion.div>
  );
};

const SkillsOrbit = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [displayedName, setDisplayedName] = useState("");
  const [orbitRadii, setOrbitRadii] = useState<number[]>([125, 175, 225]);
  const [scale, setScale] = useState<number>(1.6);

  useEffect(() => {
    const updateRadii = () => {
      const width = window.innerWidth;
      // Chia nhỏ breakpoint để responsive mượt hơn
      if (width < 480) {
        setOrbitRadii([55, 85, 115]); // Mobile cực nhỏ
        setScale(1.2);
      } else if (width < 768) {
        setOrbitRadii([75, 110, 140]); // Mobile thường
        setScale(1.3);
      } else if (width < 1024) {
        setOrbitRadii([100, 140, 180]); // Tablet / Laptop nhỏ
        setScale(1.4);
      } else {
        setOrbitRadii([125, 175, 225]); // Desktop
        setScale(1.6);
      }
    };

    updateRadii();
    window.addEventListener("resize", updateRadii);
    return () => window.removeEventListener("resize", updateRadii);
  }, []);

  useEffect(() => {
    if (!selectedSkill) return;
    let iterations = 0;
    const target = selectedSkill.name;
    const interval = setInterval(() => {
      setDisplayedName(target.substring(0, Math.ceil(iterations)));
      if (iterations >= target.length) clearInterval(interval);
      iterations += 0.3;
    }, 50);
    return () => clearInterval(interval);
  }, [selectedSkill]);

  return (
    <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="w-full mx-auto text-slate-50 mb-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch font-mono">
      {/* CỘT TRÁI - GIỮ NGUYÊN CSS */}
      <motion.div style={{ backgroundImage: "url('/images/grid.png')", backgroundSize: "cover", backgroundPosition: "center" }} variants={itemVariants} className="relative h-[300px] md:h-[500px] rounded-lg sm:rounded-2xl md:rounded-3xl overflow-hidden border dark:border-zinc-800 bg-white dark:bg-[#1a1a20]">
        {orbitRadii.map((r, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-zinc-700/40"
            style={{
              width: r * 2,
              height: r * 2,
              marginLeft: -r,
              marginTop: -r,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 80 + i * 20, ease: "linear", repeat: Infinity }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-zinc-900/90 border-2 border-zinc-700 z-10" style={{ transform: "translate(-50%, -50%)" }}>
          <motion.div className="absolute inset-0 rounded-full border border-fuchsia-500/30" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
          <div className="flex flex-col items-center">
            <h1 className="text-xs sm:text-sm md:text-base font-extrabold text-white mb-1">
              <span className="text-fuchsia-400">&lt;</span>Skills<span className="text-fuchsia-400">/&gt;</span>
            </h1>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-zinc-400 uppercase tracking-widest">Core</p>
          </div>
        </div>

        {/* Truyền orbitRadii vào đây */}
        {skills.map((skill, index) => (
          <FloatingSkill scale={scale} key={skill.name} skill={skill} index={index} totalSkills={skills.length} onClick={() => setSelectedSkill(skill)} isSelected={selectedSkill?.name === skill.name} orbitRadii={orbitRadii} />
        ))}
      </motion.div>

      {/* CỘT PHẢI - GIỮ NGUYÊN CSS */}
      <motion.div style={{ backgroundImage: "url('/images/grid.png')", backgroundSize: "cover", backgroundPosition: "center" }} variants={itemVariants} className="rounded-lg sm:rounded-2xl md:rounded-3xl border dark:border-zinc-800 bg-white dark:bg-[#1a1a20] h-[300px] md:h-[500px] flex flex-col overflow-hidden">
        {!selectedSkill ? (
          <div className="sticky top-0 bg-white dark:bg-[#1a1a20] z-20 p-2 sm:p-4 md:p-6 border-b dark:border-b-zinc-700">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 text-left">Technical Skills</h2>
          </div>
        ) : (
          <div className="sticky top-0 bg-white dark:bg-[#1a1a20] z-20 p-2 sm:p-4 md:p-6 border-b dark:border-b-zinc-700">
            <motion.div variants={titleVariants} initial="hidden" animate="visible" className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl text-emerald-400 font-bold">
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0">
                <Image src={selectedSkill?.iconUrl} alt={selectedSkill?.name} fill className="object-contain" />
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl">
                Technical Skills: <span className="dark:text-white text-black">{displayedName}</span>
              </span>
            </motion.div>
          </div>
        )}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 md:p-8">
          {!selectedSkill ? (
            <p className="dark:text-zinc-300 text-black leading-relaxed text-xs sm:text-sm md:text-base break-words">
              I focus on building high-performance web applications within the React ecosystem. I am proficient in Next.js for server-side rendering and performance; Redux, RTK Query, and React Query for complex state management and API data flow; and Tailwind CSS, Ant Design, and Material UI for scalable interface design. My workflow integrates Framer Motion for fluid UI interactions and Sentry for proactive error monitoring and performance optimization. My goal is to build sustainable,
              user-friendly digital solutions that prioritize clean, maintainable code.
            </p>
          ) : (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dark:text-zinc-300 text-black text-xs sm:text-sm md:text-base leading-relaxed break-words">
              {selectedSkill?.description}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsOrbit;
