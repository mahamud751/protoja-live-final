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

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          markers: false,
        },
        height: "50vh",
        duration: 1.5,
        ease: "power1.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
    <div className="text-black bg-black h-full pb-40">
      {sections.map((section, index) => (
        <section
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id}
          className={`${section.bgColor} z-${index} overflow-hidden`}
          style={{ height: "50vh" }} // Initial height
        >
          <div className="flex flex-col md:flex-row justify-between p-12 h-full">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1
                className={`text-2xl whitespace-nowrap md:text-9xl font-bold ${
                  section.textColor || "text-black"
                }`}
              >
                {section.title}
              </h1>
              <div className="md:flex justify-between items-center h-96">
                <p
                  className={`sm:text-xl md:text-3xl md:w-[418px] ${
                    section.textColor || "text-black"
                  }`}
                >
                  Our product design services focus on creating intuitive and
                  aesthetically pleasing products that resonate with your
                  audience and stand out in the market.
                </p>
                <div>
                  {servicesList.map((service, idx) => (
                    <p
                      key={idx}
                      className={`font-mono text-xl ${
                        section.textColor || "text-black"
                      }`}
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div
                className="mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <div className="min-w-[240px] w-[654px]">
                  <Image
                    loading="lazy"
                    src={section.imgSrc}
                    alt={`${section.title} visualization`}
                    width={2000}
                    height={2000}
                    className="object-contain"
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
