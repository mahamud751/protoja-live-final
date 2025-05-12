import React from "react";

const texts = [
  "Slide Decks",
  "Mobile Apps",
  "Figma",
  "Social Media",
  "Framer",
  "Branding",
  "Dashboard",
  "Logos",
  "Webflow",
];

const Slider = () => {
  const repeatedTexts = [...texts, ...texts];

  return (
    <div className="overflow-hidden w-full py-10">
      <div className="whitespace-nowrap animate-scrollLeftToRight flex items-center gap-6">
        {repeatedTexts.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-lg md:text-2xl font-medium bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
              {item}
            </span>
            <span className="text-white text-3xl leading-none">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
