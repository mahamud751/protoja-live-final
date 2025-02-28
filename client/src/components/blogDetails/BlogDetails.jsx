"use client";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { FaFacebook, FaLink, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BlogDetails({ blogMain }) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 my-6 sm:my-8 lg:my-10 px-4 sm:px-6 lg:px-8">
      {/* Table of Contents - Top on mobile, Sidebar on desktop */}
      <div className="lg:col-span-4 bg-white p-4 sm:p-6 shadow-lg rounded-xl lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] overflow-y-auto order-1">
        <h3 className="text-xl sm:text-2xl font-semibold text-orange-600 mb-3 sm:mb-4">
          Table of Contents
        </h3>
        <ul className="list-decimal pl-4 space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
          {blogMain?.contents?.map((section, index) => (
            <li key={index}>
              <Link
                to={`section-${index}`}
                smooth={true}
                duration={500}
                className={`hover:text-orange-600 cursor-pointer ${
                  activeLink === `section-${index}` ? "text-orange-600" : ""
                }`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 sm:mt-8 flex justify-start space-x-3 sm:space-x-4">
          <FaLink className="w-6 sm:w-7 h-6 sm:h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100" />
          <FaXTwitter className="w-6 sm:w-7 h-6 sm:h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100" />
          <FaFacebook className="w-6 sm:w-7 h-6 sm:h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100" />
          <FaLinkedin className="w-6 sm:w-7 h-6 sm:h-7 p-1 bg-base-100 text-black rounded-full border-2 border-gray-100" />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-8 px-4 sm:px-6 py-6 sm:py-8 scroll-smooth order-2">
        {blogMain?.contents?.map((section, index) => (
          <InView
            as="section"
            id={`section-${index}`}
            key={index}
            onChange={(inView) => {
              if (inView) setActiveLink(`section-${index}`);
            }}
            className="mt-6 sm:mt-10"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
              {section.title}
            </h2>
            <div
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-5">
                {section.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`Section image ${imgIndex + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg w-full"
                  />
                ))}
              </div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
}
