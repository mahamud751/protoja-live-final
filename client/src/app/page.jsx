import Company from "@/components/home/Company";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import HeroSection from "@/components/home/HeroSection";
import DesignForFutureSection from "@/components/home/DesignForFutureSection";
import StatsCounter from "@/components/home/StatsCounter";
import ProjectApproachSlider from "@/components/home/ProjectApproachSlider";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import BlogSection from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ProjectApproachSlider/>
      <DesignForFutureSection/>
      <Company />
      <StatsCounter/>
      <BlogSection/>
      <ProjectShowcase/>
    </>
  );
}
