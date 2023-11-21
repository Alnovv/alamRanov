"use client";
import React from "react";
import WebShop from "../assets/Projects/projectsWebshop.png";
import DisneyClone from "../assets/Projects/projectsDisney.png";
import WeatherApp from "../assets/Projects/Weather-App.png";
import Todolist from "../assets/Projects/Todolist.png";
import SunnySide from "../assets/Projects/Sunnyside.png";
import Ellips from "../assets/Wallpaper/Ellipse 3.svg";
import Vector from "../assets/Wallpaper/Vector 1.svg";
import Vector2 from "../assets/Wallpaper/Vector 2.svg";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

import Profile from "../assets/Wallpaper/Page.png";

import Image from "next/image";
Image;

const Portfolio = () => {
  return (
    <>
      <section
        className={`flex flex-col justify-around items-center  text-white min-h-screen`}
      >
        <div>
          <motion.div className="absolute left-0">
            <Image src={Ellips} alt="" className="w-[50vw] -z-20" />
          </motion.div>
            <div className="absolute left-0 top-3/4 bg-black">
              <Image src={Ellips} alt="" className="w-[50vw] -z-20" />
            </div>
            <div className="absolute right-0 top-2/4 ">
              <Image src={Vector2} alt="" className="w-[80vw] -z-20" />
            </div>
          

          <div className="absolute right-0 top-0 ">
            <Image src={Vector} alt="" className="w-[100vw] -z-20" />
          </div>

          <div>
            <div className="z-50">
              <h1 className="text-8xl max-2xl:text-6xl font-extrabold ">
                Projects
              </h1>
            </div>
            <div>
              <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  loop: Infinity,
                }}
                className={`h-[8px] bg-[#FD9A3E] ${styles.animateprojects}`}
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  justify-center items-start gap-10 z-10 ">
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-2  p-5 mt-7 bg-black">
            <motion.div
              className=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={WebShop}
                alt=""
                className="w-[300px] h-auto rounded-xl cursor-pointer "
              />
            </motion.div>
            <div className="mr-[9px]">
              <h1 className="text-xl max-2xl:text-2xl font-extrabold">
                Web-Shop
              </h1>
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
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Explicabo neque laborum libero nisi molestias deserunt!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-black">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={DisneyClone}
                alt=""
                className="w-[300px] h-auto rounded-xl cursor-pointer "
              />
            </motion.div>

            <div>
              <h1 className="text-xl max-2xl:text-2xl font-extrabold">
                Disney-Clone
              </h1>
              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  ReactJS+ViteJS
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  TailwindCSS
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  TMDBAPI
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Explicabo neque laborum libero nisi molestias deserunt!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-black">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={Todolist}
                alt=""
                className="w-[300px] h-auto rounded-xl cursor-pointer "
              />
            </motion.div>

            <div>
              <h1 className="text-xl max-2xl:text-2xl font-extrabold">
                To-do List
              </h1>
              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  Javascript
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Explicabo neque laborum libero nisi molestias deserunt!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-black">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={WeatherApp}
                alt=""
                className="w-[300px] h-auto rounded-xl cursor-pointer "
              />
            </motion.div>
            <div>
              <h1 className="text-xl max-2xl:text-2xl font-extrabold">
                WeatherApp
              </h1>
              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  Javascript
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Explicabo neque laborum libero nisi molestias deserunt!
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-[2px] rounded-xl justify-center items-center gap-4 p-5 bg-black">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image
                src={SunnySide}
                alt=""
                className="w-[300px] h-auto rounded-xl cursor-pointer "
              />
            </motion.div>

            <div>
              <h1 className="text-xl max-2xl:text-2xl font-extrabold">
                Sunnyside
              </h1>
              <div className="flex gap-2 mt-1 ">
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  HTML
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  CSS
                </p>
                <p className=" text-xs font-extrabold leading-normal bg-[#FD9A3E] py-1 px-3 rounded-[5px] ">
                  Javascript
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Explicabo neque laborum libero nisi molestias deserunt!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-3/4 -z-30">
          <Image
            src={Profile}
            alt=""
            className={` lg:w-[100vw] bg-center bg-cover opacity-50  ${styles.backgroundImage} `}
          />
          <div className=" w-full h-full -z-10" style={{ backgroundImage: 'linear-gradient(to bottom, transparent 25%, black)' }} />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
