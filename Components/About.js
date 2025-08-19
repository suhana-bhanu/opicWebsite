import React from "react";

function About() {
  return (
    <div className="rounded-r-2  about-page w-full py-20 px-9 bg-[#CDEA68]">
      <div>
        <h1 className="text-black text-5xl font-[FoundersGrotesk-Semibold.ttf]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to <ins>raise funds</ins>,{" "}
          <ins>sell products</ins>, <ins>explain complex ideas</ins>, and
          <ins>hire great people</ins>.
        </h1>
      </div>
      <div className="w-full part2 border-t-2 border-b-2 mb-8 border-zinc-500 mt-20 flex justify-between px-9 py-5 pb-[100px] gap-10">
        <div className="part21 w-300">
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            What you can expect:
          </p>
        </div>
        <div className="part22 flex flex-col w-120 mr-[30px]">
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black mb-10">
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
          </p>
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="part23 mt-[133px]">
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            S:
          </p>
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            Instagram
          </p>
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            Facebook
          </p>
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            Behance
          </p>
          <p className="text-lighter font-[NeueMontreal-Regular.ttf] text-black">
            LinkedIn
          </p>
        </div>
      </div>
      <div className="our-app px-9 flex justify-between">
        <div className="heading leading-3 text-black">
          <h3 className="text-zinc-900 w-[550px] text-5xl font-light font-semibold font-[NeueMontreal-Regular.ttf] mb-4">
            Our approach:
          </h3>
          <button className="bg-black gap-2 w-[200px] text-white font-semibold  px-4 py-6 rounded-full uppercase flex justify-center items-center">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="image ">
          <img
            className="bg-gray-200 w-full max-w-full rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            width="463"
            height="469"
            srcSet="
        https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x,
        https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x
      "
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
