"use client";
import React, { useEffect, useState } from 'react'
import { Logo } from '@/components/icons';
import { useTheme } from 'next-themes';
import { Progress } from "@nextui-org/progress";
import { motion } from 'framer-motion';

interface ISplashScreenProps {
  callback: () => void
}

export const SplashScreen:React.FC<ISplashScreenProps> = ({callback}) => {
  const { theme, setTheme } = useTheme();
  const [prevTheme, setPrevTheme] = useState(theme? theme : "light")

  useEffect(()=>{
    //if(theme != "dark") setTheme("dark")
    setTimeout(()=>{
      //if(theme != "dark") setTheme(prevTheme);
      callback()
    }, 3000)
  })

  return (
    <motion.div 
      className='w-screen h-screen flex justify-center items-center flex-col gap-8'
      initial="hidden"
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      transition={{ duration: 0.9 }}
    >
        <Logo className='spalsh-screen-logo ml-12 md:ml-24 w-28 h-28 md:w-48 md:h-48 lg:w-80 lg:h-80'/>
        <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md w-48 md:w-96 lg:w-md"
        />
    </motion.div>
  )
}
