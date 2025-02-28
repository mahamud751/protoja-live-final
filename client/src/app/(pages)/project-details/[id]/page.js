"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Branding from "@/components/branding/Branding";
import ProjectCaseStudy from "@/components/branding/ProjectCaseStudy";

import Contact from "@/components/home/Contact";
import UseFetch from "@/hook/useFetch";

const Page = ({ params: paramsPromise }) => {
  // Unwrap params using React.use()
  const params = React.use(paramsPromise);
  const { id } = params; // Access id after unwrapping

  const { data } = UseFetch(`product/${id}`);
  const [project, setProjects] = useState();

  const fetchBlogs = async () => {
    const response = await axios
      .get("http://localhost:8002/api/product")
      .catch((err) => {
        console.error("Error fetching projects:", err);
      });
    setProjects(response?.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="">
      <Branding data={data} />

      <ProjectCaseStudy project={project} />
      <Contact />
    </div>
  );
};

export default Page;
