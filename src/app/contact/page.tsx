"use client";

import React from "react";
import scan from "../assets/logo/scan.svg";
import scanWa from "../assets/logo/scanWa.svg";
import wa from "../assets/logo/wa.svg";
import email from "../assets/logo/email.svg";
import Image from "next/image";
Image;
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles.module.css";
import page from '../assets/Wallpaper/profile.png'

const Contact = () => {
  const [showContent, setShowContent] = useState(false);

  const handleEmailClick = () => {
    setShowContent((prevShowContent) => !prevShowContent);
    setShowContentWA(false);
  };
  const [showContentWA, setShowContentWA] = useState(false);

  const handleWAClick = () => {
    setShowContent(false);
    setShowContentWA((prevShowContentWA) => !prevShowContentWA);
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
    <section className=" flex flex-col justify-center items-center text-white gap-20">
      <div className="flex flex-col justify-center items-start">
        <div>
          <h1 className="text-8xl max-2xl:text-7xl font-extrabold leading-normal mt-7">Contact Me</h1>
        <motion.div
              initial={{ x: "-100vw" }} 
              animate={{ x: 0 }} 
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                loop: Infinity,
              }} 
              className={`h-[8px] bg-[#FD9A3E] ${styles.animateabout}`}
              ></motion.div>
        </div>
        
        <p className=" text-2xl font-normal leading-normal">
          if you need work together
        </p>
      </div>
      <div className="flex justify-start items-center gap-10 h-[50vh]">
        <div className="flex flex-col justify-start items-start gap-3  ">
          <h1 className=" text-5xl font-extrabold leading-normal text-[#FD9A3E]">
            Let`s talk about your project
          </h1>
          <p className=" text-xl">
            You can contact me via email or WhatsApp, and you can scan the QR
            <br /> code or chat below.
          </p>
          <input
            type="text"
            placeholder="Name"
            className={`w-[349px] h-[40px] rounded-lg border-${
              isClicked ? "orange" : "white"
            } border-[2px] bg-[#1A1919] pl-3 hover:border-[#8D8D8D] transition duration-300 ease-in-out`}
            onClick={handleClick}
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-3 w-[349px] h-[40px] rounded-lg border-white border-[2px] bg-[#1A1919] pl-3  hover:border-[#8D8D8D] duration-300 ease-in-out"
          />
          <textarea
            className="mt-3 w-[349px] h-[137px] rounded-lg border-white border-[2px] bg-[#1A1919] pl-3 pt-14  hover:border-[#8D8D8D] duration-300 ease-in-out"
            placeholder="Message"
          />
        </div>
        <div className=" flex justify-start items-start gap-3">
          <div className="flex flex-col justify-evenly gap-5 text-black text-[25px] font-semibold">
            <div className="mt-14 flex">
              <motion.div
                className={`mr-5 ${styles.parent}`}
                onClick={handleEmailClick}
                data-isOpen={showContent}
                layout
                transition={{ type: "spring", stiffness: 350 }}
                initial={{ x: 1,opacity:1 }}
                animate={{ scale: showContent ? 1 : 1, x: showContent ? 10 : 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showContent ? 1 : 1 }}
                  className={`opacity-scale cursor-pointer ${
                    showContent ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image src={email} alt="" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: showContent ? 1 : 0,
                    x: showContent ? 0 : -100,
                  }}
                  style={{ display: showContent ? "block" : "none" }}
                >
                  <p className="">More insights</p>
                </motion.div>
              </motion.div>
              <motion.div
                className={`mr-5 ${styles.parent}`}
                onClick={handleWAClick}
                data-isOpen={showContentWA}
                layout
                initial={{ opacity: 1 }}
                animate={{ opacity: showContent ? 1 : 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showContentWA ? 1 : 1 }}
                  className={` flex justify-center items-center transition-opacity cursor-pointer ${
                    showContentWA ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image src={wa} alt="" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{
                    opacity: showContentWA ? 1 : 0,
                    x: showContentWA ? 0 : -1,
                  }}
                  style={{ display: showContentWA ? "block" : "none" }}
                >
                  <p className="">More insight</p>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex justify-center items-center">
              <motion.div
                className={` ${showContent ? "opacity-100" : "opacity-0"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                style={{ display: showContent ? "block" : "none" }}
              >
                <Image src={scan} alt="" />
              </motion.div>
              <motion.div
                className={`${showContentWA ? "opacity-100" : "opacity-0"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: showContentWA ? 1 : 0 }}
              >
                <Image src={scanWa} alt="" className="ml-3" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
        <Image src={page} alt="" className="w-full h-full absolute top-32 -z-20"/>
        <div className="absolute top-20 w-full h-full -z-10" style={{ backgroundImage: 'linear-gradient(to top, transparent 25%, black)' }} />
    </section>
   
    </div>
    
  );
};

export default Contact;
