"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = ["Web Developer", "UI/UX Designer", "Student"];

export const TextJob = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
      className="text-6xl mt-4 font-bold text-[#2F584F]"
    >
      A *{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // Ensures animation restarts when text changes
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {jobs[index]}
        </motion.span>
      </AnimatePresence>
    </motion.p>
  );
};