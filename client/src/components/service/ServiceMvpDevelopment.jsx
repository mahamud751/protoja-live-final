'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const mvps = [
  "MVP Development",
  "MVP  For Startups",
  "MVP App",
  "MVP web",
  "SaaS MVP",
];

export default function ServiceMvpDevelopment() {
  return (
    <motion.section
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 items-stretch">
        
        {/* Left: Image */}
        <motion.div
          className="md:w-1/2 w-full flex items-stretch"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <Image
              src="/service-mvp-development.jpg"
              alt="Brand Identity Visual"
              fill
              className="object-cover h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
           MVP Development
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg text-lg">
            Our Professional developers designers work  together to build world class MVP that offer great user experiences. We focus on MVP development, making sure your product is easy to find and ready for market testing. After launching an MVP, you can gradually add features until it becomes a complete app.
          </p>

          <ul className="space-y-2">
            {mvps.map((mvp, idx) => (
              <motion.li
                key={mvp}
                className="flex items-center justify-between py-3 border-b last:border-b-0 group hover:bg-gray-50 px-2 rounded transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono w-7">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-gray-900">{mvp}</span>
                </div>
                <ArrowRight
                  className="text-gray-400 group-hover:text-black transition"
                  size={20}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
