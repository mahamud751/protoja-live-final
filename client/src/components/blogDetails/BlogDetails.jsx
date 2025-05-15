"use client";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import {
  Link as LucideLink,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function BlogDetails({ blogMain }) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-10 px-4 sm:px-6 lg:px-8">
      {/* Sidebar TOC */}
      <aside className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-xl lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto order-1">
        <h3 className="text-2xl font-semibold text-[#fd5001] mb-6">
          Table of Contents
        </h3>
        <ul className="space-y-4 text-base text-gray-700">
          {blogMain?.contents?.map((section, index) => (
            <li key={index}>
              <Link
                to={`section-${index}`}
                smooth={true}
                duration={500}
                offset={-60}
                className={`transition-colors duration-200 cursor-pointer hover:text-[#fd5001] ${
                  activeLink === `section-${index}` ? "text-[#ff8c00] font-medium" : ""
                }`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Share Icons */}
        <div className="mt-8 flex gap-4">
          <LucideLink className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition" />
          <Twitter className="w-6 h-6 text-gray-600 hover:text-[#fd5001] cursor-pointer transition" />
          <Facebook className="w-6 h-6 text-gray-600 hover:text-[#fd5001] cursor-pointer transition" />
          <Linkedin className="w-6 h-6 text-gray-600 hover:text-[#fd5001] cursor-pointer transition" />
        </div>
      </aside>

      {/* Main Blog Content */}
      <main className="lg:col-span-8 px-2 sm:px-4 py-2 sm:py-6 scroll-smooth order-2">
        {blogMain?.contents?.map((section, index) => (
          <InView
            as="section"
            id={`section-${index}`}
            key={index}
            onChange={(inView) => {
              if (inView) setActiveLink(`section-${index}`);
            }}
            className="mt-10"
          >
            <h2 className="text-3xl font-bold text-[#fd5001] mb-4 border-l-4 border-[#ff8c00] pl-4">
              {section.title}
            </h2>
            <div
              className="prose max-w-none text-gray-700 text-base sm:text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {section.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="overflow-hidden rounded-xl shadow-md"
                  >
                    <Image
                      src={image}
                      alt={`Section image ${imgIndex + 1}`}
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </InView>
        ))}
      </main>
    </div>
  );
}
