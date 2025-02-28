import { motion } from "framer-motion";
import React from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";

export const SpotifyBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0,  }} // Start hidden and move down
      animate={{ opacity: 1, }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 1.5 }}
    >
      <motion.div
        initial={{ opacity: 1, x: 200 }} // Start hidden and move down
        animate={{ opacity: 1, x: 0 }} // Fade in and reach normal position
        transition={{ duration: 0.2, ease: "easeOut", delay: 4 }}
      >
        <div className="min-h-14 w-fit p-4 gap-x-2 flex items-center rounded-[50px] bg-white">
          <FaSpotify className="size-20" />
          <FaPlay className="size-18" />
        </div>
      </motion.div>
    </motion.div>
  );
};
