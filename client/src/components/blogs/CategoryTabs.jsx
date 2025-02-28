"use client";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai"; // Dropdown arrow icon

export default function CategoryTabs({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("View all");

  const categories = [
    "View all",
    "Design",
    "Product Design",
    "UX Design",
    "UI Design",
  ];

  const handleTabClick = (category) => {
    setActiveTab(category);
    onTabChange(category); // Pass the selected category to the parent
  };

  return (
    <div className="flex flex-col px-2 sm:grid sm:grid-cols-12 border-b border-gray-200 pb-2 mt-3 gap-4 sm:gap-0">
      {/* Category Tabs */}
      <div className="w-full sm:col-span-10 flex flex-wrap gap-4 sm:gap-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`text-sm sm:text-base md:text-lg pb-2 transition whitespace-nowrap ${
              activeTab === category
                ? "text-orange-600 font-semibold border-b-2 border-orange-500"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dropdown Filter */}
      <div className="w-full sm:col-span-2 bg-white border border-gray-300 px-3 sm:px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition">
        <div className="flex justify-between items-center">
          <button className="text-sm sm:text-base">Most recent</button>
          <AiOutlineDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </div>
  );
}
