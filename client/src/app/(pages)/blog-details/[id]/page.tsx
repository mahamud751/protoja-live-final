"use client";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";
import LatestBlogs from "@/components/blogDetails/LatestBlogs";
import Contact from "@/components/home/Contact";
import UseFetch from "../../../../hook/useFetch";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Page = ({ params: paramsPromise }) => {
  // Unwrap params using React.use()
  const params = React.use(paramsPromise);
  //@ts-ignore
  const { id } = params; // Access id after unwrapping
  const { data: blogMain } = UseFetch(`blogs/${id}`);
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async () => {
    const response = await axios
      .get("https://api.protoja.com/api/blogs")
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
