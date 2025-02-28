"use client";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { useRef } from "react";

const AnimatedSection = ({ children, bgColor }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
