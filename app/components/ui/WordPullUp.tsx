"use client";
import { motion, useInView } from "framer-motion";
import * as React from "react";
import { cn } from "../utils/cn";

export function WordsPullUp({
  text,
  className = "",
  baseDelay = 0, // Thêm prop baseDelay, mặc định là 0
  onClick,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: baseDelay + i * 0.1,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={cn(
            "text-xl text-center sm:text-4xl tracking-tighter md:text-6xl md:leading-[4rem]",
            "pr-1", // class to sperate words
            className,
          )}
          onClick={() => onClick(current)}
        >
          {current == "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
