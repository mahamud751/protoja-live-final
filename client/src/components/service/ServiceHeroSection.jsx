'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceHeroSection() {
  return (
    <section className="min-h-[440px] flex items-center overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-32">
        
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#fd5001] mb-4 leading-tight">
            Design That Drives Growth
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-xl">
            We specialize in crafting scalable, user-centric digital products — from MVPs and SaaS platforms to mobile apps and enterprise software. Let us help you transform ideas into intuitive, engaging experiences.
          </p>
          <button className="text-[#fd5001] px-8 py-3 border border-[#fd5001] rounded-full font-semibold shadow hover:rounded-2xl transition">
            Start Your Product Journey
          </button>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="hidden md:flex md:w-1/2 justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/service-product-design.jpg"
            alt="Product Design Service"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
