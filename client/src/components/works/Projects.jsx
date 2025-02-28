"use client";
import React, { useEffect, useState } from "react";
import AllProjects from "./AllProjects";
import axios from "axios";

const Projects = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/product");
        setData(response.data);
        filterProjects("tab1", response.data); // Initially show featured data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  const openTab = (tab) => {
    setActiveTab(tab);
    filterProjects(tab, data);
  };

  const filterProjects = (tab, allData) => {
    if (tab === "tab1") {
      const featuredData = allData.filter((project) => project.featured); // Assuming 'featured' is a field
      setFilteredData(featuredData);
    } else if (tab === "tab2") {
      setFilteredData(allData); // Show all projects
    } else if (tab === "tab3") {
      const industryProjects = allData.filter(
        (project) => project.category === "Industries"
      ); // Assuming 'category' is a field
      setFilteredData(industryProjects);
    }
  };

  return (
    <div>
      <div className="w-full mt-[60px] sm:mt-[220px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-around gap-2 sm:gap-8 px-4 sm:px-0">
          <button
            className={`flex items-center justify-between sm:justify-start py-2 sm:py-4 focus:outline-none uppercase border-b sm:border-none sm:hover:text-gray-400 transition-colors`}
            onClick={() => openTab("tab1")}
          >
            <h1 className={`${activeTab === "tab1" ? "text-gray-400" : ""} text-sm sm:text-lg lg:text-xl`}>
              Featured
            </h1>
            <h1
              className={`text-[18px] sm:text-[28px] lg:text-[32px] sm:ml-4 ${
                activeTab === "tab1" ? "text-gray-400" : ""
              }`}
            >
              {filteredData.filter((project) => project.featured).length}
            </h1>
          </button>
          <button
            className={`flex items-center justify-between sm:justify-start py-2 sm:py-4 focus:outline-none uppercase border-b sm:border-none sm:hover:text-gray-400 transition-colors`}
            onClick={() => openTab("tab2")}
          >
            <h1 className={`${activeTab === "tab2" ? "text-gray-400" : ""} text-sm sm:text-lg lg:text-xl`}>
              All Projects
            </h1>
            <h1
              className={`text-[18px] sm:text-[28px] lg:text-[32px] sm:ml-4 ${
                activeTab === "tab2" ? "text-gray-400" : ""
              }`}
            >
              {data.length}
            </h1>
          </button>
          <button
            className={`flex items-center justify-between sm:justify-start py-2 sm:py-4 focus:outline-none uppercase border-b sm:border-none sm:hover:text-gray-400 transition-colors`}
            onClick={() => openTab("tab3")}
          >
            <h1 className={`${activeTab === "tab3" ? "text-gray-400" : ""} text-sm sm:text-lg lg:text-xl`}>
              Industries
            </h1>
            <h1
              className={`text-[18px] sm:text-[28px] lg:text-[32px] sm:ml-4 ${
                activeTab === "tab3" ? "text-gray-400" : ""
              }`}
            >
              {filteredData.filter((project) => project.category === "Industries").length}
            </h1>
          </button>
        </div>

        {/* Tab Content */}
        <div className={`tabcontent p-2 sm:p-4 ${activeTab === "tab1" ? "" : "hidden"}`}>
          <AllProjects projects={filteredData} />
        </div>
        <div className={`tabcontent p-2 sm:p-4 ${activeTab === "tab2" ? "" : "hidden"}`}>
          <AllProjects projects={filteredData} />
        </div>
        <div className={`tabcontent p-2 sm:p-4 ${activeTab === "tab3" ? "" : "hidden"}`}>
          <AllProjects projects={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
