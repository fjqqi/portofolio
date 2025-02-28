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
import { SpotifyBox } from "./components/homepage/SpotifyBox";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      {/* <div className="absolute  left-[890px] top-40    z-50">
        <Star />
      </div> */}
      <div className="lg:min-w-screen overflow-hidden relative">
        <div className="home  w-full justify-center flex  lg:px-60 flex-col lg:flex-row">
          <div className="left-home text-primary mt-4 max-w-full min-w-full lg:min-w-[700px] flex  flex-col  justify-center items-center lg:block  relative">
            <div className="absolute -left-18 top-22 -z-50">
              <Star />
            </div>

            <div className="absolute right-32 top-58  -z-50">
              <Star />
            </div>

            <div className=" max-w-[85%] lg:max-w-full bg-b flex flex-col">
              <Hello />

              <TextJob />

              <TextDescription />
            </div>

            <div className="mt-10 hidden lg:flex">
              <SpotifyBox />

              <NowPlayingBox />
            </div>

            <motion.div
              initial={{ opacity: 0 }} // Start hidden and move down
              animate={{ opacity: 1 }} // Fade in and reach normal position
              transition={{ duration: 0.2, ease: "easeIn", delay: 6 }}
              className="hidden lg:block"
            >
              <Button
                style={"outline"}
                className={
                  "w-[600px] lg:flex justify-center rounded-2xl items-center mt-10  py-4"
                }
                text={"Know Me Better"}
              />
            </motion.div>
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
