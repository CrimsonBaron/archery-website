"use client";

import React from "react";
import { motion } from "framer-motion";

import { AnimationProps } from "@/types";

const FadeIn: React.FC<AnimationProps> = function FadeInComponent({
  children,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      viewport={{ once: true }}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
