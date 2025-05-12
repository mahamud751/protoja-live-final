import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

export default function LatestBlogs({ blogs }) {
  const blogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Ref to the top container of the section
  const sectionRef = useRef(null);

  if (!blogs || blogs.length === 0) {
    return <p className="p-6 text-center text-gray-500">No blog posts found.</p>;
  }

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Calculate which blogs to show for current page
  const startIndex = (currentPage - 1) * blogsPerPage;
  const visibleBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);


  // Handlers for arrows
  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div ref={sectionRef}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:mb-6">
        <div>
          <p className="text-blue-600 font-semibold text-sm uppercase">
            Latest posts
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Protoja Blog</h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Interviews, tips, guides, industry best practices
          </p>
        </div>

        <Link
          href="/blogs"
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition text-sm font-medium"
        >
          View all posts
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {visibleBlogs.map((card) => (
          <Link
            href={`/blog-details/${card._id}`}
            key={card._id}
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg bg-white transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.photos[0]}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                  {card.name}
                </h2>
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{card.desc}</p>
            </div>
            <div className="px-4 py-2 border-t text-xs text-gray-500 flex justify-between items-center">
              <span>{card.author}</span>
              <span>{new Date(card.createdAt).toLocaleDateString()}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-4 mt-6 mb-6">
        <button
          onClick={goPrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
            currentPage === 1
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={goNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`w-10 h-10 flex items-center justify-center border rounded-full transition ${
            currentPage === totalPages
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
