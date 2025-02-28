"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BrandingServices() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ threshold: 0.5 });
  const [ref2, inView2] = useInView({ threshold: 0.5 });
  const [ref3, inView3] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
      controls2.start({ opacity: 0, y: 50 });
      controls3.start({ opacity: 0, y: 50 });
    }
    if (inView2) {
      controls1.start({ opacity: 0.5, y: -50 });
      controls2.start({ opacity: 1, y: 0 });
      controls3.start({ opacity: 0, y: 50 });
    }
    if (inView3) {
      controls1.start({ opacity: 0, y: -50 });
      controls2.start({ opacity: 0.5, y: -50 });
      controls3.start({ opacity: 1, y: 0 });
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className="w-full">
      <motion.section
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={controls1}
        transition={{ duration: 0.8 }}
        className="h-[520px] flex items-center justify-center bg-purple-200"
      >
        <h1 className="text-6xl font-bold">Brand Strategy</h1>
      </motion.section>

      <motion.section
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
        transition={{ duration: 0.8 }}
        className="h-[520px] flex items-center justify-center bg-yellow-300"
      >
        <h1 className="text-6xl font-bold">Visual Identity</h1>
      </motion.section>

      <motion.section
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={controls3}
        transition={{ duration: 0.8 }}
        className="h-[520px] flex items-center justify-center bg-green-200"
      >
        <h1 className="text-6xl font-bold">Website</h1>
      </motion.section>
    </div>
  );
}
