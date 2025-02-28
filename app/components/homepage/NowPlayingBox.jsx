import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

export const NowPlayingBox = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 3 }} // Start hidden and move down
    animate={{ opacity: 1, y: 0 }} // Fade in and reach normal position
    transition={{ duration: 0.5, ease: "easeOut", delay:2 }} 
    whileHover={{ y: -2,  }} 
    >
      <div className="min-h-14 min-w-[386px] max-w-[440px] p-4 gap-x-2  items-center rounded-xl bg-primary text-white hover:shadow-md">
        <div className="flex">
          <Image
            className="size-16 rounded-sm bg-white"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClU8K3B62gJm3r9BEmYC923O-ZM94Ue8FrA&s"
            }
            alt="cover"
            width={100}
            height={100}
          />
          <div className="ml-3 ">
            <p className="text-4xl">Supernatural</p>
            <p className="opacity-80">Newjeans - Oh My God</p>
          </div>
        </div>

        <motion.div className="h-[2px] w-full mt-3 rounded-full bg-white/40 relative overflow-hidden">
          <motion.div
            className="h-full bg-white absolute left-0 top-0"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 160,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>


      </div>
    </motion.div>
  );
};
