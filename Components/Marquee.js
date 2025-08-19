import React from "react";
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" marque w-full  py-32  bg-[#004D43] text-white overflow-hidden">
      <div className="text-structure border-t-2 border-b-2 border-zinc-300 flex  items-center justify-center -mb-20">
        <motion.div
        className="flex"
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration : 5, ease: "linear" }}
        >
          <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap font-[FoundersGrotesk-Semibold.ttf] pr-20">
            WE ARE OCHI
          </h1>
          <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap  font-[FoundersGrotesk-Semibold.ttf] pr-20">
            WE ARE OCHI
          </h1>
          <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap  font-[FoundersGrotesk-Semibold.ttf] pr-20">
            WE ARE OCHI
          </h1>
          {/* <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap  font-[FoundersGrotesk-Semibold.ttf]">
            WE ARE OCHI
          </h1> */}
          {/* <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap  font-[FoundersGrotesk-Semibold.ttf]">
            WE ARE OCHI
          </h1>
          <h1 className="text-[18vw] font-semibold leading-none whitespace-nowrap  font-[FoundersGrotesk-Semibold.ttf]">
            WE ARE OCHI
          </h1> */}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
