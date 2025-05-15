// components/MissionSection.js
'use client';
import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <motion.section
      className="bg-[#1a0e1c] text-gray-900 px-6 py-20"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-[#fd5001]">
          Driven by Purpose. Designed for Impact.
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto">
          Our mission is to shape intuitive, human-centered digital experiences that empower brands to connect, inspire, and grow in a constantly evolving world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <ul className="text-left space-y-6 text-base md:text-lg text-white/80 leading-relaxed">
          <li>
            <strong className="text-[#fd5001]">🌱 Empower</strong> – We craft digital solutions that empower users and elevate brand value.
          </li>
          <li>
            <strong className="text-[#fd5001]">🎯 Focus</strong> – Every decision we make stems from purpose, precision, and user intent.
          </li>
          <li>
            <strong className="text-[#fd5001]">🤝 Collaborate</strong> – We believe the best ideas come through open, transparent collaboration.
          </li>
          <li>
            <strong className="text-[#fd5001]">🚀 Evolve</strong> – We constantly iterate, improve, and stay ahead of industry innovation.
          </li>
        </ul>

        <motion.img
          src="/about-mission-section.jpg"
          alt="Mission Visual"
          className="rounded-xl shadow-2xl w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </motion.section>
  );
}
