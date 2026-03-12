import { motion } from "framer-motion";
import React from "react";

interface AnimatedGroupProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({ 
  children, 
  delay = 0, 
  stagger = 0.1, 
  className 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedIconProps {
  children: React.ReactNode;
  href: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ children, href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};