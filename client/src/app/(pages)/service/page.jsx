import React from "react";
import Contact from "@/components/home/Contact";
import Company from "@/components/home/Company";
import StatsSection from "@/components/home/StatsSection";
import ServiceOffer from "@/components/service/ServiceOffer";
import Question from "@/components/home/Question";
import ServiceTop from "@/components/service/ServiceTop";

const Service = () => {
  return (
    <>
      <ServiceTop />
      <ServiceOffer />
      <StatsSection header={"Kindness has an impact "} span={"in numbers"} />
      <Company />
      <Question header={"You feel it too?"} />
      <Contact page="serice" />
    </>
  );
};

export default Service;
