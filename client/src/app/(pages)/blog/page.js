import BlogCard from "@/components/blog/BlogCard";
import Pagination from "@/components/blog/Pagination";

export default function BlogPage() {
  return (
    <div className="md:px-20 lg:px-24">
      <BlogCard />
      <Pagination />
    </div>
  );
}
