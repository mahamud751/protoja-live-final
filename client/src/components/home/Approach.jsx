"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
  const sectionRef = useRef(null);
  const firstRowImageRefs = useRef([]);
  const secondRowImageRefs = useRef([]);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!windowWidth) return;

    const firstRowImages = firstRowImageRefs.current;
    const secondRowImages = secondRowImageRefs.current;

    const animateRow = (images, rowIndex) => {
      const totalImages = images.length;
      const centerIndex = Math.floor(totalImages / 2);
      const containerWidth = containerRef.current.offsetWidth;
      const imageWidth = Math.min(500, windowWidth * 0.3);
      const spacing = Math.min(100, windowWidth * 0.05);

      gsap.set(images, { opacity: 0, x: 0, scale: 0 });
      gsap.set(images[centerIndex], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(
        images,
        {
          opacity: 1,
          scale: 1,
          x: (index) => {
            const offset = index - centerIndex;
            return offset * (imageWidth + spacing);
          },
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        rowIndex === 0 ? 0 : 0.5
      );
    };

    animateRow(firstRowImages, 0);
    animateRow(secondRowImages, 1);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowWidth]);

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

  const Card = ({ image, title, description }) => (
    <div
      className="relative z-0 flex flex-col gap-4 rounded-3xl border-2 border-white/20 bg-gray-800 p-4 md:p-6 shadow-md overflow-hidden transition"
      style={{ width: `${Math.min(500, windowWidth * 0.3)}px` }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );

  return (
    <div className="p-4 md:p-16 w-full" ref={sectionRef}>
      <div className="pt-32">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Our Blog
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-white">
          Latest Trends and Updates
        </h2>
      </div>
  
      {windowWidth <= 768 ? (
        <div className="flex flex-col gap-6 mt-12">
          {[...firstRowImageData, ...secondRowImageData].map((item, index) => (
            <Card
              key={index}
              image={item.src}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full flex flex-col justify-center items-center overflow-hidden"
          style={{
            height: windowWidth > 1440 ? "1000px" : "1200px",
            gap: windowWidth > 1440 ? "150px" : "200px",
          }}
        >
          {/* First Row */}
          <div className="relative w-full flex justify-center items-center">
            {firstRowImageData.map((item, index) => (
              <div
                key={index}
                ref={setImageRef(firstRowImageRefs)}
                className="absolute"
              >
                <Card
                  image={item.src}
                  title={item.title}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
  
          {/* Second Row */}
          <div className="relative w-full flex justify-center items-center mt-[300px]">
            {secondRowImageData.map((item, index) => (
              <div
                key={index}
                ref={setImageRef(secondRowImageRefs)}
                className="absolute"
              >
                <Card
                  image={item.src}
                  title={item.title}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );  
}
