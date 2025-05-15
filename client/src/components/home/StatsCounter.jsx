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
    <section className="lg:py-32 bg-[#1a0e1c]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-16 leading-tight text-[#fd5001]">
          <span className="italic font-serif">Our</span>{' '}
          <span className="font-semibold">STORY, BY NUMBERS</span>
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
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false, // allow reset
  });

  const count = useCountUp(inView, value, 1200);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center text-center p-6 rounded-2xl border-2 border-white/20 shadow-md overflow-hidden opacity-0 animate-fade-in-up"
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

      <span className="text-4xl md:text-5xl font-bold tabular-nums tracking-tight text-white text-center">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-base text-white/50 font-medium">{label}</span>
    </div>
  );
}
