import { Box, Container } from "@mui/material";

import Top from "@/components/home/Top";
import Faq from "@/components/home/Faq";
import Question from "@/components/home/Question";
import Company from "@/components/home/Company";
import StatsSection from "@/components/home/StatsSection";
import Contact from "@/components/home/Contact";
import Autorun from "@/components/home/Autorun";
import Approach from "@/components/home/Approach";
import Trending from "@/components/home/Trending";
import ApproachSeeMore from "@/components/home/ApproachSeeMore";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-800">
        <Top />
      </div>
      <Autorun />
      <Approach />
      <ApproachSeeMore />
      <Trending />
      <Company />
      <StatsSection
        header={"Crafting brands with kindness,"}
        span={"creating impact that counts"}
      />
      <Box className="w-full mt-20 px-3 sm:px-6 lg:px-16 bg-[#202124] p-16">
        <Container>
          <Faq />
        </Container>
      </Box>
      <Question header={"Unlock your new design team today."} />
      <Contact />
    </>
  );
}
