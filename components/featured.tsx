import React from 'react'
import Image from "next/image";

const Featured = () => {
  return (
    <div className='p-1 sm:p-4 md:p-8 xl:p-16'>
        <h1 className='text-3xl text-white py-8'>Featured Project</h1>
        <div>
            <div className='flex flex-wrap md:flex-nowrap'>
              <div className=' w-full lg:w-1/2 h-[350px] bg-cover bg-center' style={{ backgroundImage: "url(/main-bg.jpg)" }}></div>
              <div className=' w-full lg:w-1/2 p-4 flex flex-col justify-start gap-4'>
                <h2 className=' text-orange-500 py-4 '>crypto app</h2>
                <p className='text-2xl lg:text-3xl xl:text-5xl text-white capitalize open-sans-300'>mobile app design concept of a crypto mobile app</p>
                <p className='text-white reddit-mono-300 text-sm sm:txt-xl'>our crypto app is a comprehensive platform for managing and tracking your crypto currency portfolio.With real time market data. you cna stay upto date on the latest price movement </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured