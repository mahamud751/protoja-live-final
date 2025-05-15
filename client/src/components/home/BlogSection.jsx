"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import grainImage from "@/assets/images/grain.jpg";
import mockBlogData from "@/data/mockBlogData ";

gsap.registerPlugin(ScrollTrigger);

export default function BlogSection() {
  const sectionRef = useRef(null);
  const firstRowImageRefs = useRef([]);
  const secondRowImageRefs = useRef([]);
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // Split mock data into two rows for desktop layout
  const firstRowBlogs = mockBlogData.slice(0, 3);
  const secondRowBlogs = mockBlogData.slice(3, 6);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!windowWidth) return;

    const firstRowImages = firstRowImageRefs.current;
    const secondRowImages = secondRowImageRefs.current;

    const animateRow = (images, rowIndex) => {
      const totalImages = images.length;
      const centerIndex = Math.floor(totalImages / 2);
      const containerWidth = containerRef.current.offsetWidth;
      const imageWidth = Math.min(500, windowWidth * 0.3);
      const spacing = Math.min(100, windowWidth * 0.05);

      gsap.set(images, { opacity: 0, x: 0, scale: 0 });
      gsap.set(images[centerIndex], { opacity: 1, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      });

      tl.to(
        images,
        {
          opacity: 1,
          scale: 1,
          x: (index) => {
            const offset = index - centerIndex;
            return offset * (imageWidth + spacing);
          },
          duration: 1,
          ease: "power2.out",
          stagger: 0.1,
        },
        rowIndex === 0 ? 0 : 0.5
      );
    };

    animateRow(firstRowImages, 0);
    animateRow(secondRowImages, 1);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [windowWidth]);

  const setImageRef = (rowRefs) => (el) => {
    if (el && !rowRefs.current.includes(el)) {
      rowRefs.current.push(el);
    }
  };

  const BlogCard = ({ blog }) => (
    <div className="relative z-0 flex flex-col gap-4 rounded-3xl bg-[#1a0e1c] p-4 md:p-6 shadow-md overflow-hidden transition"
      style={{ width: `${Math.min(500, windowWidth * 0.3)}px` }}>
      <div className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }} />
      
      <Link href={`/blog-details/${blog._id}`} className="block">
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <Image
            src={blog.photos[0]}
            alt={blog.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <h3 className="text-white text-lg font-semibold mt-4">{blog.name}</h3>
        <p className="text-white/60 text-sm">{blog.desc}</p>
      </Link>
    </div>
  );

  return (
    <div className="p-4 lg:py-16 w-full" ref={sectionRef}>
      <div className="text-center">
        <p className="uppercase font-semibold tracking-widest text-[#1A0E1C] text-center">
          Our Blog
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-[#fd5001]">
          Latest Trends and Updates
        </h2>
      </div>

      {windowWidth <= 768 ? (
        <div className="flex flex-col gap-6 mt-12">
          {mockBlogData.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <div
          ref={containerRef}
          className="relative w-full flex flex-col justify-center items-center overflow-hidden"
          style={{
            height: windowWidth > 1440 ? "1000px" : "1200px",
            gap: windowWidth > 1440 ? "150px" : "200px",
          }}
        >
          {/* First Row */}
          <div className="relative w-full flex justify-center items-center">
            {firstRowBlogs.map((blog) => (
              <div
                key={blog._id}
                ref={setImageRef(firstRowImageRefs)}
                className="absolute"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="relative w-full flex justify-center items-center mt-[300px]">
            {secondRowBlogs.map((blog) => (
              <div
                key={blog._id}
                ref={setImageRef(secondRowImageRefs)}
                className="absolute"
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
