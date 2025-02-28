"use client";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";
import LatestBlogs from "@/components/blogDetails/LatestBlogs";
import Contact from "@/components/home/Contact";
import UseFetch from "../../../../hook/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
const Page = ({ params: { id } }) => {
  const { data: blogMain } = UseFetch(`blogs/${id}`);
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    const response = await axios
      .get("http://localhost:8002/api/blogs")
      .catch((err) => {});
    //@ts-ignore
    setBlogs(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="md:px-20 lg:px-24">
      <BlogDetailsHero blogMain={blogMain} />
      <BlogDetails blogMain={blogMain} />
      <LatestBlogs blogs={blogs} />
      <Contact page="" />
    </div>
  );
};
export default Page;
