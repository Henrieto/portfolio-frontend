import React from 'react'
import Image from "next/image";

const Featured = () => {
  return (
    <div className='p-1 sm:p-4 md:p-8 xl:p-16' id='featured'>
        <h1 className='text-3xl text-white py-8'>Featured Project</h1>
        <div>
            <div className='flex flex-wrap md:flex-nowrap'>
              <div className="p-2 w-full lg:w-1/2 h-[350px]"><div className='rounded-lg w-full h-full bg-cover bg-center' style={{ backgroundImage: "url(/main-bg.jpg)" }}></div></div>
              <div className=' w-full lg:w-1/2 p-2 flex flex-col justify-start gap-4'>
                <h2 className=' text-orange-500 py-4 text-xl'>Ecommece app</h2>
                <p className='text-2xl lg:text-3xl xl:text-5xl text-white capitalize open-sans-300'>mobile app design concept of an ecommerce platform</p>
                <p className='text-orange-500 reddit-mono-300 text-xl'>our ecommerce app is an innovative ecommerce platform that aims to simplify online shopping for customers while providing a seamless experience for sellers.our mission is to craft innovative, user-friendly, and scalable digital solutions that drive business success and exceed our clients' expectations. </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Featured