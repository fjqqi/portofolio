"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Tag } from "./Tag";

export const HeroBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="herobox bg-primary w-fit rounded-[64px] p-6"
      onHoverStart={() => setIsHovered(true)} // When hovering
      onHoverEnd={() => setIsHovered(false)} // When leavin
      initial={{ x:70, opacity:0 }}
      animate={{ x: 0, opacity: 1 }} // Target state
      transition={{ duration: 0.5, ease: "easeOut" , delay:1}} //
    >
      <div className="h-[486px] w-fit p-5 rounded-[64px] relative justify-center">
        <motion.div
          className="frame"
          animate={{ y: isHovered ? -10 : 0 ,x: isHovered ? -3 : 0, scale: isHovered ? 1.02 : 1  }} // Scale up when hovered
          transition={{ duration: 0.4, ease: "easeOut" }} // Smooth animation
        >
          <Image
            src="https://awsimages.detik.net.id/community/media/visual/2019/10/10/bb1bf3b6-6460-46dd-9de4-f7baea9c0afc_34.jpeg?w=1200"
            className=""
            width={500}
            height={500}
            alt="@fjqqi"
          />
        </motion.div>

        <div className="text-black bottom-12 left-0 right-0 min-w-full h-20 absolute px-4">
          <Tag
            text={"Fiqqi Basri"}
            link={"https://www.facebook.com/fjqqi/"}
            icon={<FaFacebook className="size-6" />}
            className="bg-blueTag right-6 rotate-[5deg]"
          />
          <Tag
            text={"Fjqqi"}
            icon={<FaGithub className="size-6 " />}
            className={`bg-purpleTag right-16 rotate-[8deg] top-16`}
          />
          <Tag
            text={"@fjqqi"}
            icon={<FaInstagram className="size-6" />}
            className={`left-8 bg-orangeTag top-16 rotate-[-10deg]`}
          />
        </div>
      </div>
    </motion.div>
  );
};
