"use client";
import React, { useState, useEffect } from "react";

const VideoPart = () => {
  const [imageHeight, setImageHeight] = useState(window.innerHeight);
  const [isShrunk, setIsShrunk] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [animationDone, setAnimationDone] = useState(false);
  const [isScrollBlocked, setIsScrollBlocked] = useState(false);

  const handleMouseMove = (e) => {
    const x = e.clientX - 60;
    const y = e.clientY - 60;
    setPosition({ x, y });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrollBlocked) {
        e.preventDefault();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollBlocked]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isShrunk) {
        const scrollPosition = window.scrollY;
        const newHeight = Math.max(
          200,
          window.innerHeight - scrollPosition * 0.5
        );
        setImageHeight(newHeight);

        if (newHeight <= 200) {
          setIsShrunk(true);
          setIsScrollBlocked(true);
          g;
          setTimeout(() => setAnimationDone(true), 1500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShrunk]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="bg-black h-[100vh] relative overflow-hidden"
    >
      <div className="w-full h-[200px] relative">
        <div
          className="bg-red-500 w-[120px] h-[120px] rounded-full absolute transition-transform duration-200 ease-[cubic-bezier(0.02,1.23,.79,1.08)]"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        ></div>
      </div>

      <div
        className={`flex justify-center items-center transition-all duration-300 ease-out`}
        style={{
          height: `${imageHeight}px`,
        }}
      >
        <img
          src="/assets/banner.png"
          alt="Shrinking Image"
          className="object-cover w-auto"
          style={{
            maxHeight: "100%",
            transition: "height 0.3s ease-out",
          }}
        />
      </div>

      {isShrunk && animationDone && (
        <>
          <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 opacity-100 text-white text-2xl transition-all duration-1000 animate-slideInFromTop">
            Top Text
          </div>
          <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 opacity-100 text-white text-2xl transition-all duration-1000 animate-slideInFromBottom">
            Bottom Text
          </div>
          <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 opacity-100 text-white text-2xl transition-all duration-1000 animate-slideInFromLeft">
            Left Text
          </div>
          <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 opacity-100 text-white text-2xl transition-all duration-1000 animate-slideInFromRight">
            Right Text
          </div>
        </>
      )}

      {animationDone && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-1000 ease-in-out delay-1000">
          <p className="max-w-[80%] text-white text-center text-xl leading-relaxed opacity-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            non felis eget ligula facilisis facilisis. Vivamus lacinia suscipit
            libero, eget volutpat risus sollicitudin et.
          </p>
        </div>
      )}
    </div>
  );
};

export default VideoPart;
