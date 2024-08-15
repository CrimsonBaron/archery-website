"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

import LoadingLogo from "./loadingLogo";

//        <Logo className="splash-screen-logo ml-12 md:ml-24 w-28 h-28 md:w-48 md:h-48 lg:w-80 lg:h-80" />

interface ISplashScreenProps {
  callback: () => void;
}

const SplashScreen: React.FC<ISplashScreenProps> =
  function SplashScreenComponent({ callback }) {
    useEffect(() => {
      setTimeout(() => {
        callback();
      }, 2000);
    });

    return (
      <motion.div className="w-screen h-screen flex justify-center items-center flex-col gap-8">
        <LoadingLogo />
      </motion.div>
    );
  };

export default SplashScreen;
