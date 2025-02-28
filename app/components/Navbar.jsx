'use client'
import React, { useEffect, useState } from "react";
import { Navlink } from "./navbar/Navlink";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-center text-primary md:justify-between md:px-28 mt-8">
        <div className={`nav-start md:block hidden duration-200 ${isScrolled ? "invisible opacity-0" : "block"}`}>
          <div className="logo font-bold text-3xl text-primary  ">Fiqqi</div>
        </div>
        <div className={`${isScrolled && ' bg-gray-400/20 backdrop-blur-2xl rounded-full'} nav-center  bg p-2 duration-300`}>
          <Navlink text="Home" isActive={true} isHome={true} />
          <Navlink text="About" link="about" />
          <Navlink text="Projects" />
          <Navlink text="Contact" className="md:hidden" />
        </div>

        <div className={`nav-end md:block hidden duration-200 ${isScrolled ? "invisible opacity-0" : "block"}`}>
          <button className="inline-flex py-2 px-6 items-center border-1 hover:text-white hover:bg-primary  cursor-pointer duration-300 border-primary rounded-full">
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
};
