"use client";
import React, { useState } from "react";

const ExpandingGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      title: "Test",
      image: "/assets/portfolio/1.png",
    },
    {
      title: "Test",
      image: "/assets/portfolio/2.png",
    },
    {
      title: "Test",
      image: "/assets/portfolio/3.png",
    },
    {
      title: "Test",
      image: "/assets/portfolio/4.png",
    },
    {
      title: "Test",
      image: "/assets/portfolio/5.png",
    },
  ];

  return (
    <div className="bg-black h-[100vh]">
      <div className="py-56 px-20">
        <div className="flex h-[80vh] border-neutral-100 border-t-2 rounded-tl-2xl">
          {panels.map((panel, index) => (
            <div
              key={index}
              className={`bg-cover bg-no-repeat relative cursor-pointer
                    rounded-tl-2xl border-t-2 border-l-2 text-white shadow-inner text-shadow transition-all duration-700 ease-in-out 
                                                ${
                                                  activeIndex === index
                                                    ? "flex-[5]"
                                                    : "flex-[0.5]"
                                                }
                                                `}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
              style={{ backgroundImage: `url(${panel.image})` }}
            >
              <h3
                className={`absolute bottom-5 left-12 text-3xl opacity-0 transition-opacity 
                                                        ${
                                                          activeIndex === index
                                                            ? "opacity-100 duration-1000 delay-300"
                                                            : ""
                                                        }
                                                `}
              >
                {panel.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandingGallery;
