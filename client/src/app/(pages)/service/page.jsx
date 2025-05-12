import React from "react";
import Contact from "@/components/home/Contact";
import Company from "@/components/home/Company";
import StatsSection from "@/components/home/StatsSection";
import ServiceOffer from "@/components/service/ServiceOffer";
import Question from "@/components/home/Question";
import ServiceTop from "@/components/service/ServiceTop";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import ServiceBrandingSection from "@/components/service/ServiceBrandingSection";
import ServiceUxUiSection from "@/components/service/ServiceUxUiSection";
import ServiceWebDesignSection from "@/components/service/ServiceWebDesignSection";
import ServiceMobileAppDesign from "@/components/service/ServiceMobileAppDesign";
import ServiceMvpDevelopment from "@/components/service/ServiceMvpDevelopment";
import ServiceWhyPartnerSection from "@/components/service/ServiceWhyPartnerSection";
import ServiceExpertiseSection from "@/components/service/ServiceExpertiseSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";

const Service = () => {
  return (
    <>
      <ServiceHeroSection />
      <ServiceBrandingSection/>
      <ServiceUxUiSection/>
      <ServiceWebDesignSection/>
      <ServiceMobileAppDesign/>
      <ServiceMvpDevelopment/>
      <ServiceExpertiseSection/>
      <ServiceWhyPartnerSection/>
      {/* <ServiceTop /> */}
      {/* <ServiceOffer /> */}
      {/* <StatsSection header={"Kindness has an impact "} span={"in numbers"} /> */}
      <Company />
      <ProjectShowcase/>
      {/* <Question header={"You feel it too?"} /> */}
      {/* <Contact page="serice" /> */}
    </>
  );
};

export default Service;
