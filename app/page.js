"use client";
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hello } from "./components/homepage/TextHello";
import { TextJob } from "./components/homepage/TextJob";
import { TextDescription } from "./components/homepage/TextDescription";
import { HeroBox } from "./components/homepage/HeroBox";
import { Star } from "./components/homepage/Star";
import { FaSpotify, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { NowPlayingBox } from "./components/homepage/NowPlayingBox";

export default function Home() {
  return (
    <>
      <div className="min-w-screen">
        <Navbar />

        <div className="lg:px-60 mt-40 home  w-full flex ">
          <div className="left-home text-primary mt-4 max-w-full min-w-[700px] relative">
            <div className="absolute -left-18 top-22 -z-50">
              <Star />
            </div>

            <div className="absolute right-10 -top-10  -z-50">
              <Star />
            </div>

            <div className="absolute right-32 top-58  -z-50">
              <Star />
            </div>

            <Hello />

            <TextJob />

            <TextDescription />

            <div className="mt-10 flex">
              <div className="min-h-14 w-fit p-4 gap-x-2 flex items-center rounded-[50px] bg-white">
                <FaSpotify className="size-20" />
                <FaPlay className="size-18" />
              </div>

              <NowPlayingBox/>

             
            </div>
          </div>

          <div className="right-home text-primary">
            <HeroBox />
          </div>
        </div>

        <div className="min-h-screen"></div>
      </div>
    </>
  );
}
