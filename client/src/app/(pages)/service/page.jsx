import React from "react";
import Company from "@/components/home/Company";
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
      <ServiceBrandingSection />
      <ServiceUxUiSection />
      <ServiceWebDesignSection />
      <ServiceMobileAppDesign />
      <ServiceMvpDevelopment />
      <ServiceExpertiseSection />
      <ServiceWhyPartnerSection />
      <Company />
      <ProjectShowcase />
    </>
  );
};

export default Service;
