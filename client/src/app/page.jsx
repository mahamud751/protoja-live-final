import { Box, Container } from "@mui/material";
import Faq from "@/components/home/Faq";
import Question from "@/components/home/Question";
import Company from "@/components/home/Company";
import Contact from "@/components/home/Contact";
import Approach from "@/components/home/Approach";
import Trending from "@/components/home/Trending";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import HeroSection from "@/components/home/HeroSection";
import DesignForFutureSection from "@/components/home/DesignForFutureSection";
import StatsCounter from "@/components/home/StatsCounter";
import ProjectApproachSlider from "@/components/home/ProjectApproachSlider";
import ProjectShowcase from "@/components/home/ProjectShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ProjectApproachSlider/>
      <DesignForFutureSection/>
      {/* <Trending /> */}
      <Company />
      <StatsCounter/>
      <Approach />
      <ProjectShowcase/>
      {/* <Box className="w-full mt-20 px-3 sm:px-6 lg:px-16 bg-[#202124] p-16">
        <Container>
          <Faq />
        </Container>
      </Box>
      <Question header={"Unlock your new design team today."} />
      <Contact /> */}
    </>
  );
}
