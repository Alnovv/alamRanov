'use client'

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

import { MotionConfig } from "framer-motion";

const config = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function Home() {

  return (
    <>
    <MotionConfig {...config}>
      <Section1/>
      <Section2 />
      <Section3 />
      <Section4 />
      </MotionConfig>
    </>
  );
}
