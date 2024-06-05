"use client";
import { AiOutlineAlignCenter } from "react-icons/ai"; 
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [toggle ,  setToggle] = useState<boolean>(false)
  
  return (
    <nav className=' py-4 flex justify-between capitalize open-sans-300 text-xl flex-col md:flex-row'>
        <div className="brand flex justify-between items-center px-2">
            <h1 className='text-white font-bold '>bytler<span className="text-orange-600">.com</span></h1>
            <AiOutlineAlignCenter 
            className=" md:hidden text-3xl text-white"
            onClick={() => setToggle((toggle)=>!toggle)}
            />
        </div>
        <div 
        className={`nav flex gap-4 text-white items-center flex-col p-4 md:flex-row overflow-hidden md:overflow-visible transition-all ${toggle ? " h-80" : "h-0"}`}>
            <Link href={"#"} className='p-4 w-full md:w-fit'>about</Link>
            <Link href={"#"} className='p-4 w-full md:w-fit'>services</Link>
            <Link href={"#"} className='p-4 w-full md:w-fit'>featured</Link>
            <Link href={"#"} className='w-full md:w-fit block py-2 px-4 rounded-full border border-white text-white'>contact</Link>
        </div>
        
    </nav>
  )
}

export default Header