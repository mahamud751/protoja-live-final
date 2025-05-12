// components/TeamSection.js
'use client';
import { motion } from 'framer-motion';

const team = [
  { name: 'Jane Doe', role: 'Founder & CEO', img: '/about-team-member-01.jpg' },
  { name: 'John Smith', role: 'Lead Designer', img: '/about-team-member-02.jpg' },
  { name: 'Alice Lee', role: 'UX Researcher', img: '/about-team-member-03.jpg' },
  { name: 'Mark Chan', role: 'Frontend Engineer', img: '/about-team-member-04.jpg' },
];

export default function TeamSection() {
  return (
    <motion.section
      className="bg-gray-50 px-6 py-20 text-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A collective of thinkers, dreamers, and doers dedicated to delivering impactful digital experiences.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-indigo-100"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
