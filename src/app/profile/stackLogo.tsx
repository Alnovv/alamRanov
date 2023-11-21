import HTML from "../assets/logo/HTML.svg";
import CSSlogo from "../assets/logo/Frame 50.svg";
import javaScript from "../assets/logo/javaScript.svg";
import styles from "./styles.module.css";
import Bootstrap from "../assets/logo/Bootstrap.svg";
import Reactlogo from "../assets/logo/Reactlogo.svg";
import TailwindCSS from "../assets/logo/TailwindCSS.svg";
import next from "../assets/logo/Frame 41.svg";


import Image from "next/image";
Image;



const stackLogo = () => {
  return (
    <section>
      <div >
      </div>
      
        <div className="flex justify-center items-center gap-[38px] py-3 px-4 text-white">
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out ">
              <Image
                src={HTML}
                alt={``}
                className="hover:w-[70px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className=" text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
              <Image
                src={CSSlogo}
                alt={``}
                className="hover:w-[65px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-4 transition-all duration-300 ease-in-out ">
              <Image
                src={javaScript}
                alt={``}
                className="hover:w-[90px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className=" text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-4 transition-all duration-300 ease-in-out ">
              <Image
                src={Bootstrap}
                alt={``}
                className="hover:w-[90px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-5 transition-all duration-300 ease-in-out ">
              <Image
                src={TailwindCSS}
                alt={``}
                className="hover:w-[100px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-3 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
              <Image
                src={Reactlogo}
                alt={``}
                className="hover:w-[70px] transition-all duration-300"
              />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
          <div className={`border-[2px] border-[#909090] gap-4 flex flex-col justify-center items-center text-center px-[15px] py-[10px] rounded-xl ${styles.gradient} `}>
            <div className="flex flex-col justify-center items-center hover:mb-3 transition-all duration-300 ease-in-out">
              <Image
                src={next}
                alt={``}
                className="hover:w-[90px] transition-all duration-300 "
              />
            </div>
            <div>
                <h4 className="text-[14px] font-semibold">
                Intermediate
                </h4>
              </div>
          </div>
        </div>
      
    </section>
  );
};

export default stackLogo;
