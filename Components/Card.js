import React from "react";

function Card() {
  return (
    <div className="cards w-full h-screen px-15 py-25 flex">
      <div className="relative w-1/2 py-12 rounded-xl bg-[#004D43] mr-4 flex items-center justify-center">
        <h1 className="text-[#CDEA68] font-semibold text-6xl">OCHI</h1>
        <button className="absolute top-[25vw] rounded-xl left-4 bg-transparent border border-[#CDEA68] px-3 py-1 text-[#CDEA68]">
          2019-2022
        </button>
      </div>
      <div className="w-1/2 flex gap-5">
        <div className="relative w-1/2 py-12 rounded-xl bg-zinc-900 flex items-center justify-center">
          <img
            className="bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute top-[25vw] rounded-xl left-4 bg-transparent border border-[#fff] px-3 py-1 text-[#fff]">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="relative w-1/2 py-12 rounded-xl bg-zinc-900 flex items-center justify-center">
          <img
            className="bg-cover"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="absolute top-[25vw] rounded-xl left-4 bg-transparent border border-[#fff] px-3 py-1 text-[#fff]">
            BUSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
