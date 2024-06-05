import { FaDotCircle } from "react-icons/fa"; 
import { CgWebsite } from "react-icons/cg"; 
import { IoLogoWhatsapp } from "react-icons/io"; 
import { BsWhatsapp } from "react-icons/bs"; 
import Header from "@/components/header"
import Hero from '@/components/hero';
import Featured from '@/components/featured';
import Other from '@/components/other';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className=" ">
      <div className="flex min-h-screen flex-col bg-gray-800">
      <div className="px-2"><Header/></div>
        <div className=" flex-auto flex items-center px-11 py-4">
          <Hero />
        </div>
        <div className=" h-fit p-4  bg-gray-700 text-white text-md md:text-xl  lg:text-2xl capitalize flex-wrap flex justify-evenly items-center reddit-mono-300">
          <div className="w-full">
            <h1 className="text-orange-500 px-8 py-2  flex gap-2 items-center">services <CgWebsite /></h1>
          </div>
          <div className="w-1/2 p-4 md:w-fit"><h1 className="flex gap-2 items-center"><FaDotCircle /> app development </h1></div>
          <div className="w-1/2 p-4 md:w-fit"><h1 className="flex gap-2 items-center"><FaDotCircle /> web development</h1></div>
          <div className="w-1/2 p-4 md:w-fit"><h1 className="flex gap-2 items-center"><FaDotCircle /> prototyping</h1></div>
          <div className="w-1/2 p-4 md:w-fit"><h1 className="flex gap-2 items-center"><FaDotCircle /> database</h1></div>
        </div>
      </div>
      <div className=" bg-gray-900 py-4 px-8">
        <Featured />
      </div>
     
      <div className=" bg-gray-200 py-16">
        <Contact />
      </div>
      <div className=" bg-gray-200 flex px-8 py-4 justify-between">
        <h1 className=" hidden sm:block">bytler<span className="text-orange-500">.com</span></h1>
        <h1 className="flex"> contact +2348147616425 <IoLogoWhatsapp className=" text-orange-500 text-2xl mx-4"/></h1>
      </div>
    </main>
  );
}
