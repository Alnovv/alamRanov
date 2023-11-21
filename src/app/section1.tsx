import React from "react";
Image;
import Image from "next/image";
import github from "./assets/logo/github.svg";
import Linkedin from "./assets/logo/Linked.svg";
import Page from "./assets/Wallpaper/Page.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function section1() {
  return (
    <section
      className={`flex min-h-screen flex-col items-center justify-center p-24 text-white`}
    >
      <div className="-z-10">
        <Image
          src={Page}
          alt=""
          fill
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-col justify-center text-center z-10">
        <h1 className="text-[64px] max-2xl:text-5xl">
          <span className="text-xl text-[#FD9A3E]">HELLO, I`AM</span> RANOV
          <br />
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
      </div>
      <div className="flex justify-start items-center gap-5 mt-5">
        <motion.a
          whileFocus={{ backgroundColor: "#FD9A3E" }}
          whileHover={{ backgroundColor: "#FDB13E" }}
          whileTap={{ backgroundColor: "#FFE8C5" }}
          href="/"
          className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl hover:bg-[#FDB13E] transition-all duration-300 cursor-pointer"
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
    </section>
  );
}

export default section1;
