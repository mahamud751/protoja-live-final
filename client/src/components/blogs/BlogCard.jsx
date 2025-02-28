"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import axios from "axios";
import Pagination from "./Pagination";
import Link from "next/link";

export default function BlogCard() {
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("View all");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/blogs");
        setBlogData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
    if (category === "View all") {
      setFilteredData(blogData);
    } else {
      const filtered = blogData.filter(
        (blog) => blog.type === category.toLowerCase().replace(" ", "-")
      );
      setFilteredData(filtered);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <CategoryTabs onTabChange={handleTabChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 px-2">
        {currentBlogs?.map((card) => (
          <Link href={`/blog-details/${card._id}`} key={card._id}>
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="relative w-full h-48">
                <Image
                  src={card.photos[0]}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-3">
                <div className="flex justify-between">
                  <h2 className="text-2xl font-semibold text-gray-800 h-16">
                    {card.name}
                  </h2>
                  <MdArrowOutward size={20} className="text-black" />
                </div>
                <p className="text-gray-600 mt-2 text-sm">{card.desc}</p>
              </div>
              <div className="p-3 text-gray-600 text-xs border-t border-gray-200">
                <div>
                  <span>{card.author}</span>
                </div>
                <div>
                  <span>{new Date(card.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}
