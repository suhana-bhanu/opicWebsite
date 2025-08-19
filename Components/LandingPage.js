"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  const [showBg, setShowBg] = useState(false);
  const buttonAnimation = useRef(null);
  const arrowAnimation = useRef(null);

  useEffect(() => {
    const button = buttonAnimation.current;
    const arrow = arrowAnimation.current;

    // Button hover animation
    button.addEventListener("mouseenter", () => {
      gsap.to(button, { backgroundColor: "black", color: "white", duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, { backgroundColor: "white", color: "black", duration: 0.3 });
    });

    // Arrow hover animation
    arrow.addEventListener("mouseenter", () => {
      gsap.to(arrow, { backgroundColor : "black", color : "white", duration : 0.3 }); // Apply scale animation on hover
    });

    arrow.addEventListener("mouseleave", () => {
      gsap.to(arrow, { backgroundColor : "white", color : "white", duration : 0.3 }); // Revert scale when mouse leaves
    });

    // Cleanup event listeners
    return () => {
      if (button) {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (arrow) {
        arrow.removeEventListener("mouseenter", handleMouseEnter);
        arrow.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div data-scroll data-scroll-speed = "-.5"  className="w-full h-screen pt-1 bg-zinc-100 text-white py-20 px-15">
      <div className="text-structure mt-30 text-black">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((Item, index) => (
          <div key={index} className="masker">
            <h1
              key={index}
              className="text-8xl font-semibold font-[FoundersGrotesk-Semibold.ttf] capitalize leading-none tracking-tighter"
            >
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                  className="w-[9vw] h-[78.5px] align-middle inline-block"
                  onAnimationComplete={() => setShowBg(true)}
                >
                  {showBg && (
                    <motion.img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      className="top-0 left-0 w-full h-full object-cover rounded-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    />
                  )}
                </motion.div>
              )}
              {Item}
            </h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-500 bg-zinc-100 text-black mt-25 py-4 flex justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light font-[NeueMontreal-Regular.ttf]" key={index}>
            {item}
          </p>
        ))}
        <div className="start flex gap-1">
          <div
            ref={buttonAnimation}
            className="uppercase border-[1.5px] border-zinc-500 font-light px-3 py-1 rounded-full font-[NeueMontreal-Regular.ttf]"
          >
            start the project
          </div>
          <div
            ref={arrowAnimation}
            className="flex justify-center items-center w-8 rounded-full h-8 border-[2px] border-zinc-500"
          >
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
