import { BsFillSendFill } from "react-icons/bs"; 
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='text-center capitalize'>
            <h1 className="text-5xl md:text-6xl xl:text-8xl text-orange-500 py-4">get in touch</h1>
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-gray-700">let's work together</h2>
           
        </div>
        <form className="p-6">
           <div className="flex"> <input type="email" 
            className=" h-12 rounded-full border border-black bg-transparent w-full md:w-72 px-2 text-xl"
            placeholder="Enter your Email"
            />
            <button><BsFillSendFill className="text-orange-500 text-3xl mx-4"/></button></div>
        </form>
    </div>
  )
}

export default Contact