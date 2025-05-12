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
    <div className="flex justify-between items-center mb-16 px-2">
      {/* Pagination Numbers */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-2 border rounded-lg transition ${
              currentPage === number
                ? "bg-white/20 text-white"
                : "text-white hover:bg-white/20"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
