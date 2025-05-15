import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { BadgeCheck } from "lucide-react";

const expertiseFields = [
  {
    labels: ["UI/UX", "Web Design"],
    title: "UI/UX Design",
    results: [
      { title: "Delivered a fully responsive interface." },
      { title: "Implemented advanced filtering and search options." },
      { title: "Added persistent cart functionality for seamless shopping." },
    ],
    highlight: {
      icon: "🧠",
      title: "User-first Design Thinking",
      description: "Every interface is crafted with empathy and usability at the core.",
    },
    image: "/assets/service/1.png",
  },
  {
    labels: ["SaaS", "Dashboard UI"],
    title: "SaaS Design",
    results: [
      { title: "Built a modern SaaS dashboard with advanced UI components." },
      { title: "Enhanced usability and onboarding through clean flows." },
      { title: "Improved retention and lowered churn with intuitive design." },
    ],
    highlight: {
      icon: "🚀",
      title: "Scalable Systems by Design",
      description: "Designed to grow with your product — from MVP to enterprise scale.",
    },
    image: "/assets/service/3.png",
  },
  {
    labels: ["Next.js", "Mobile Responsive"],
    title: "Mobile App Design",
    results: [
      { title: "Developed a mobile-first design for e-commerce apps." },
      { title: "Built interactive flows with swipe gestures and transitions." },
      { title: "Ensured smooth UX across all screen sizes." },
    ],
    highlight: {
      icon: "📱",
      title: "Touch-first Interactions",
      description: "Optimized for mobile gestures, fast feedback, and offline support.",
    },
    image: "/assets/scrool/4.png",
  },
  {
    labels: ["React", "Frontend Dev"],
    title: "Website Development",
    results: [
      { title: "Built high-performance websites with clean architecture." },
      { title: "Integrated CMS and dynamic content handling." },
      { title: "Optimized for speed, SEO, and accessibility." },
    ],
    highlight: {
      icon: "⚡",
      title: "Performance + SEO Optimized",
      description: "Built with clean code, fast loads, and discoverability in mind.",
    },
    image: "/assets/service/3.png",
  },
  {
    labels: ["Web App", "Interactive UI"],
    title: "Web App Design",
    results: [
      { title: "Designed complex interfaces with real-time interactions." },
      { title: "Created intuitive dashboards for admins and users." },
      { title: "Ensured responsiveness and modular code structure." },
    ],
    highlight: {
      icon: "🔐",
      title: "User-Centric Functionality",
      description: "Designed for clarity, security, and high efficiency.",
    },
    image: "/assets/scrool/1.png",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest text-[#1A0E1C] text-center">
            Our Expertise
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-[#fd5001]">
          What We Do
        </h2>

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {expertiseFields.map((project, index) => (
            <div
              key={project.title}
              className="bg-[#1a0e1c] rounded-3xl relative z-0 p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden border-2 border-white/20"
              style={{
                top: `calc(64px + ${index * 40}px)`,
                position: "sticky",
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative z-10">
                <div className="lg:pb-16">
                  {project.labels && (
                    <div className="bg-gradient-to-r from-[#fd5001] to-[#ff8c00] inline-flex gap-2 md:uppercase font-bold tracking-widest text-xs md:text-sm text-transparent bg-clip-text">
                      {project.labels.map((label, i) => (
                        <span key={i}>
                          {label}
                          {i < project.labels.length - 1 && " • "}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 text-white">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((res) => (
                      <li
                        key={res.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <BadgeCheck className="w-4 h-4" />
                        <span>{res.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight Block */}
                  {project.highlight && (
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                      <p className="text-sm md:text-base font-semibold text-white flex items-center gap-2">
                        <span className="text-xl">{project.highlight.icon}</span>
                        {project.highlight.title}
                      </p>
                      <p className="text-white/60 text-sm mt-1">
                        {project.highlight.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={480}
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
