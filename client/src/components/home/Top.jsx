"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import BrandingHero from "./Startup";
import SpinHome from "./SpinHome";
import HeroStar from "../atoms/HeroStar";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false); // New state for laptop screens
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && imageRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        imageRef.current.style.width = `${containerWidth}px`;
      }
      setIsMobile(window.innerWidth < 768);
      setIsLaptop(window.innerWidth >= 768 && window.innerWidth <= 1440); // Check for laptop screen size
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scaleX: () =>
          Math.min(1 + scrollY / (isLaptop ? 2 : 1.5), isLaptop ? 4.5 : 5.1),
        scaleY: () =>
          Math.min(1 + scrollY / (isLaptop ? 2 : 1.5), isLaptop ? 2.5 : 3.6),
        y: () => Math.max(-scrollY / 1, isLaptop ? -150 : -200), // Adjust y positioning for laptops
        duration: 1.5,
        ease: "power3.out",
      });
    }
  }, [scrollY, isLaptop]);

  const imageHeight = Math.min(200 + scrollY / (isLaptop ? 3 : 2), 200); // Slower scale on laptop
  const imageWidth = Math.min(
    200 + scrollY / (isLaptop ? 3 : 2),
    isLaptop ? 400 : 500
  );
  const contentOffset = Math.min(scrollY * (isLaptop ? 1 : 1.5), 450); // Slower content movement on laptop

  return (
    <>
      <div className="relative h-screen bg-white top-0">
        <div className="relative z-10 flex flex-col p-2 justify-between h-full text-white md:ms-32 transition-transform ">
          <div
            className="flex md:justify-between items-center h-full "
            style={{
              transform: isMobile ? "none" : `translateX(-${contentOffset}px)`, // Apply transform only if not mobile
            }}
          >
            <div>
              <h6 className="text-[48px] md:text-[70px] lg:text-[100px] xl:text-[110px] text-[#161616] font-outfit font-bold leading-none">
                Top Global UX
              </h6>
              <br />
              <span className="text-[48px] md:text-[70px] lg:text-[100px] xl:text-[110px] font-outfit font-bold leading-none text-[#575757]">
                Design Studio
              </span>
              <div className="bottom-32 md:bottom-48 lg:bottom-64 left-0 right-0 flex mt-32 md:mt-12 ml-[-24px] md:ml-0">
                <div className="flex px-4 py-1 rounded-[40.994px] bg-white">
                  <div className="rounded-[22.873px]">
                    <Image
                      width={46}
                      height={46}
                      src="/assets/reviewBased.png"
                      alt="logo"
                    />
                  </div>
                  <div className="ms-3">
                    <div className="flex mt-[-4px]">
                      <p className="text-black text-[16px] md:text-[20px] lg:text-[22.125px] font-inter font-medium leading-[31.2px] mx-1">
                        5.0
                      </p>
                      <HeroStar />
                    </div>
                    <p className="text-[13px] md:text-[14px] lg:text-[15.125px] font-semibold text-[#444446] font-inter leading-[28px] tracking-[-0.5px] ms-1">
                      Based on Clutch reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:mr-[120px] md:mt-[-220px] ml-24 md:ml-9">
              <SpinHome />
            </div>
            <video
              ref={imageRef}
              src="/assets/design.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className={`absolute left-0 hidden md:block`} // Hidden on small screens, visible on medium and above
              style={{
                height: `${imageHeight}px`,
                width: `${imageWidth}px`,
                transformOrigin: "top left",
                bottom: `${Math.max(-scrollY / 1, isLaptop ? -420 : -520)}px`, // Adjust bottom position for laptops
                zIndex: -1,
                opacity: Math.min(1 + scrollY / 100, 1),
                transform: `scale(${Math.min(
                  1 + scrollY / 200,
                  isLaptop ? 1.8 : 2.2
                )})`, // Smaller scale on laptops
                transition: "opacity 0.5s ease, transform 0.5s ease",
                borderRadius: "16px", // Fixed border-radius here
              }}
            ></video>
          </div>

          <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 md:right-16 lg:right-40">
            <div className="max-w-xs md:max-w-md lg:max-w-lg">
              <span className="text-[14px] md:text-[18px] lg:text-[21px] font-semibold text-[#202124]">
                Protoja is a UI UX Design and Brand design studio, crafting
                user-centered experiences and impactful brand identities to
                drive business growth.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: isMobile
            ? "0"
            : `${Math.max(-scrollY / 1, isLaptop ? 700 : 812)}px`, // Adjust margin for laptops
        }}
      >
        <BrandingHero />
      </div>
    </>
  );
};

export default HeroSection;
