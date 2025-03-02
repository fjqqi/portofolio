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
        <div className="home  w-full justify-center flex min-h-fit lg:py-3  lg:px-60 flex-col lg:flex-row ">
          {/* Left Section */}
          <div className="left-home  text-primary mt-4  w-[400px]  lg:min-w-[700px] flex  flex-col  justify-center items-center lg:block  relative">
          
          {/* star desktop */}
          <div className="md:hidden  absolute right-8 top-12 -z-50">
              <Star size={'small'}/>
            </div>

            <div className="md:hidden absolute  right-12 bottom-4 -z-50">
              <Star size='small'/>
            </div>

            <div className="md:hidden absolute  left-4 -bottom-10 -z-50">
              <Star size='small'/>
            </div>


            

            {/* star */}

            <div className="md:block   hidden absolute -left-16 top-22 -z-50">
              <Star/>
            </div>

            <div className="md:block  hidden absolute -left- bottom-12 -z-50">
              <Star />
            </div>


            <div className="md:block hidden absolute right-24 top-56  -z-50">
              <Star />
            </div>

            <div className=" max-w-[85%] md:lg:max-w-full bg-b flex flex-col">
              <Hello />

              <TextJob />

              <TextDescription />
            </div>

            <div className="mt-10 hidden max-w-[85%]  md:flex">
              <SpotifyBox />

              <NowPlayingBox />
            </div>

            <motion.div
              initial={{ opacity: 0 }} // Start hidden and move down
              animate={{ opacity: 1 }} // Fade in and reach normal position
              transition={{ duration: 0.2, ease: "easeIn", delay: 6 }}
              className="hidden md:block lg:block max-w-[85%]"
            >
              <Button
                style={"outline"}
                className={
                  "lg:w-[600px] md:w-[350px] lg:flex justify-center rounded-2xl items-center md:mt-10 lg:mt-10  py-4"
                }
                text={"Know Me Better"}
              />
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="right-home  text-primary">
            <HeroBox />
          </div>
        </div>

        <div className="min-h-screen"></div>
      </div>
    </>
  );
}
