import React from "react";
import instagramSosmed from "../assets/logo/instagramSosmed.svg";
import linkediSosmed from "../assets/logo/linkedin.svg";
import facebookSosmed from "../assets/logo/facebookSosmed.svg";
import Image from "next/image";
Image;
import styles from "./styles.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const SosialMedia = () => {
  const [effect, setEffect] = useState(false);
  const [effectIns, setEffectIns] = useState(false);
  const [effectFace, setEffectFace] = useState(false);

  return (
    <section className="min-h-[50vh] flex flex-col justify-center items-center pt-10 text-white max-2xl:pt-14">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold leading-normal max-2xl:text-3xl">
          FIND ME ON SOCIAL MEDIA
        </h1>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            loop: Infinity,
          }}
          className={`h-[8px] bg-[#FD9A3E] ${styles.animatesosmed}`}
        ></motion.div>
      </div>
      <div className="flex flex-col justify-evenly items-center   ">
        <div
          className={`flex justify-around items-center py-[30px] px-[60px] rounded-[25px] gap-[101px] ${styles.gradientSosmed}`}
        >
          <div>
            <a href="/">
              <Image
                src={linkediSosmed}
                alt=""
                className={`${
                  effect && "animate-wiggle"
                } hover:w-[66px] transition-all duration-300`}
                onClick={() => {
                  setEffect(true);
                }}
              />
            </a>
          </div>
          <div>
            <a href="/">
              <Image
                src={instagramSosmed}
                alt=""
                className={`${
                  effectIns && "animate-wiggle"
                } hover:w-[66px] transition-all duration-300`}
                onClick={() => {
                  setEffectIns(true);
                }}
              />
            </a>
          </div>
          <div>
            <a href="/">
              <Image
                src={facebookSosmed}
                alt=""
                className={`${
                  effectFace && "animate-wiggle"
                } hover:w-[66px] transition-all duration-300`}
                onClick={() => {
                  setEffectFace(true);
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SosialMedia;
