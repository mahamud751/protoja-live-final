"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  "UX Design",
  "User Testing",
  "Product Prototype",
  "Mobile UI",
  "Software UI Design",
  "Web App Design",
  "Interaction Design",
];

const Autorun = () => {
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const isLastSection = index === sections.length - 1;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top", // Pin when top hits top of viewport
          end: isLastSection ? "bottom bottom" : "bottom top", // Last section ends naturally
          pin: true,
          pinSpacing: isLastSection ? true : false, // Add spacing only for last section
          scrub: 1,
          markers: false, // Set to true for debugging
        },
        // Use min-height instead of fixed height for responsiveness
        minHeight: "50vh",
        duration: 2.5,
        ease: "power1.out",
      });
    });

    // Refresh ScrollTrigger on window resize for responsiveness
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = [
    {
      id: "section1",
      bgColor: "bg-[#C3ABFF]",
      title: "UI UX Design",
      imgSrc: "/assets/service/1.png",
    },
    {
      id: "section2",
      bgColor: "bg-[#272727]",
      title: "Visual Identity",
      imgSrc: "/assets/service/1.png",
      textColor: "text-white",
    },
    {
      id: "section3",
      bgColor: "bg-[#F76F00]",
      title: "Mobile App Design",
      imgSrc: "/assets/scrool/4.png",
    },
    {
      id: "section4",
      bgColor: "bg-[#FFD580]",
      title: "Website",
      imgSrc: "/assets/service/3.png",
    },
    {
      id: "section5",
      bgColor: "bg-[#fff]",
      title: "Web App Design",
      imgSrc: "/assets/scrool/1.png",
    },
    {
      id: "section6",
      bgColor: "bg-[#86FF80]",
      title: "SaaS Design",
      imgSrc: "/assets/service/3.png",
    },
  ];

  return (
    <div ref={containerRef} className="text-black bg-black min-h-screen">
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id}
          className={`${section.bgColor} z-${index} overflow-hidden`}
          style={{ minHeight: "50vh" }} // Responsive initial height
        >
          <div className="flex flex-col md:flex-row justify-between p-4 sm:p-8 md:p-12 h-full">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1
                className={`text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap ${
                  section.textColor || "text-black"
                }`}
              >
                {section.title}
              </h1>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-8 h-auto sm:h-72 md:h-96">
                <p
                  className={`text-sm sm:text-lg md:text-xl lg:text-3xl w-full sm:w-[300px] md:w-[418px] ${
                    section.textColor || "text-black"
                  }`}
                >
                  Our product design services focus on creating intuitive and
                  aesthetically pleasing products that resonate with your
                  audience and stand out in the market.
                </p>
                <div className="mt-4 sm:mt-0">
                  {servicesList.map((service, idx) => (
                    <p
                      key={idx}
                      className={`font-mono text-sm sm:text-base md:text-lg lg:text-xl ${
                        section.textColor || "text-black"
                      }`}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="w-full md:w-auto">
              <motion.div
                className="mt-8 md:mt-0 w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="w-full max-w-[240px] sm:max-w-[400px] md:max-w-[654px] mx-auto">
                  <Image
                    loading="lazy"
                    src={section.imgSrc}
                    alt={`${section.title} visualization`}
                    width={2000}
                    height={2000}
                    className="w-full h-[400px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Autorun;
