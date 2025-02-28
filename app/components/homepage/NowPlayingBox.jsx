import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

export const NowPlayingBox = () => {
  return (
<motion.div
  initial={{ opacity: 0, y: 3 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
  className="relative"
>
  {/* Now Playing Text (Temporary) */}
  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10"
    initial={{ opacity: 1, y: 3 }}
    animate={{ opacity: 0, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
  >
    <p className="text-2xl">Now Playing</p>
  </motion.div>

  {/* Main content with hover effect */}
  <motion.div
    className="min-h-14 min-w-[386px] max-w-[440px] relative p-4 gap-x-2 items-center rounded-xl bg-primary duration-200 text-white hover:shadow-md"
    whileHover={{ y: -2 }} // ✅ Hover now applies instantly!
  >
    <motion.div
      className="content"
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 3 }}
    >
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
        <div className="ml-3">
          <p className="text-4xl">Supernatural</p>
          <p className="opacity-80">Newjeans - Oh My God</p>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div className="h-[2px] w-full mt-3 rounded-full bg-white/40 relative overflow-hidden">
        <motion.div
          className="h-full bg-white absolute left-0 top-0"
          initial={{ width: "10%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 160,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>

  );
};
