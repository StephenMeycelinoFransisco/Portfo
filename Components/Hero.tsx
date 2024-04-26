import React from "react";
import Particle from "./Particles";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[6vh] bg-cover bg-center ">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            HI, I&apos;m <span className="text-blue-300">Stephen</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-[#ffffff92]">
            Graduated from Dinamika Bangsa University. Major in Informatics
            Engineering with GPA 3.85. A person that is knowledge curious,
            agile, adaptability, and also eager to learn new things and up to
            any challenges. Equally good in individual and team work.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button>
            <button className="flex items-center space-x-2">
              <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-blue-400 transition-all duration-200 text-[#55e6a5] " />
              <p className="text-[20px] font-semibold text-white">
                Watch the Video
              </p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/profile.jpg"
            alt="User"
            layout="fill"
            className="object-cover rounded-full object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
