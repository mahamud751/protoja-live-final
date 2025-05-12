'use client';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <motion.section
      className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white px-6 py-20"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Send size={48} className="mx-auto mb-4 text-white" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Let’s Bring Your Vision to Life
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            From idea to execution — we partner with bold brands to craft immersive, user-driven digital experiences that stand out.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all"
          >
            <Send className="w-5 h-5" />
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
