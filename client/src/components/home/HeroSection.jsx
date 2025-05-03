'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

export default function HeroSection() {
  const logos = [
    { id: 1, src: '/assets/logos/comviva.png', alt: 'Comviva', width: 90, height: 32 },
    { id: 2, src: '/assets/logos/damac.png', alt: 'Comvivaa', width: 90, height: 32 },
    { id: 3, src: '/assets/logos/licious.png', alt: 'Comvivaaa', width: 90, height: 32 },
    { id: 4, src: '/assets/logos/mahindra.png', alt: 'Comvivaaaa', width: 90, height: 32 },
    { id: 5, src: '/assets/logos/sony.png', alt: 'Comviv', width: 90, height: 32 },
  ];

  const logoItemWidth = 150;
  const logosSetWidth = logos.length * logoItemWidth;

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8 py-12 pt-16 bg-gray-800">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
      </div>
      {/* Left Content */}
      <div className="w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 md:uppercase tracking-widest text-transparent bg-clip-text">
          Leading UI UX <br /> Design Agency
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-white text-justify md:text-left mb-10 max-w-sm md:max-w-xl leading-relaxed">
          UI/UX design Firm, partnering with businesses to create outstanding products and enhance their digital presence by user experiences.
        </p>
        <div className="flex flex-row justify-center md:justify-start gap-4 sm:gap-6 mb-12">
          <a href='#projects' className="inline-flex items-center gap-2 border-2 text-white border-white/15 px-5 h-12 rounded-full relative z-50 hover:rounded-xl transition duration-200">
            <span className="font-semibold">Book A Call</span>
          </a>
          <a
            href="#works"
            className="group relative inline-flex items-center text-sm font-semibold text-white transition duration-200"
          >
            See Our Works
            <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute left-0 -bottom-0.5 w-[80%] h-0.5 bg-white/15 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Client Logos - Auto Scrolling */}
        <div className="relative overflow-hidden py-2">
          <motion.div
            className="flex items-center"
            style={{ width: logosSetWidth * 2 }}
            animate={{ x: [-0, -logosSetWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {[...logos, ...logos].map((item, index) => (
              <div
                key={`logo-${item.id}-${index}`}
                className="flex-shrink-0 w-[150px] px-4"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>

          {/* Optional: gradient edge overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-800 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-800 to-transparent pointer-events-none z-10" />
        </div>

      </div>

      {/* Right Content - App Screens */}
      <div className="w-full flex justify-center mt-8 md:mt-0 relative">
        <Image
          src="/assets/banner.png"
          width={660}
          height={660}
          alt="App screens showcasing UI/UX design"
          priority
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[660px] h-auto"
        />
      </div>
    </section>
  );
}