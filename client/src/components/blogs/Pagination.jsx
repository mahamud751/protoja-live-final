"use client";
export default function Pagination({
  blogsPerPage,
  totalBlogs,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center mb-4 px-2">
      {/* Pagination Numbers */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-2 border rounded-lg transition ${
              currentPage === number
                ? "bg-purple-600 text-white"
                : "text-gray-700 border-gray-300 hover:bg-purple-600 hover:text-white"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
