// components/WhyPartnerSection.js

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Lightbulb,
  BarChart2,
  Layers,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Users size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "User-centric Core",
    desc: "We prioritize real users. By immersing in their world, we craft intuitive designs that feel natural and meaningful.",
  },
  {
    icon: <ShieldCheck size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "Expert Team",
    desc: "Our multidisciplinary team blends creativity with strategy to deliver exceptional, scalable results.",
  },
  {
    icon: <Lightbulb size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "Strategic Innovation",
    desc: "We don’t chase trends—we shape them. We design experiences that set benchmarks across industries.",
  },
  {
    icon: <BarChart2 size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "Data-Driven Decisions",
    desc: "We blend analytics with creativity, building solutions that are beautiful, measurable, and impactful.",
  },
  {
    icon: <Layers size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "Transparent Process",
    desc: "Expect clear, open communication through every phase of your project—we keep you confidently informed.",
  },
  {
    icon: <RefreshCw size={32} className="text-yellow-400 drop-shadow-glow" />,
    title: "Responsive Agility",
    desc: "Change is constant, and we’re built to adapt—fast. Your designs stay ahead of evolving user needs.",
  },
];

export default function ServiceWhyPartnerSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: idx * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-[#1a0e1c] text-white py-20 relative z-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 px-4">
        {/* Left: Title + Image */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight whitespace-pre-line tracking-tight">
              WHY{"\n"}PARTNER{"\n"}WITH{"\n"}MUSEMIND?
            </h2>
          </div>
        </div>

        {/* Right: Feature Cards */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {features.map((item, idx) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="flex flex-col gap-3 p-6 border border-[#2e2e2e] rounded-xl shadow hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-lg font-semibold group-hover:text-gray-800 duration-200 transition">{item.title}</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-600 duration-200 transition">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Glowing gradient background blur */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#fd5001] rounded-full blur-[120px] pointer-events-none z-[-1]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#fd5001] rounded-full blur-[100px] pointer-events-none z-[-1]" />

      {/* Icon glow effect */}
      <style jsx global>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 6px #facc15);
        }
      `}</style>
    </section>
  );
}
