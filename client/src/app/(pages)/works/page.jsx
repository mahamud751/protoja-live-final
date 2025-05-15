import React from "react";
import Company from "@/components/home/Company";
import CaseStudySection from "@/components/works/CaseStudySection";
import CaseStudiesGrid from "@/components/works/CaseStudiesGrid";

const Works = () => {
  return (
    <>
      <CaseStudySection />
      <CaseStudiesGrid />
      <Company />
    </>
  );
};

export default Works;
