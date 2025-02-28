import BlogCard from "@/components/blogs/BlogCard";
import BlogHeader from "@/components/blogs/BlogHeader";
import Pagination from "@/components/blogs/Pagination";
import Contact from "@/components/home/Contact";

export default function BlogPage() {
  return (
    <div className="md:px-20 lg:px-24">
      <BlogHeader />

      <BlogCard />
      <Pagination />
      <Contact />
    </div>
  );
}
