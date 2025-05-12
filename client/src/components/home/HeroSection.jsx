'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

export default function HeroSection() {
  const logos = [
    { id: 1, src: '/assets/logos/comviva.png', alt: 'Comviva', width: 90, height: 32 },
    { id: 2, src: '/assets/logos/damac.png', alt: 'damac', width: 90, height: 32 },
    { id: 3, src: '/assets/logos/licious.png', alt: 'licious', width: 90, height: 32 },
    { id: 4, src: '/assets/logos/mahindra.png', alt: 'mahindra', width: 90, height: 32 },
    { id: 5, src: '/assets/logos/sony.png', alt: 'sony', width: 90, height: 32 },
    { id: 6, src: '/assets/logos/tata.png', alt: 'tata', width: 90, height: 32 },
  ];

  const logoItemWidth = 150;
  const logosSetWidth = logos.length * logoItemWidth;

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8 py-12 pt-16 bg-[#eaeef1]">
  {/* Left Content */}
  <div className="w-full">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 text-center md:text-left">
      <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Leading UI UX</span> <br /> Design Agency
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-600 text-justify md:text-left mb-10 max-w-sm md:max-w-xl leading-relaxed">
      UI/UX design Firm, partnering with businesses to create outstanding products and enhance their digital presence by user experiences.
    </p>
    
    <div className="flex flex-row justify-center md:justify-start gap-4 sm:gap-6 mb-12">
      <a href='#projects' className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 h-12 rounded-full hover:bg-blue-700 hover:rounded-2xl transition duration-200 shadow-md">
        <span className="font-semibold">Book A Call</span>
      </a>
      <a
        href="#works"
        className="group relative inline-flex items-center text-sm font-semibold text-blue-600 transition duration-200"
      >
        See Our Works
        <ArrowUpRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        <span className="absolute left-0 -bottom-0.5 w-[80%] h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full group-hover:bg-blue-200" />
      </a>
    </div>

    {/* Client Logos - Auto Scrolling */}
    <div className="relative overflow-hidden py-4 border-t border-gray-100">
      <p className="text-xs text-gray-400 mb-8">TRUSTED BY INDUSTRY LEADERS</p>
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
            className="flex-shrink-0 w-[150px] px-4 grayscale hover:grayscale-0 transition-all"
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
    </div>
  </div>

  {/* Right Content - App Screens */}
  <div className="w-full flex justify-center mt-8 md:mt-0 relative">
    <div className="relative">
      <div className="absolute -inset-4 bg-blue-50 rounded-2xl -z-10"></div>
      <Image
        src="/assets/banner.png"
        width={660}
        height={660}
        alt="App screens showcasing UI/UX design"
        priority
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[660px] h-auto rounded-lg"
      />
    </div>
  </div>
</section>
  );
}