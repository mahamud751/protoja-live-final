import BlogCard from "@/components/blog/BlogCard";
import BlogHeader from "@/components/blog/BlogHeader";
import Pagination from "@/components/blog/Pagination";
import Contact from "@/components/home/Contact";

export default function BlogPage() {
  return (
    <div className="md:px-20 lg:px-24">
      {/* <BlogHeader /> */}
      <BlogCard />
      <Pagination />
      {/* <Contact /> */}
    </div>
  );
}
