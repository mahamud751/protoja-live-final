'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import grainImage from "@/assets/images/grain.jpg";

const steps = [
    {
        title: 'Kickoff & Align',
        description: 'We begin by clarifying your objectives and aligning on goals.',
    },
    {
        title: 'Plan & Validate',
        description: 'We craft a strategic plan and get your sign-off to move forward.',
    },
    {
        title: 'Design & Visuals',
        description: 'Our team crafts on-brand visuals and user-friendly layouts swiftly.',
    },
    {
        title: 'Develop & Iterate',
        description: 'We develop and iterate based on your feedback in quick sprints.',
    },
    {
        title: 'Launch & Support',
        description: 'We help launch your product and support post-launch success.',
    },
];

export default function ProjectApproach() {
    const [startIndex, setStartIndex] = useState(0);

    const totalSteps = steps.length;
    const maxVisible = 3;

    const next = () => {
        setStartIndex((prev) => (prev + 1) % totalSteps);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    };

    const visibleSteps = steps
        .slice(startIndex, startIndex + maxVisible)
        .concat(steps.slice(0, Math.max(0, startIndex + maxVisible - totalSteps)));

    return (
        <section className="text-white lg:py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Subtitle with ping */}
                <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="relative flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-400" />
                    </span>
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                        Our Approach
                    </p>
                </div>

                {/* Title */}
                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-gray-800">
                    Live in <span className="line-through text-gray-400">Months</span>{' '}
                    <span className="text-gray-800">Weeks</span>
                </h2>
            </div>

            {/* Timeline */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto mt-12 px-4">
                {steps.map((_, index) => (
                    <div key={index} className="flex items-center w-full">
                        <span className="relative flex h-5 w-5 items-center justify-center shrink-0">
                            {index === startIndex && (
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                            )}
                            <span
                                className={`relative inline-flex rounded-full h-5 w-5 transition-colors ${index === startIndex ? 'bg-blue-400' : 'bg-gray-600'
                                    }`}
                            />
                        </span>
                        {index !== steps.length - 1 && (
                            <div
                                className={`h-1 flex-1 mx-2 transition-all duration-300 ${index < startIndex ? 'bg-blue-400' : 'bg-blue-400 opacity-30'
                                    }`}
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Slider */}
            <div className="relative max-w-6xl mx-auto px-4 mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {visibleSteps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative z-0 flex flex-col gap-6 rounded-3xl border-2 border-white/20 bg-gray-800 p-6 md:p-10 lg:p-12 shadow-md overflow-hidden transition"
                            >
                                {/* Grain effect background */}
                                <div
                                    className="absolute inset-0 -z-10 opacity-5"
                                    style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover' }}
                                />
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{step.title}</h3>
                                    <p className="text-sm md:text-base text-white/50">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Arrows */}
                <button
                    onClick={prev}
                    className="absolute -left-4 md:-left-8 top-0 transform -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
                >
                    <ArrowLeft size={24} />
                </button>
                <button
                    onClick={next}
                    className="absolute -right-4 md:-right-8 top-0 transform -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-400 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
                >
                    <ArrowRight size={24} />
                </button>
            </div>
        </section>
    );
}
