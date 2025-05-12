"use client";
import { useState } from "react";

export default function CategoryTabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("View all");

  // Map display names to blog type keys
  const categories = [
    { label: "View all", value: "view-all" },
    { label: "Design", value: "design" },
    { label: "Product Design", value: "productivity" }, // mapped to 'productivity'
    { label: "UX Design", value: "design" }, // UX Design and Design share 'design' type
    { label: "UI Design", value: "design" }, // same as above
    // Add more mappings if needed
  ];

  const handleTabClick = (category) => {
    setActiveTab(category.label);
    onTabChange(category.value); 
  };

  return (
    <div className="flex flex-col px-2 sm:grid sm:grid-cols-12 border-b border-gray-200 pb-2 mt-3 gap-4 sm:gap-0">
      {/* Category Tabs */}
      <div className="w-full sm:col-span-10 flex flex-wrap gap-4 sm:gap-6">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleTabClick(category)}
            className={`relative text-sm sm:text-base md:text-lg pb-2 font-semibold transition whitespace-nowrap ${activeTab === category.label
                ? "bg-gradient-to-r from-blue-400 to-blue-300 text-transparent bg-clip-text"
                : "text-gray-600 hover:text-gray-500 "
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
