"use client";
import React, { useEffect , useRef} from "react";
import Navbar from "@/Components/Navbar";
import LandingPage from "@/Components/LandingPage";
import Marquee from "@/Components/Marquee";
import About from "@/Components/About";
import Eyes from "@/Components/Eyes";
import Featuredprojects from "@/Components/Featuredprojects";
import Card from "@/Components/Card";
import Footer from "@/Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function page() {

  const containerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el : containerRef.current,
        smooth : true,
      });

      return ()=>{
        locomotiveScroll.destroy()
      }
    }
  }, []);
  return (
    <div ref={containerRef} data-scroll-container className="w-full h-screen">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featuredprojects />
      <Card />
      <Footer />
    </div>
  );
}

export default page;
