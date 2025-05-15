"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CaseStudySection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#fd5001] mb-4"
        >
          Transforming Vision Into Impact
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl"
        >
          We partner with fast-growing startups and visionary brands to craft delightful user experiences and scalable digital products.
        </motion.p>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full group bg-[#1a0e1c] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="overflow-hidden">
            <Image
              src="/case-study-01.jpg"
              alt="Glide Dashboard"
              width={1200}
              height={600}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              priority
            />
          </div>
          <div className="p-6 md:p-8 text-left">
            <h3 className="text-[#fd5001] text-2xl font-semibold mb-2">Glide — Streamlined Career Management</h3>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              Glide is a modern job referral and applicant tracking system focused on simplicity, performance, and clarity.
              We redefined its UI/UX to align with user needs, making the process of job hunting and team referrals intuitive and engaging.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Design System", "Frontend Development", "Brand Strategy"].map(tag => (
                <span key={tag} className="bg-[#ff8c00] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
