"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

export const Tag = ({ className, icon, text, link }) => {
  return (
    <Link href={link ? link : "/"}>
<motion.div
        // initial={{ y: 0 }}
        // animate={{ y: [0, -40, 0] }} // Floating effect
        // transition={{
        //   duration: 1,
        //   repeat: Infinity,
        //   repeatType: "reverse",
        //   ease: "easeInOut",
        // }}
        className={`${className ? className : "bg-purple-400"} font-normal w-fit px-8 py-2 inline-flex gap-x-4 rounded-md transition-transform absolute duration-300 ease-in-out transform hover:-translate-y-2`}
      >
        {icon}
        <p>{text}</p>
      </motion.div>
    </Link>
  );
};
