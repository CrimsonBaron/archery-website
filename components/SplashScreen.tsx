"use client";

import React, { useEffect } from "react";
import { Progress } from "@nextui-org/progress";
import { motion } from "framer-motion";

import { Logo } from "@/components/icons";

interface ISplashScreenProps {
  callback: () => void;
}

const SplashScreen: React.FC<ISplashScreenProps> =
  function SplashScreenComponent({ callback }) {
    useEffect(() => {
      setTimeout(() => {
        callback();
      }, 3000);
    });

    return (
      <motion.div
        className="w-screen h-screen flex justify-center items-center flex-col gap-8"
        initial="hidden"
        transition={{ duration: 0.9 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        whileInView="visible"
      >
        <Logo className="spalsh-screen-logo ml-12 md:ml-24 w-28 h-28 md:w-48 md:h-48 lg:w-80 lg:h-80" />
        <Progress
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md w-48 md:w-96 lg:w-md"
          size="sm"
        />
      </motion.div>
    );
  };

export default SplashScreen;
