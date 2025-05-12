'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const expertise = [
  {
    title: 'E-Commerce',
    color: 'bg-[#FF6333]',
    image: '/expertise-ecommerce.jpg',
    details: 'Crafting frictionless and conversion-optimized shopping experiences for digital retailers.',
  },
  {
    title: 'Edu-Tech',
    color: 'bg-[#4B215C]',
    image: '/expertise-edutech.jpg',
    details: 'Building engaging, accessible platforms that elevate the digital learning journey.',
  },
  {
    title: 'Fintech',
    color: 'bg-[#E6FF3F]',
    image: '/expertise-fintech.jpg',
    details: 'Designing secure, intuitive interfaces for modern financial services and banking apps.',
  },
  {
    title: 'Corporate',
    color: 'bg-[#A259FF]',
    image: '/expertise-corporate.jpg',
    details: 'Developing enterprise-grade solutions that empower team collaboration and productivity.',
  },
  {
    title: 'Health Tech',
    color: 'bg-[#F5AFFF]',
    image: '/expertise-healthtech.jpg',
    details: 'Creating user-first healthcare tools for better diagnostics, care, and engagement.',
  },
  {
    title: 'SaaS Application',
    color: 'bg-[#24E6FF]',
    image: '/expertise-saas.jpg',
    details: 'Delivering scalable, UX-focused SaaS products for startups and enterprises alike.',
  },
];

export default function ServiceExpertiseSection() {
  const sliderRef = useRef(null);

  const scroll = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      className="w-full bg-[#f7f8fa] py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start md:justify-between mb-10 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Our Expertise</h3>
          </div>
          <div className="md:w-2/3">
            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
              We’ve collaborated with digital product teams across industries to craft user-first
              solutions. Here's where we specialize — though our skills reach far beyond.
            </p>
          </div>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            onClick={() => scroll(-300)}
            aria-label="Scroll left"
          >
            <ArrowRight className="rotate-180 text-gray-700" size={20} />
          </button>
          <button
            className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            onClick={() => scroll(300)}
            aria-label="Scroll right"
          >
            <ArrowRight className="text-gray-700" size={20} />
          </button>
        </div>

        {/* Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              className={`${item.color} relative rounded-2xl w-64 min-w-[256px] h-80 flex flex-col items-center justify-end p-6 cursor-pointer group transition duration-300 shadow-lg hover:scale-105`}
              style={{ scrollSnapAlign: 'start' }}
              whileHover={{ y: -4 }}
            >
              {/* Title */}
              <div className="w-full text-white text-2xl font-bold mb-3">{item.title}</div>

              {/* Image */}
              <div className="relative w-full h-36 mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 256px"
                  draggable={false}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex flex-col items-center justify-center p-6 z-10 text-center">
                <p className="text-white text-sm">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  );
}
