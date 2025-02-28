"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const servicesList = [
  "UX Design",
  "User Testing",
  "Product Prototype",
  "Mobile UI",
  "Software UI design",
  "Web app design",
  "Interaction design",
];

gsap.registerPlugin(ScrollTrigger);

const Autorun = () => {
  const sectionRefs = useRef([null]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true, // Pin the section until the next one is reached
          pinSpacing: false, // Prevent extra spacing
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Disable markers for production
        },
        height: "50vh", // Expand the section to full viewport height
        duration: 1.5,
        ease: "power1.out",
      });
    });

    // Cleanup ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="text-black bg-black h-full pb-40">
      <p className="text-white text-center py-40 text-2xl">What we offer</p>
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        id="section1"
        className="bg-[#C3ABFF] z-0 overflow-hidden"
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold">UI UX Design</h1>
            <p className="sm:mt-5 md:mt-28 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-60 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <Image
              loading="lazy"
              src="/assets/service/1.png"
              alt="Product design visualization"
              width={1000}
              height={1000}
              className="w-[450px] h-[400px]"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        id="section2"
        className="bg-[#272727] z-1 overflow-hidden"
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full text-white">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold text-white">
              Visual Identity
            </h1>
            <p className="sm:mt-5 md:mt-28 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-60 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <Image
              loading="lazy"
              src="/assets/service/1.png"
              alt="Product design visualization"
              width={1000}
              height={1000}
              className="w-[450px] h-[400px]"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        id="section3"
        className="bg-[#F76F00] z-2 overflow-hidden"
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold">
              Mobile app Design
            </h1>
            <p className="sm:mt-5 md:mt-20 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-72 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <Image
            loading="lazy"
            src="/assets/scrool/4.png"
            alt="Product design visualization"
            width={1000}
            height={1000}
            className="w-[450px] h-[400px]"
          />
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        id="section4"
        className="bg-[#FFD580] z-3 overflow-hidden "
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold ">Website</h1>
            <p className="sm:mt-5 md:mt-28 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-60 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <Image
              loading="lazy"
              src="/assets/service/3.png"
              alt="Product design visualization"
              width={1000}
              height={1000}
              className="w-[450px] h-[400px]"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        id="section5"
        className="bg-[#fff] z-3 overflow-hidden "
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold">Web App Design</h1>
            <p className="sm:mt-5 md:mt-28 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-60 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <Image
              loading="lazy"
              src="/assets/scrool/1.png"
              alt="Product design visualization"
              width={1000}
              height={1000}
              className="w-[450px] h-[400px]"
            />
          </div>
        </div>
      </section>
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        id="section6"
        className="bg-[#86FF80] z-3 overflow-hidden "
        style={{ height: "55vh" }}
      >
        <div className="flex flex-col md:flex-row justify-between p-12 h-full">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-9xl font-bold">Saas Design</h1>
            <p className="sm:mt-5 md:mt-28 sm:text-xl md:text-3xl md:w-[418px]">
              Our product design services focus on creating intuitive and
              aesthetically pleasing products that resonate with your audience
              and stand out in the market.
            </p>
          </div>
          <div className="sm:mt-0 md:mt-60 md:w-1/4">
            {servicesList.map((service, index) => (
              <p key={index} className="text-xl">
                {service}
              </p>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:w-1/4">
            <Image
              loading="lazy"
              src="/assets/service/3.png"
              alt="Product design visualization"
              width={1000}
              height={1000}
              className="w-[450px] h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Autorun;
