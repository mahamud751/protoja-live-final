'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import grainImage from '@/assets/images/grain.jpg';

function useCountUp(startCounting, target, duration = 2000) {
  const [count, setCount] = useState(0);
  const rafId = useRef();

  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }

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

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);
  }, [startCounting, target, duration]);

  return count;
}

const stats = [
  { label: 'Team', value: 80, suffix: '+' },
  { label: 'Projects', value: 230, suffix: '+' },
  { label: 'Years', value: 9, suffix: '+' },
  { label: 'Industries', value: 25, suffix: '+' },
  { label: 'Awards', value: 10, suffix: '+' },
];

export default function StatsCounter() {
  return (
    <section className="bg-[#1a0e1c] py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-28 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-10 sm:mb-12 md:mb-16 leading-tight text-[#fd5001]">
          <span className="italic font-serif">Our</span>{' '}
          <span className="font-semibold">STORY, BY NUMBERS</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
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
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const count = useCountUp(inView, value, 1200);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border-2 border-white/20 shadow-md overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <span className="text-3xl sm:text-4xl md:text-5xl font-bold tabular-nums tracking-tight text-white">
        {count}
        {suffix}
      </span>
      <span className="mt-1 sm:mt-2 text-sm sm:text-base text-white/60 font-medium">{label}</span>
    </div>
  );
}
