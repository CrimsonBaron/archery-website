"use client";

import React from "react";
import { motion } from "framer-motion"
import { AnimationProps } from "@/types";



const FadeIn : React.FC<AnimationProps> = ({children, ...props}) => {
   return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1},
          hidden: { opacity: 0}
        }}
        {...props}
    >
        {children}
    </motion.div>
   )
}

export default FadeIn