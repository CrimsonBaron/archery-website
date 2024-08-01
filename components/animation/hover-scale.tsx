"use client";

import React from "react";
import { motion } from "framer-motion";

import { AnimationProps } from "@/types";

const HoverScale: React.FC<AnimationProps> = function HoverScaleComponent({
  children,
  ...props
}) {
  return (
    <motion.div whileHover={{ scale: 0.95 }} {...props}>
      {children}
    </motion.div>
  );
};

export default HoverScale;
