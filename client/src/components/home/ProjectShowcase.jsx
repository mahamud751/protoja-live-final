'use client';
import Link from 'next/link';
import grainImage from "@/assets/images/grain.jpg";

export default function ProjectShowcase() {
  return (
    <div className="relative flex items-center justify-center w-full px-4 lg:py-16 mb-24">
      {/* Outer Wrapper */}
      <div className="relative w-full max-w-[640px] p-8">
        {/* Dotted SVG Border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none -z-10"
          viewBox="0 0 104 104"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6ee7b7">
                <animate attributeName="offset" values="0%;100%" dur="6s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#38bdf8">
                <animate attributeName="offset" values="100%;200%" dur="6s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <rect
            x="2"
            y="2"
            width="100"
            height="100"
            rx="6"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.6"
            strokeDasharray="3 3"
            strokeDashoffset="0"
            style={{
              animation: 'border-dash 12s linear infinite',
            }}
          />
          <style>{`
            @keyframes border-dash {
              to {
                stroke-dashoffset: -60;
              }
            }
          `}</style>
        </svg>

        {/* Styled Content Card */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 rounded-2xl bg-gray-800 p-6 md:p-10 lg:p-12 overflow-hidden transition">
          {/* Grain background */}
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          <h2 className="text-3xl font-semibold text-center text-white mb-3 font-display tracking-tight">
            Your project here
          </h2>
          <p className="text-base text-center text-white/50 mb-5">
            The proof is in our work. Check out{' '}
            <Link
              href="/case-studies"
              className="text-blue-400 underline hover:text-blue-500 transition"
            >
              our case studies
            </Link>{' '}
            to learn how our product development services can transform your business.
          </p>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:brightness-110 text-white font-medium py-2.5 px-6 rounded-full shadow-sm hover:rounded-2xl transition duration-200"
            aria-label="Book a free discovery session"
          >
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M2 21l21-9-21-9v7l15 2-15 2v7z" />
            </svg>
            Book Free Discovery Session
          </Link>
        </div>
      </div>
    </div>
  );
}
