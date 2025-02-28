"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import Info from "./Info";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      id: "01",
      title: "Research",
      details: ["Understand", "Observe", "Research", "Analysis"],
    },
    {
      id: "03",
      title: "Design",
      details: ["Summary", "Requirements", "Feature priority", "Brand guide"],
    },
    {
      id: "04",
      title: "Prototype",
      details: ["Ideation", "Wireframes", "Visual Research", "Visual Design"],
    },
    // {
    //   id: "07",
    //   title: "Test",
    //   details: ["Conduct Usability Testing", "Iterate"],
    //   description:
    //     "Validate the design with real users to ensure it meets their expectations.",
    //   image: "/assets/branding/faq-image.png", // Example image path
    // },
  ];

  return (
    <>
      {" "}
      {/* Mockup Image */}
      <div className="bg-black text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <span className="bg-orange-600 text-black text-sm font-bold px-3 py-1 rounded">
              DESIGN PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl text-white font-bold mt-4">
              User-Centered Design Approach
            </h2>
          </div>

          {/* Accordion Steps */}
          <div className="space-y-6 ">
            {steps.map((step, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left py-4"
                >
                  <div className="flex items-center space-x-4">
                    <span className="bg-gray-800 text-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                      {step.id}
                    </span>
                    <h3 className="text-lg md:text-xl text-white font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <AiOutlineMinus className="text-white text-xl" />
                  ) : (
                    <AiOutlinePlus className="text-white text-xl" />
                  )}
                </button>

                {/* Expanded Content */}
                {openIndex === index && (
                  <div className="mt-4 ml-10 text-gray-400 text-sm space-y-4">
                    {step.description && <p>{step.description}</p>}
                    <ul className="list-none space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="text-orange-500">➤</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Conditionally Render Image */}
                    {step.image && (
                      <div className="mt-4">
                        <Image
                          src={step.image}
                          alt={step.title}
                          width={600}
                          height={400}
                          className="w-full rounded-lg"
                          layout="responsive"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="bg-black text-white py-16 ">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Section - Text Content */}
              <div>
                <div className="flex items-center space-x-3">
                  <span className="bg-gray-800 text-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                    07
                  </span>
                  <h3 className="text-2xl font-semibold text-white">Test</h3>
                </div>

                <p className="text-gray-400 mt-2 text-sm">
                  Validate the design with real users to ensure it meets their
                  expectations.
                </p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-orange-500">➤</span>
                    <span>Conduct Usability Testing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-orange-500">➤</span>
                    <span>Iterate</span>
                  </li>
                </ul>
              </div>

              {/* Right Section - Image */}
              <div className="flex justify-end">
                <Image
                  src="/assets/service.png"
                  alt="Usability Testing"
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
