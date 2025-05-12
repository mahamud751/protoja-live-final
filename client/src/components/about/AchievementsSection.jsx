'use client';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star } from 'lucide-react';
import CountUp from 'react-countup';

const achievements = [
  {
    icon: <Briefcase size={40} className="text-indigo-400 mb-4" />,
    count: 10,
    suffix: '+',
    desc: 'Years of Crafting Digital Experiences',
  },
  {
    icon: <Users size={40} className="text-indigo-400 mb-4" />,
    count: 50,
    suffix: '+',
    desc: 'Global Brands Collaborated With',
  },
  {
    icon: <Award size={40} className="text-indigo-400 mb-4" />,
    count: 20,
    suffix: '+',
    desc: 'Awards for Creative Excellence',
  },
  {
    icon: <Star size={40} className="text-indigo-400 mb-4" />,
    count: 99,
    suffix: '%',
    desc: 'Client Satisfaction Rate',
  },
];

export default function AchievementsSection() {
  return (
    <motion.section
      className="bg-gray-900 text-white px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Proud Moments</h2>
        <p className="text-lg text-gray-400">
          Every milestone tells a story of dedication, creativity, and impact.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 text-center max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl py-10 px-6 shadow-lg border border-gray-700 flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {item.icon}
            <div className="text-4xl font-extrabold text-white mb-2">
              <CountUp end={item.count} duration={2} suffix={item.suffix} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
