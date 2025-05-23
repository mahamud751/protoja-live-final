'use client';

import { useState, useEffect } from 'react';
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
    const [maxVisible, setMaxVisible] = useState(3);
    const [direction, setDirection] = useState(0); 

    const totalSteps = steps.length;

    useEffect(() => {
        const updateMaxVisible = () => {
            if (window.innerWidth < 640) {
                setMaxVisible(1);
            } else if (window.innerWidth < 1024) {
                setMaxVisible(2);
            } else {
                setMaxVisible(3);
            }
        };

        updateMaxVisible(); 
        window.addEventListener('resize', updateMaxVisible);
        return () => window.removeEventListener('resize', updateMaxVisible);
    }, []);

    const handleNext = () => {
        setDirection(1);
        setStartIndex((prev) => (prev + 1) % totalSteps);
    };

    const handlePrev = () => {
        setDirection(-1);
        setStartIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
    };

    // Calculate the steps to display, handling wrap-around
    const visibleSteps = [];
    if (totalSteps > 0) {
        for (let i = 0; i < maxVisible; i++) {
            const stepIndex = (startIndex + i) % totalSteps;
            visibleSteps.push(steps[stepIndex]);
        }
    }
    
    // Animation variants for the group of cards
    const groupVariants = {
        initial: (customDirection) => ({
            opacity: 0,
            x: customDirection === 0 ? 0 : (customDirection === 1 ? '30%' : '-30%'),
        }),
        animate: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        },
        exit: (customDirection) => ({
            opacity: 0,
            x: customDirection === 1 ? '-30%' : '30%',
            transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
        }),
    };

    return (
        <section className="text-white bg-[#1a0e1c] lg:py-24 py-16 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Subtitle with ping */}
                <div className="flex justify-center items-center gap-2 mb-4">
                    <span className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe9667] opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-[#fd5001]" />
                    </span>
                    <p className="uppercase font-semibold tracking-widest text-white text-xs sm:text-sm text-center">
                        Our Approach
                    </p>
                </div>

                {/* Title */}
                <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-[#fd5001]">
                    Live in <span className="line-through text-[#fe9667]">Months</span>{' '}
                    <span className="text-[#fd5001]">Weeks</span>
                </h2>
            </div>

            {/* Slider Container */}
            <div className="relative max-w-6xl mx-auto px-4 mt-12 sm:mt-16 md:mt-20">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={startIndex} 
                        custom={direction} 
                        variants={groupVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="min-h-[300px] sm:min-h-[350px]" 
                    >
                        <div className={`grid grid-cols-1 ${maxVisible === 2 ? 'sm:grid-cols-2' : ''} ${maxVisible === 3 ? 'lg:grid-cols-3' : ''} gap-4 sm:gap-6`}>
                            {visibleSteps.map((step, index) => (
                                <div
                                    key={step.title + '-' + index} 
                                    className="relative z-0 flex flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-3xl border-2 border-white/10 hover:border-white/30 p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-[#fd5001]/20 overflow-hidden transition-all duration-300 ease-in-out group hover:bg-white/5"
                                >
                                    {/* Grain effect background */}
                                    <div
                                        className="absolute inset-0 -z-10 opacity-5 group-hover:opacity-10 transition-opacity"
                                        style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover' }}
                                    />
                                    <div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#fd5001] transition-colors duration-300">{step.title}</h3>
                                        <p className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-0 sm:px-2 md:px-4 transform -translate-y-1/2 z-10">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Step"
                        className="bg-[#fe9667]/80 hover:bg-[#fd5001] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#fd5001] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={totalSteps <= maxVisible} 
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Step"
                        className="bg-[#fe9667]/80 hover:bg-[#fd5001] text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#fd5001] focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={totalSteps <= maxVisible} 
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
