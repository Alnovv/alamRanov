'use client'
import React, {useState} from "react";
import Image from "next/image";
import DisneyClone from "./assets/images/DisneyClone.png";
import WebShop from './assets/images/WebShop.png'
import sunnyside from './assets/images/Sunnyside Agency.png'

import Link from "next/link";
Link
import { motion } from "framer-motion";

const Section3 = () => {
  const [isHovered, setIsHovered] = useState(false);
  

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const shadowStyle = {
    filter: isHovered ? 'drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))' : 'none',
    transition: 'filter 0.3s ease-in-out',
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
  const shadowStyle3 = {
    filter: isHovered3 ? 'drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))' : 'none',
    transition: 'filter 0.3s ease-in-out',
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  const shadowStyle2 = {
    filter: isHovered2 ? 'drop-shadow(0px 4px 4px rgba(252, 159, 50, 1.5))' : 'none',
    transition: 'filter 0.3s ease-in-out',
  };
  return (
    <section className=" flex flex-col justify-center items-center text-white">
        <div className="h-[10vh]">
            <h1 className="text-4xl leading-normal font-semibold">
        <span className="text-[#FD9A3E]">Lasted</span> Projects
      </h1>
        </div>
      <div className="flex gap-5">
      <div className="bg-black border-[2px] rounded-[20px]  p-5 max-2xl:p-3  " 
      style={shadowStyle}
      onMouseOver={handleHover}
      onMouseOut={handleMouseOut}>
            <div className="px-5 py-3 ">
          <div className="gap-4">
            <a href="https://ecommerce-shop-khaki-nine.vercel.app"
             
            ><motion.div
            whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
              src={WebShop}
              alt=""
              className="w-[500px] max-2xl:w-[400px] h-auto rounded-xl cursor-pointer"
            />
            </motion.div>
              
            </a>
            <h1 className="text-xl mt-4 font-extrabold max-2xl:text-2xl ">Web-Shop</h1>
          </div>
          <div className="flex gap-2 mt-1 ">
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              ReactJS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              TailwindCSS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              FakeStoreAPI
            </p>
          </div>
            <div className="mt-1">
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit perferendis, nam esse alias blanditiis dolore?</p>
            </div>
        </div>
        </div>
        <div className="bg-black border-[2px] rounded-[20px]  p-5 max-2xl:p-3"
              style={shadowStyle2}
              onMouseOver={handleHover2}
              onMouseOut={handleMouseOut2}>
            <div className="px-5 py-3 ">
          <div className="gap-4 ">
            <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Image
              src={DisneyClone}
              alt=""
              className="w-[500px] max-2xl:w-[400px] h-auto rounded-xl cursor-pointer"
            />
            </motion.div>
            
            <h1 className="text-xl mt-4 font-extrabold max-2xl:text-2xl">Disney Clone</h1>
          </div>
          <div className="flex gap-2 mt-1 ">
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              Vite+ReactJS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              TailwindCSS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              TMDB_API
            </p>
          </div>
            <div className="mt-1">
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit perferendis, nam esse alias blanditiis dolore?</p>
            </div>
        </div>
        
        </div>
        <div className="bg-black border-[2px] rounded-[20px]  p-5 max-2xl:p-3"
              style={shadowStyle2}
              onMouseOver={handleHover2}
              onMouseOut={handleMouseOut2}>
            <div className="px-5 py-3 ">
          <div className="gap-4 ">
            <motion.div
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Image
              src={sunnyside}
              alt=""
              className="w-[430px] max-2xl:w-[400px] h-auto rounded-xl cursor-pointer"
            />
            </motion.div>
            
            <h1 className="text-xl mt-4 font-extrabold max-2xl:text-2xl">Disney Clone</h1>
          </div>
          <div className="flex gap-2 mt-1 ">
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              Vite+ReactJS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              TailwindCSS
            </p>
            <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
              TMDB_API
            </p>
          </div>
            <div className="mt-1">
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit perferendis, nam esse alias blanditiis dolore?</p>
            </div>
        </div>
        
        </div>
      </div>
      <motion.div className="text-2xl font-extrabold mt-9 leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl  hover:bg-[#FDB13E] transition-all duration-300"
      whileFocus={{ backgroundColor: "#FD9A3E" }}
      whileHover={{ backgroundColor: "#FDB13E" }}
      whileTap={{ backgroundColor: "#FFE8C5" }}>
            <Link href='/portfolio' >View All</Link>
        </motion.div>
      
    </section>
  );
};

export default Section3;
