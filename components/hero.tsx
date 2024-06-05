import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' text-white open-sans-300 flex flex-col'>
        <h1 className="text-orange-500 text-4xl font-bold py-4 md:text-6xl lg:text-7xl xl:text-8xl">Hi , I'm Henry</h1>
        <p className='text-2xl py-2 md:text-3xl lg:text-4xl xl:text-5xl'>I help startsups design products that work</p>
        <p className='text-sm md:text-xl xl:text-2xl py-2 reddit-mono-300 capitalize text-gray-300 md:xl lg:2xl'> i have 20 years or experience in designing high quality <br/> digital products that you client will love and let your business thrive</p>
        <Link href={"#"} className='my-4 py-2 lg:py-3 px-6 lg:px-8 rounded-md text-white bg-orange-500 w-fit reddit-mono-300 text-md md:xl lg:text-2xl capitalize'>let's talk</Link>
    </div>
  )
}

export default Hero