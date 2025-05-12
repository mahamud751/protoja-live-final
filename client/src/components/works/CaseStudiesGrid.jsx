"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Unicorn Platform",
    desc: "User-centric website design for mobile wellness services",
    image: "/case-study-02.jpg",
    tags: ["User Research", "UI Design", "Healthcare"],
  },
  {
    title: "Airtable",
    desc: "User experience design for inclusive financial solutions",
    image: "/case-study-03.jpg",
    tags: ["UX Research", "UI Design", "FinTech"],
  },
  {
    title: "ZenFlow",
    desc: "Minimalistic productivity tool for mental wellness tracking",
    image: "/case-study-04.jpg",
    tags: ["Wellness", "UI/UX", "Startup"],
  },
  {
    title: "Neobank Dashboard",
    desc: "Data visualization for modern banking experience",
    image: "/case-study-05.jpg",
    tags: ["FinTech", "Dashboard", "Data Viz"],
  },
  {
    title: "RemoteCollab",
    desc: "Digital collaboration suite for distributed teams",
    image: "/case-study-06.jpg",
    tags: ["SaaS", "Remote Work", "Design System"],
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="bg-[#181B1E] py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Row 1 – 2 items */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {caseStudies.slice(0, 2).map((study, i) => (
            <CaseStudyCard key={i} study={study} delay={i * 0.2} />
          ))}
        </div>

        {/* Row 2 – 1 item */}
        <div className="grid grid-cols-1">
          <CaseStudyCard study={caseStudies[2]} delay={0.3} />
        </div>

        {/* Row 3 – 2 items */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
          {caseStudies.slice(3, 5).map((study, i) => (
            <CaseStudyCard key={i} study={study} delay={i * 0.2} />
          ))}
        </div>

        {/* Row 4 – placeholder for future */}
        <div className="grid grid-cols-1">
          <CaseStudyCard
            study={{
              title: "Coming Soon",
              desc: "Another innovative project on the way. Stay tuned!",
              image: "/case-study-07.jpg",
              tags: ["UI/UX", "Strategy", "2025"],
            }}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image with hover scale */}
      <div className="overflow-hidden rounded-xl shadow-lg group mb-6 bg-[#1F2225]">
        <Image
          src={study.image}
          alt={study.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          priority
        />
      </div>
      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-2">{study.title}</h3>
      {/* Description */}
      <p className="text-gray-400 text-base mb-4">{study.desc}</p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {study.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#2A2D31] text-gray-200 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
