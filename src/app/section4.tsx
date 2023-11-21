import Link from 'next/link'
import React from 'react'
Link
import { motion } from 'framer-motion'

const section4 = () => {
  return (
    <section className='flex justify-center items-center h-[50vh] text-white'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center text-4xl max-2xl:text-2xl'>
                <h1 className='mr-1'>INTERESTED </h1>
                <div>
                    <div className='mt-[8px]'>
                    <h1>IN WORKING TOGETHER?</h1>
                    </div>
                    <motion.div
                    initial={{ x: "-100vw" }} 
                    animate={{ x: 0 }} 
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      loop: Infinity,
                    }} 
                     className='h-[8px] bg-[#FD9A3E] animate-marquee'></motion.div>
                </div>
            </div>
            <motion.div className="text-2xl font-extrabold leading-normal bg-[#FD9A3E] py-[15px] px-[30px] rounded-2xl mt-9  hover:bg-[#FDB13E] transition-all duration-300"
            whileFocus={{ backgroundColor: "#FD9A3E" }}
            whileHover={{ backgroundColor: "#FDB13E" }}
            whileTap={{ backgroundColor: "#FFE8C5" }}>
            <Link href='/contact' >Get In Touch</Link>
            </motion.div>
            
        </div>
    </section>
  )
}

export default section4