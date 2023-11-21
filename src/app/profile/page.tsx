"use client";

import Image from "next/image";
import React from "react";
Image;
import { useState } from "react";
import github from "../assets/logo/github.svg";
import Linkedin from "../assets/logo/Linked.svg";
import ranov from "../assets/images/ranov.png";
import TechStack from "./techStack";
import styles from "./styles.module.css";
import SosialMedia from "./sosialMedia";
import wall from '../assets/Wallpaper/Ellipse.svg'
import Vec from '../assets/Wallpaper/Vector.svg'
import Page from "../assets/Wallpaper/profile.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Profile = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-screen text-white z-10">
        <div className="flex  items-center justify-center">
          <div className=" container absolute left-[480px] top-64 max-2xl:left-48 max-2xl:top-52 max">
            <Image src={wall} alt="" className="w-[50vw] -z-10" />
          </div>
          <div className=" absolute right-0 top-0 max-2xl:right-0 max-2xl:top-0 ">
            <Image src={Vec} alt="" className="w-[80vw] max-2xl:w-[90vw] -z-10" />
          </div>
          <div >
            <Image src={ranov} alt="" className="relative  w-[45vw] " />
          </div>
          <div className="z-20">
            <div className="flex flex-col justify-center ml-14 max-2xl:ml-0">
              <h1 className="text-8xl max-2xl:text-6xl font-extrabold">About</h1>
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
            <div className="relative z-20 mt-10">
              <h2 className=" text-4xl font-extrabold text-[#FFA666] mb-1 max-2xl:text-3xl">
                ALAM RANOV GEBY PRIMA
              </h2>
              <h1 className="text-4xl font-semibold max-2xl:text-3xl">
              <span>
            <Typewriter
              options={{
                strings: ["FRONT-END DEVELOPER"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
              </h1>
              <p className="text-base font-light text-[#BFBFBF] mt-2">
                I am someone who is currently learning and practicing in the
                field <br />
                of frontend development. While I don`t have formal job
                experience <br />
                yet, I have invested in understanding the fundamentals of web{" "}
                <br />
                technologies and relevant programming languages. <br />
              </p>
            </div>
            <div className="flex justify-start items-center gap-5 mt-5">
                <motion.a
                whileFocus={{backgroundColor: '#FD9A3E'}}
                whileHover={{backgroundColor: '#FDB13E'}}
                whileTap={{backgroundColor: '#FFE8C5'}}
                href="/"
                className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[20px] 
                rounded-2xl hover:bg-[#FDB13E] transition-all duration-300 cursor-pointer"
              >
                DOWNLOAD CV
              </motion.a>
              <div className="flex gap-5 justify-center items-center">
                <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="/">
                  <Image
                    src={github}
                    alt=""
                    className={` text-white w-[47px] rounded-full`}
                    
                  />
                </a>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a href="/">
                  <Image
                    src={Linkedin}
                    alt=""
                    className={`bg-white border-[5px] w-[47px] rounded-full`}
                  />
                </a>
                </motion.div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TechStack />

      <SosialMedia />
      <div
        style={{
          background: `linear-gradient(180deg, rgba(1, 5, 17, 0.08) 9.6%, #010511 95.29%), url(${Page.src}) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="absolute top-[120%] bg-no-repeat bg-cover bg-center -z-20 "
      ></div>
    </>
  );
};

export default Profile;
