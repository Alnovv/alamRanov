"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
Image;
Link;
import html from "./assets/logo/htmllogo.svg";
import css from "./assets/logo/CSSlogo.svg";
import javascript from "./assets/logo/Java Script.svg";
import bootstrap from "./assets/logo/bootstraplogo.svg";
import tailwindcss from "./assets/logo/tailwind.svg";
import reactlog from "./assets/logo/react.svg";
import next from "./assets/logo/Next.svg";
import { motion } from "framer-motion";



const Section2 = () => {
  return (
    <section className="text-white flex  items-center justify-around ]">
      <div>
        <h1 className="text-5xl font-extrabold leading-normal max-2xl:text-4xl">
          {" "}
          Creating modern and <br /> interactive website
        </h1>
        <p className="text-base font-normal text-gray-600 mb-6 mt-6">
          making your web business’s more functional
        </p>
        <motion.div className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[20px] rounded-2xl hover:bg-[#FDB13E] transition-all duration-300 w-40"
        whileFocus={{ backgroundColor: "#FD9A3E" }}
        whileHover={{ backgroundColor: "#FDB13E" }}
        whileTap={{ backgroundColor: "#FFE8C5" }}>
          <Link
          href="/profile"
          
        >
          About me
        </Link>
        </motion.div>
        
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
      </div>
    </section>
  );
};

export default Section2;
