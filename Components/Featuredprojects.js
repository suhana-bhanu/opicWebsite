import { motion } from "framer-motion";
import React from "react";

function Featuredprojects() {
  return (
    <div className="w-full h-full bg-zinc-100 overflow-hidden">
      <div className="textstructure text-dark px-10 py-15 border-b-2 border-zinc-400">
        <h1 className="text-5xl font-[NeueMontreal-Regular.ttf]">
          Featured Projects
        </h1>
      </div>
      <div className="cards-container-overlay px-10">
        <div className="cards-container  flex gap-10 py-15 w-full">
          <div className="w-1/2 h-[40vw]  rounded-xl ">
            <div className="relative card1 w-full h-[40vw] rounded-xl ">
              {/* <h1 className="absolute leading-none whitespace-nowrap tracking-tight   text-6xl left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"SALIENCE LABS".split("").map((item, index) => (
                  <motion.span className="inline-block">{item}</motion.span>
                ))}
              </h1> */}

              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              />
            </div>
          </div>
          <div className="w-1/2 h-[40vw]  rounded-xl ">
            <div className="relative card1 w-full h-[40vw] rounded-xl">
              {/* <h1 className="absolute whitespace-nowrap uppercase leading-none tracking-tight   text-6xl right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"Cardboard Spaceship".split("").map((item, index) => (
                  <motion.span className="inline">{item}</motion.span>
                ))}
              </h1> */}
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container-overlay px-10">
        <div className="cards-container  flex gap-10 py-15 w-full">
          <div className="w-1/2 h-[40vw]  rounded-xl ">
            <div className="relative card1 w-full h-[40vw] rounded-xl ">
              {/* <h1 className="absolute leading-none whitespace-nowrap tracking-tight   text-6xl left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"SALIENCE LABS".split("").map((item, index) => (
                  <motion.span className="inline-block">{item}</motion.span>
                ))}
              </h1> */}

              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              />
            </div>
          </div>
          <div className="w-1/2 h-[40vw]  rounded-xl ">
            <div className="relative card1 w-full h-[40vw] rounded-xl">
              {/* <h1 className="absolute whitespace-nowrap uppercase leading-none tracking-tight   text-6xl right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]">
                {"Cardboard Spaceship".split("").map((item, index) => (
                  <motion.span className="inline">{item}</motion.span>
                ))}
              </h1> */}
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredprojects;
