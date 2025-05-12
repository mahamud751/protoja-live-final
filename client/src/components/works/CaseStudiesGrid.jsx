"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Unicorn Platform",
    desc: "User-centric website design for mobile wellness services",
    image: "/case-study-01.jpg",
    tags: ["User Research", "UI Design", "Healthcare"],
  },
  {
    title: "Airtable",
    desc: "User experience design for inclusive financial solutions",
    image: "/case-study-02.jpg",
    tags: ["UX Research", "UI Design", "FinTech"],
  },
  {
    title: "ZenFlow",
    desc: "Minimalistic productivity tool for mental wellness tracking",
    image: "/case-study-03.jpg",
    tags: ["Wellness", "UI/UX", "Startup"],
  },
  {
    title: "Neobank Dashboard",
    desc: "Data visualization for modern banking experience",
    image: "/case-study-04.jpg",
    tags: ["FinTech", "Dashboard", "Data Viz"],
  },
  {
    title: "RemoteCollab",
    desc: "Digital collaboration suite for distributed teams",
    image: "/case-study-05.jpg",
    tags: ["SaaS", "Remote Work", "Design System"],
  },
  {
    title: "EcoShop",
    desc: "Green eCommerce platform with carbon tracking",
    image: "/case-study-06.jpg",
    tags: ["eCommerce", "Sustainability", "UX"],
  },
  {
    title: "Taskly",
    desc: "Task management app for remote-first teams",
    image: "/case-study-07.jpg",
    tags: ["Productivity", "Mobile", "UX"],
  },
  {
    title: "FitNest",
    desc: "Personal fitness tracking dashboard",
    image: "/case-study-08.jpg",
    tags: ["Fitness", "Dashboard", "HealthTech"],
  },
  {
    title: "CodeSnap",
    desc: "Snippet sharing platform for developers",
    image: "/case-study-09.jpg",
    tags: ["DevTools", "Community", "SaaS"],
  },
  {
    title: "EduBoard",
    desc: "Virtual classroom and LMS interface",
    image: "/case-study-10.jpg",
    tags: ["Education", "UI Design", "SaaS"],
  },
  {
    title: "Eventiva",
    desc: "Event management dashboard with analytics",
    image: "/case-study-11.jpg",
    tags: ["Events", "Admin", "UX"],
  },
  {
    title: "Coming Soon",
    desc: "Another innovative project on the way. Stay tuned!",
    image: "/case-study-12.jpg",
    tags: ["UI/UX", "Strategy", "2025"],
  },
];

export default function CaseStudiesGrid() {
  return (
    <section className="bg-[#eaeef1] px-4">
      <div className="max-w-7xl mx-auto space-y-20">
        {Array.from({ length: 8 }).map((_, rowIndex) => {
          const start = rowIndex % 2 === 0 ? (rowIndex / 2) * 3 : ((rowIndex - 1) / 2) * 3 + 2;
          const end = rowIndex % 2 === 0 ? start + 2 : start + 1;
          const rowStudies = caseStudies.slice(start, end);

          return (
            <div
              key={rowIndex}
              className={`grid ${
                rowStudies.length === 2 ? "md:grid-cols-2 gap-x-10 gap-y-16" : "grid-cols-1"
              }`}
            >
              {rowStudies.map((study, i) => (
                <CaseStudyCard
                  key={i}
                  study={study}
                  delay={i * 0.2 + rowIndex * 0.1}
                />
              ))}
            </div>
          );
        })}
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
      <h3 className="text-gray-800 text-2xl font-semibold mb-2">{study.title}</h3>
      <p className="text-gray-600 text-base mb-4">{study.desc}</p>
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
