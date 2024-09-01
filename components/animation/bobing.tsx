"use client";

import React from "react";
import { motion } from "framer-motion";

import { AnimationProps } from "@/types";

const Bobing: React.FC<AnimationProps> = function HoverScaleComponent({
  children,
  ...props
}) {
  return (
    <motion.div
      animate={{
        y: ["0%", "-0.5%", "0%", "0.5%", "0%"], // Reduced movement
        scale: [1, 1.05, 1], // Reduced scaling
      }}
      transition={{
        duration: 4, // Shorter duration
        repeat: Infinity,
        ease: "easeOut", // Simpler easing
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Bobing;
