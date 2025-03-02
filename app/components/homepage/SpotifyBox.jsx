import { motion } from "framer-motion";
import React from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";

export const SpotifyBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0,  }} // Start hidden and move down
      animate={{ opacity: 1, }}
      transition={{ duration: 0.2, ease: "easeOut", delay: 2 }}
      className="lg:block hidden"
    >
      <motion.div
        initial={{ opacity: 1, x: 200 }} // Start hidden and move down
        animate={{ opacity: 1, x: 0 }} // Fade in and reach normal position
        transition={{ duration: 0.2, ease: "easeOut", delay: 4 }}
      >
        <div className="lg:min-h-20 w-fit p-4 gap-x-2 flex items-center rounded-[50px] bg-white">
          <FaSpotify className="lg:size-20 size-12" />
          <FaPlay className="lg:size-18 size-12" />
        </div>
      </motion.div>
    </motion.div>
  );
};
