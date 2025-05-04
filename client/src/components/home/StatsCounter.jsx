'use client'
import { useEffect, useRef, useState } from "react";
import grainImage from "@/assets/images/grain.jpg";

function useCountUp(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const rafId = useRef();
  const timeoutId = useRef();

  useEffect(() => {
    let start = null;

    function animate(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    timeoutId.current = setTimeout(() => {
      rafId.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      cancelAnimationFrame(rafId.current);
      clearTimeout(timeoutId.current);
    };
  }, [target, duration, delay]);

  return count;
}


const stats = [
  { label: "Team", value: 80, suffix: "+", },
  { label: "Projects", value: 230, suffix: "+", },
  { label: "Years", value: 9, suffix: "+", },
  { label: "Industries", value: 25, suffix: "+", },
  { label: "Awards", value: 10, suffix: "+", },
];

export default function StatsCounter() {
  return (
    <section className="py-20 mb-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-16 leading-tight text-white">
          <span className="italic font-serif">Our</span>{" "}
          <span className="font-semibold">
            STORY, BY NUMBERS
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {stats.map(({ label, value, suffix }, idx) => (
            <StatBlock
              key={label}
              label={label}
              value={value}
              suffix={suffix}
              delay={idx * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value, suffix, delay }) {
  // Fixed duration for count-up, delay controls start time
  const count = useCountUp(value, 1200, delay);

  return (
    <div
      className="relative flex flex-col items-center justify-center text-center p-6 rounded-2xl border-2 border-white/20 bg-gray-800 shadow-md overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }}
      ></div>

      <span className="text-4xl md:text-5xl font-bold tabular-nums tracking-tight bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
        {count}{suffix}
      </span>
      <span className="mt-2 text-base text-white/30 font-medium">{label}</span>
    </div>
  );
}

