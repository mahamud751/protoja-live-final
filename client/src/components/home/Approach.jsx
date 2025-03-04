"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
  const sectionRef = useRef(null);
  const firstRowImageRefs = useRef([]); // Refs for first row images
  const secondRowImageRefs = useRef([]); // Refs for second row images
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0); // Track window width

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!windowWidth) return; // Wait for window width to be set

    // Animation logic for the first row
    const firstRowImages = firstRowImageRefs.current;
    const secondRowImages = secondRowImageRefs.current;

    const animateRow = (images, rowIndex) => {
      const totalImages = images.length; // 3 images
      const centerIndex = Math.floor(totalImages / 2); // Center image (index 1)

      // Calculate image width and spacing dynamically
      const containerWidth = containerRef.current.offsetWidth;
      const imageWidth = Math.min(500, windowWidth * 0.3); // Max 500px, 30% of window width
      const spacing = Math.min(100, windowWidth * 0.05); // Max 100px, 5% of window width

      // Initially hide all images except the center one
      gsap.set(images, { opacity: 0, x: 0, scale: 0 });
      gsap.set(images[centerIndex], { opacity: 1, scale: 1 });

      // ScrollTrigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      });

      // Expand images left and right from the center
      tl.to(
        images,
        {
          opacity: 1,
          scale: 1,
          x: (index) => {
            const offset = index - centerIndex;
            return offset * (imageWidth + spacing); // Spread images with dynamic spacing
          },
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        rowIndex === 0 ? 0 : 0.5 // Delay the second row animation slightly
      );
    };

    // Animate the first row
    animateRow(firstRowImages, 0);

    // Animate the second row
    animateRow(secondRowImages, 1);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowWidth]); // Re-run animations when window width changes

  // Helper to set refs for each image in a row
  const setImageRef = (rowRefs) => (el) => {
    if (el && !rowRefs.current.includes(el)) {
      rowRefs.current.push(el);
    }
  };

  const firstRowImageData = [
    {
      src: "/assets/new/1.png",
      title: "Rudy Capital | Turning crypto complexity into clarity",
      desc: "Strategy - Visual Identity - Website",
    },
    {
      src: "/assets/new/4.png",
      title: "Nola | Beauty and bullsh*t don't mix",
      desc: "Strategy - Visual Identity - Website",
    },
    {
      src: "/assets/new/5.png",
      title: "Otterspace | Unleashing the Power of Communities",
      desc: "Strategy - Visual Identity - Website",
    },
  ];

  const secondRowImageData = [
    {
      src: "/assets/new/6.png",
      title: "Quivo | Logistics Made Simple",
      desc: "Strategy - Visual Identity - Website",
    },
    {
      src: "/assets/new/7.png",
      title: "Yuri | Biotech in a space for a better life on earth",
      desc: "Strategy - Visual Identity - Website",
    },
    {
      src: "/assets/new/9.png",
      title: "Ascon Systems | Re-imagining Process Automation",
      desc: "Strategy - Visual Identity - Website",
    },
  ];

  return (
    <div className="bg-neutral-800 p-4 md:p-20 w-full" ref={sectionRef}>
      <div className="flex justify-center pt-32">
        <button className="bg-white w-[120px] rounded-[1440px] text-black p-1">
          Our approach
        </button>
        <div className="flex overflow-hidden justify-center items-center px-2.5 bg-white rounded-2xl h-[33px] min-h-[33px] w-[33px]">
          <Image
            loading="lazy"
            src="/assets/scrool/arrow.png"
            className="object-contain self-stretch my-auto aspect-[0.93] w-[13px]"
            width={120}
            height={120}
            alt="arrow"
          />
        </div>
      </div>

      <Typography
        variant="body1"
        color="initial"
        className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold pt-10 sm:pt-16 md:pt-20 text-white"
      >
        World most aspiring
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className="text-5xl text-center font-semibold mt-2 mb-12 text-white"
      >
        startups & scaleups
      </Typography>

      <Box
        ref={containerRef}
        sx={{
          position: "relative",
          height: windowWidth > 1440 ? "1000px" : "1200px", // Adjust height for large screens
          width: "100%", // Full width of the section
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: windowWidth > 1440 ? "150px" : "200px", // Adjust gap for large screens
        }}
      >
        {/* First Row */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          {firstRowImageData.map((item, index) => (
            <div
              key={index}
              ref={setImageRef(firstRowImageRefs)}
              style={{
                position: "absolute",
                width: `${Math.min(500, windowWidth * 0.3)}px`, // Dynamic width
                textAlign: "center",
              }}
            >
              <Image
                src={item.src}
                width={Math.min(500, windowWidth * 0.3)} // Dynamic width
                height={600} // Fixed height
                alt="approach"
                className="rounded-[10px]"
                style={{ objectFit: "cover" }}
              />
              <Typography
                variant="subtitle1"
                className="text-white font-semibold mt-2"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-[#e0dada] font-normal"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: windowWidth > 1440 ? "300px" : "300px", // Adjust margin for large screens
          }}
        >
          {secondRowImageData.map((item, index) => (
            <div
              key={index}
              ref={setImageRef(secondRowImageRefs)}
              style={{
                position: "absolute",
                width: `${Math.min(500, windowWidth * 0.3)}px`, // Dynamic width
                textAlign: "center",
              }}
            >
              <Image
                src={item.src}
                width={Math.min(500, windowWidth * 0.3)} // Dynamic width
                height={600} // Fixed height
                alt="approach"
                className="rounded-[10px]"
                style={{ objectFit: "cover" }}
              />
              <Typography
                variant="subtitle1"
                className="text-white font-semibold mt-2"
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                className="text-[#e0dada] font-normal"
              >
                {item.desc}
              </Typography>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
}
