// components/ProcessSection.js
'use client';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Discovery', desc: 'We start by deeply understanding your business, users, and goals.' },
  { title: 'Strategy', desc: 'We craft a tailored digital roadmap aligned with your brand vision.' },
  { title: 'Design', desc: 'We translate ideas into user-centric, high-impact design experiences.' },
  { title: 'Delivery', desc: 'We ensure pixel-perfect handoff, testing, and seamless deployment.' },
];

export default function ProcessSection() {
  return (
    <motion.section
      className="bg-[#1a0e1c] px-6 py-20 text-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-[#fd5001]">
          How We Bring Ideas to Life
        </h2>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
          Our process is crafted to transform vision into reality — collaboratively, creatively, and efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            className="p-6 border border-white/30 rounded-xl shadow-lg text-center flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-indigo-100 flex items-center justify-center text-[#fd5001] font-bold text-xl">
              {idx + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#fd5001]">{step.title}</h3>
            <p className="text-white/70 text-base">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
