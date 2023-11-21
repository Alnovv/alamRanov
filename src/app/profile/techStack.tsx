"use client";
import StackLogo from "./stackLogo";


import Image from "next/image";
Image;

function TechStack() {
  return (
    <section className="h-[20vh] mt-20">
      <div className="flex justify-evenly ">
        <h1 className="text-5xl font-extrabold leading-normal text-white mb-5 max-2xl:text-3xl">TECH STACK</h1>
        <p className="text-[#010611]">wkwkwk</p>
      </div>
      <StackLogo />
    </section>
  );
}

export default TechStack;
