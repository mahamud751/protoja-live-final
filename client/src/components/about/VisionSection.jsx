// components/VisionSection.js
'use client';
import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <motion.section
      className="bg-gray-50 text-gray-900 px-6 py-20"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-[#fd5001]">
          Our Vision for the Future
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          We envision a world where digital experiences are not just functional — they’re intuitive, inclusive, and emotionally impactful. Our goal is to lead that change through design-driven innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.img
          src="/about-vision-section.jpg"
          alt="Vision Illustration"
          className="rounded-xl shadow-2xl w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <ul className="text-left space-y-6 text-base md:text-lg text-gray-800 leading-relaxed">
          <li>
            <strong className="text-[#fd5001]">🌍 Global Perspective</strong> – We aim to shape experiences that resonate across cultures and platforms.
          </li>
          <li>
            <strong className="text-[#fd5001]">🧠 Intelligent Design</strong> – Leveraging data and empathy to build smarter, adaptive interfaces.
          </li>
          <li>
            <strong className="text-[#fd5001]">💡 Innovation First</strong> – Continuously pushing creative and technological boundaries to stay ahead.
          </li>
          <li>
            <strong className="text-[#fd5001]">💖 Human at the Core</strong> – Prioritizing accessibility, usability, and emotional connection in every design.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
