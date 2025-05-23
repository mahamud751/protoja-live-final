'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import gsap from "gsap";
import { useRef } from 'react';

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

  const btnOverlayRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(btnOverlayRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnOverlayRef.current, {
      width: "0%",
      duration: 0.4,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#fd5001] to-[#ff8c00] text-transparent bg-clip-text">
            Leading UI UX <br /> Design Agency
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-md md:max-w-xl mx-auto md:mx-0 leading-relaxed">
            UI/UX design firm, partnering with businesses to create outstanding products and enhance their digital presence through user-centered experiences.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center px-6 h-12 rounded-full overflow-hidden group font-medium text-white bg-[#fd5001] border-2 border-[#fd5001] transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                ref={btnOverlayRef}
                className="absolute left-0 top-0 h-full z-0 bg-[#d43e01]"
                style={{ width: "0%" }}
              />
              <span className="relative z-10">Book A Call</span>
            </a>
            <a
              href="#works"
              className="group relative inline-flex items-center text-sm font-semibold text-[#fd5001]"
            >
              See Our Works
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute left-0 -bottom-0.5 w-[80%] h-0.5 bg-[#fe9667] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Logos */}
          <div className="relative overflow-hidden pt-8 border-t border-gray-200 mt-8">
            <p className="text-xs text-gray-400 mb-4">TRUSTED BY INDUSTRY LEADERS</p>
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
                  className="flex-shrink-0 w-[150px] px-4 grayscale hover:grayscale-0 transition"
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

        {/* Right Content */}
        <div className="w-full flex justify-center">
          <Image
            src="/assets/banner.png"
            width={660}
            height={660}
            alt="App screens showcasing UI/UX design"
            priority
            className="w-full max-w-[340px] sm:max-w-md md:max-w-lg lg:max-w-[660px] h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
