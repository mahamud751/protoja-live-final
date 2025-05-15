'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const apps = [
  "Mobile App",
  "IOS App",
  "App prototyping",
];

export default function ServiceMobileAppDesign() {
  return (
    <motion.section
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 items-stretch">
        
        {/* Left: Content */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold text-[#fd5001] mb-4 leading-tight">
            Mobile app design
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg text-lg">
            We focus on enhancing user interest by creating User friendly interfaces. By building a strong brand identity within the app, we ensure that users recognize and trust your brand. Our expert design team also works on optimizing the functionality of the app, making sure it runs smoothly and efficiently.
          </p>

          <ul className="space-y-2">
            {apps.map((app, idx) => (
              <motion.li
                key={app}
                className="flex items-center justify-between py-3 border-b last:border-b-0 group hover:bg-gray-50 px-2 rounded transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono w-7 group-hover:text-[#fd5001]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg text-gray-900 group-hover:text-[#fd5001]">{app}</span>
                </div>
                <ArrowRight
                  className="text-gray-400 group-hover:text-[#fd5001] transition"
                  size={20}
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 w-full flex items-stretch"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <Image
              src="/service-mobile-app-design.jpg"
              alt="UX UI Design Showcase"
              fill
              className="object-cover h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
