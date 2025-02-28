"use client";
import { useState, useEffect } from "react";
import { ArrowDownward } from "@mui/icons-material"; // Import arrow icon from Material UI
import Badge from "./Spin";

const ZoomableContent = () => {
  const [zoom, setZoom] = useState(1);
  const [showContent, setShowContent] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const minZoom = 0.6;
  const maxZoom = 1.5;

  useEffect(() => {
    if (zoom <= 0.8) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [zoom]);

  const handleWheel = (e) => {
    if (e.deltaY > 0 && zoom > minZoom) {
      setZoom((prevZoom) => Math.max(minZoom, prevZoom - 0.1));
    } else if (e.deltaY < 0 && zoom < maxZoom) {
      setZoom((prevZoom) => Math.min(maxZoom, prevZoom + 0.1));
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const imageScale = zoom * 30;
  const contentDistance = zoom * 70;

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden mt-48"
      onWheel={handleWheel}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.5s ease",
        transform: `scale(${zoom})`,
      }}
    >
      {isHovered && zoom > 0.8 && (
        <div
          className="absolute pointer-events-none"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "yellow", // Circle is yellow
            position: "fixed",
            top: mousePosition.y - 100 + "px",
            left: mousePosition.x - 100 + "px",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.1s ease",
          }}
        >
          {/* Circle with spinning text */}
          <Badge />
          <ArrowDownward
            style={{
              fontSize: "60px",
              color: "black", // Black arrow icon
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      )}

      <div
        className="absolute flex items-center justify-center"
        style={{
          width: `${imageScale}vw`,
          height: `${imageScale}vh`,
          transform: `translate(-50%, -50%) scale(${zoom})`,
          top: "47%",
          left: "50%",
          transition: "transform 0.5s ease, width 0.5s ease, height 0.5s ease",
        }}
      >
        <img
          loading="lazy"
          src="/assets/banner.png"
          alt="Smart Digital Products"
          className="object-cover w-full h-full"
        />
      </div>

      <section className="flex flex-col justify-center items-center w-full max-w-[1145px] font-semibold transition-all duration-500 ease-out max-md:max-w-full">
        <div className="flex flex-wrap justify-center items-center w-full text-4xl max-md:max-w-full">
          <div
            className={`flex flex-col grow shrink items-end self-stretch my-auto min-w-[240px] w-[484px] max-md:max-w-full transition-all duration-500 ease-out ${
              showContent
                ? `translate-x-0 translate-y-0 opacity-100`
                : `translate-x-${contentDistance}% opacity-0`
            }`}
            style={{
              transition: "transform 0.5s ease, opacity 0.5s ease",
              transform: `translate(-${contentDistance}%, 0)`,
            }}
          >
            <div className="gap-1.5 self-stretch py-3.5 pr-10 pl-10 border-solid bg-neutral-900 border-[0.551px] border-neutral-200 rounded-[55.149px] text-neutral-50 max-md:px-5 max-md:max-w-full">
              Mastering UX Design
            </div>
            <div className="gap-1.5 self-stretch px-10 py-3.5 mt-1.5 max-w-full text-orange-500 border-solid bg-neutral-900 border-[0.551px] border-neutral-200 rounded-[55.149px] w-[518px] max-md:px-5">
              Smart Digital Products
            </div>
          </div>

          <div
            className={`flex flex-col grow shrink justify-center self-stretch my-auto min-w-[240px] w-[425px] max-md:max-w-full transition-all duration-500 ease-out ${
              showContent
                ? `translate-x-0 translate-y-0 opacity-100`
                : `translate-x-${contentDistance}% opacity-0`
            }`}
            style={{
              transition: "transform 0.5s ease, opacity 0.5s ease",
              transform: `translate(${contentDistance}%, 0)`,
            }}
          >
            <div className="gap-1.5 self-start py-3.5 pr-10 pl-10 text-orange-500 border-solid bg-neutral-900 border-[0.551px] border-neutral-200 rounded-[55.149px] max-md:px-5">
              Powerful Branding
            </div>
            <div className="gap-1.5 self-stretch px-10 py-3.5 mt-2.5 max-w-full border-solid bg-neutral-900 border-[0.551px] border-neutral-200 rounded-[55.149px] text-neutral-50 w-[459px] max-md:px-5">
              Businesses Globally
            </div>
          </div>
        </div>

        <div
          className={`gap-1.5 self-center px-11 py-2.5 mt-3 max-w-full text-6xl text-orange-500 border-solid bg-neutral-900 border-[0.585px] border-neutral-200 rounded-[58.482px] w-[727px] max-md:px-5 max-md:max-w-full max-md:text-4xl transition-all duration-500 ease-out ${
            showContent
              ? `translate-y-0 opacity-100`
              : `translate-y-${contentDistance}% opacity-0`
          }`}
          style={{
            transition: "transform 0.5s ease, opacity 0.5s ease",
            transform: `translate(0, ${contentDistance}%)`,
          }}
        >
          Connecting Experiences
        </div>
      </section>
    </div>
  );
};

export default ZoomableContent;
