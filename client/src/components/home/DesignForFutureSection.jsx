'use client';
import React from "react";
import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";

const iconClass = "w-12 h-12 text-[#fd5001]";

const InfinityIcon = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.5 12a4.5 4.5 0 0 0-7-3.5 4.5 4.5 0 0 0-7 3.5 4.5 4.5 0 0 0 7 3.5 4.5 4.5 0 0 0 7-3.5z" />
    </svg>
);

const UserIcon = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
    </svg>
);

const DollarIcon = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" />
    </svg>
);

const PieChartIcon = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v10l7 7" />
    </svg>
);

const StarIcon = () => (
    <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 11 22 11 17 16 19 22 12 18 5 22 7 16 2 11 9 11 12 2" />
    </svg>
);

const Card = ({ Icon, title, description }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-0 flex flex-col gap-6 rounded-3xl border-2 border-white/20 p-6 md:p-10 lg:p-12 shadow-md overflow-hidden transition hover:bg-white duration-300 group"
    >
        <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: 'cover' }}
        />
        <div>
            <Icon />
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-black">{title}</h3>
            <p className="text-sm md:text-base text-white/50 group-hover:text-black/60">{description}</p>
        </div>
    </motion.div>
);

const DesignForFutureSection = () => {
    return (
        <section className="bg-[#1a0e1c] py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center">
                    <p className="uppercase font-semibold tracking-widest text-white">Why Choose Us</p>
                    <h2 className="font-serif text-3xl md:text-5xl mt-6 text-[#fd5001]">
                        We Design for the Future to <br className="hidden md:block" />
                        Drive Today’s Success
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-20">
                    <Card
                        Icon={InfinityIcon}
                        title="Unlimited Revisions"
                        description="We’re committed to your satisfaction with unlimited revisions at every step. Our mission is to make your vision come to life exactly as you imagine."
                    />
                    <Card
                        Icon={UserIcon}
                        title="Lifetime Support"
                        description="With our lifetime support, you’re never alone. We’ll be there for you at every stage with necessary guidance and assistance whenever you need it."
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-16">
                    <Card
                        Icon={DollarIcon}
                        title="Personalised Plans"
                        description="Get top-quality service without breaking the bank. Our rates are designed to fit your budget so that you can get the best value for your investment."
                    />
                    <Card
                        Icon={PieChartIcon}
                        title="Custom Design Solutions"
                        description="Our easy payment options are completely flexible. So, you can invest in your success while staying within your budget."
                    />
                    <Card
                        Icon={StarIcon}
                        title="24/7 Customer Support"
                        description="Benefit from the expertise of our carefully chosen resources that are designed to make your journey smooth and effortless with outstanding results."
                    />
                </div>
            </div>
        </section>
    );
};

export default DesignForFutureSection;
