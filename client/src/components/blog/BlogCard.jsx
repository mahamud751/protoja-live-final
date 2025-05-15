"use client";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import Pagination from "./Pagination";
import Link from "next/link";
import mockBlogData from './../../data/mockBlogData ';

export default function BlogCard() {
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState(mockBlogData);
  const [activeCategory, setActiveCategory] = useState("View all");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(8);

  useEffect(() => {
    setBlogData(mockBlogData);
    setFilteredData(mockBlogData);
  }, []);

  const handleTabChange = (categoryValue) => {
    setActiveCategory(categoryValue);
    setCurrentPage(1);
    if (categoryValue === "view-all") {
      setFilteredData(blogData);
    } else {
      const filtered = blogData.filter(
        (blog) => blog.type === categoryValue
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
      <section>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#fd5001] leading-tight my-32 mb-6 text-center md:text-left  inline-flex gap-2 md:uppercase tracking-widest">
          The Curiosity Blog
        </h1>

        <CategoryTabs onTabChange={handleTabChange} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 px-2">
          {currentBlogs?.map((card) => (
            <Link href={`/blog-details/${card._id}`} key={card._id}>
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={card.photos[0]}
                    alt={card.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between group">
                    <h2 className="text-2xl font-semibold text-[#fd5001] h-16">
                      {card.name}
                    </h2>
                    <MdArrowOutward size={20} className="text-[#ff8c00] group-hover:text-[#fd5001]" />
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
      </section>
    </>
  );
}
