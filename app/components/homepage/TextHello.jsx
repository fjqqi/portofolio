"use client";
import { motion } from "framer-motion";
import React from "react";

export const Hello = () => {
  return (
    <motion.p
      className="text-8xl"
      initial={{ opacity: 0, y: -5 }} // Start hidden and move down
      animate={{ opacity: 1, y: 0 }} // Fade in and reach normal position
      transition={{ duration: 0.2, ease: "easeIn" }} // Smooth transition
    >
      Hello. I'm <b>Fiqqi</b>
    </motion.p>
  );
};
