import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const Navlink = ({ text, isActive, link, className }) => {
  return (
    <div className="relative inline-block">
      {/* Sliding background when active */}
      {isActive && (
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full bg-white/80 rounded-full backdrop-blur-sm"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      )}

      <Link
        className={`relative z-10 ${className} text-sm md:text-lg text-primary h-full w-fit inline-flex md:py-2 md:px-6 px-4 py-1.5 items-center`}
        href={link ? link : "/"}
      >
        {text}
      </Link>
    </div>
  );
};
