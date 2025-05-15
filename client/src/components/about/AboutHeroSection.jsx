// components/HeroSection.js
'use client';
import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 py-32 text-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight text-[#fd5001]">
          Designing the Future of Digital Experiences
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          At the intersection of creativity and technology, we craft seamless, user-first digital products that resonate.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="px-4 py-2 bg-[#ff8c00] text-white rounded-full shadow text-sm font-medium">
            UI/UX Strategy
          </span>
          <span className="px-4 py-2 bg-[#ff8c00] text-white rounded-full shadow text-sm font-medium">
            Brand Identity
          </span>
          <span className="px-4 py-2 bg-[#ff8c00] text-white rounded-full shadow text-sm font-medium">
            Web & App Design
          </span>
        </div>
      </div>

      <motion.img
        src="/about-hero-section.jpg"
        alt="Creative Agency"
        className="rounded-2xl shadow-2xl max-w-5xl w-full z-0 mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Optional decorative blur background */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </motion.section>
  );
}
