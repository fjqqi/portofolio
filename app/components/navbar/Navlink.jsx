import Link from 'next/link'
import React from 'react'

export const Navlink = ({text, isActive, isHome, link, className}) => {
  return (
    <Link className={` ${className} ${isActive && "bg-white/50 rounded-full  backdrop-blur-sm  bg-clip-padding backdrop-filter " } text-sm md:text-lg text-primary h-full w-fit inline-flex md:py-2 md:px-6 px-4 py-1.5 items-center `} href={link ? link : '/' }>
    {text} 
    {isHome && <>
      <div className='h-fit w-full  border-gray-300 py-[1px] hidden md:block  md:py-[2px] ml-2 border-2 rounded-md text-xs md:text-sm  px-2 '>/</div>
    </>}
  </Link>
  )
}
