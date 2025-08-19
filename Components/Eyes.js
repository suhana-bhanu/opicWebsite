"use client";
import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      let deltaX = mouseX - centerX;
      let deltaY = mouseY - centerY;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes h-screen w-full overflow-hidden">
      <div data-scroll data-scroll-speed = "-.6"  className='relative w-full bg-cover bg-center h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          
          {/* Eye 1 */}
          <div className="w-[17vw] h-[17vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-800 flex items-center justify-center">
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute w-full h-full flex items-center"
              >
                <div
                  className="w-[35px] h-[35px] rounded-full bg-zinc-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: "translateX(100%)" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="w-[17vw] h-[17vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-800 flex items-center justify-center">
              <div
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transformOrigin: "center",
                }}
                className="absolute w-full h-full flex items-center"
              >
                <div
                  className="w-[35px] h-[35px] rounded-full bg-zinc-100 absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: "translateX(100%)" }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;
