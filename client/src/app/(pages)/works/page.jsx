import React from "react";
import Contact from "@/components/home/Contact";
import Company from "@/components/home/Company";
import Question from "@/components/home/Question";
import WorksTop from "@/components/works/WorksTop";
import BasicTabs from "@/components/works/Projects";

const Works = () => {
  return (
    <>
      <WorksTop />
      <BasicTabs />
      <Company />
      <Question header={"You feel it too?"} />
      <Contact page="serice" />
    </>
  );
};

export default Works;
