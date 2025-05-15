"use client";

import React from "react";
import BlogDetails from "@/components/blogDetails/BlogDetails";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";
import LatestBlogs from "@/components/blogDetails/LatestBlogs";
import mockBlogData from './../../../../data/mockBlogData ';

const Page = ({ params }) => {
  const { id } = params;
  const blogMain = mockBlogData.find(blog => blog._id === id);
  const latestBlogs = mockBlogData.filter(blog => blog._id !== id);

  if (!blogMain) {
    return <p className="text-center py-20 text-white">Blog post not found.</p>;
  }

  return (
    <div className="md:px-20 lg:px-24 py-32">
      <BlogDetailsHero blogMain={blogMain} />
      <BlogDetails blogMain={blogMain} />
      <LatestBlogs blogs={latestBlogs} />
    </div>
  );
};

export default Page;
