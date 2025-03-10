'use client'
import { motion } from "framer-motion";
import React from "react";


export const TextDescription = () => {
  return (
    <motion.p className="lg:text-xl text min-w-[80%] lg:max-w-[80%] mt-5 lg:mt-9"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
    >
      I&apos;m passionate about crafting experiences that are engaging,
      accessible, clean and user-centric. btw I listen to music 24/7.
    </motion.p>
  );
};
