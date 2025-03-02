"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateGradient = async () => {
      while (true) {
        await controls.start({
          backgroundImage: [
            `radial-gradient(at 95% 90%, hsla(67,100%,85%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(0,0%,100%,1) 0px, transparent 50%)`,

            `radial-gradient(at 95% 10%, hsla(67,100%,85%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(0,0%,100%,1) 0px, transparent 50%)`,

            `radial-gradient(at 5% 10%, hsla(67,100%,85%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(0,0%,100%,1) 0px, transparent 50%)`,

            `radial-gradient(at 5% 90%, hsla(67,100%,85%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(0,0%,100%,1) 0px, transparent 50%)`,

            `radial-gradient(at 95% 90%, hsla(67,100%,85%,1) 0px, transparent 50%),
             radial-gradient(at 0% 0%, hsla(0,0%,100%,1) 0px, transparent 50%)`,
          ],
          transition: { duration: 24, ease: "easeInOut", repeat: Infinity },
        });
      }
    };

    animateGradient();
  }, [controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full -z-50"
      animate={controls}
      style={{
        backgroundColor: "HSLA(33,38%,87%,1)"
      }}
    />
  );
};
