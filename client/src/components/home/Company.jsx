"use client";

import { Typography } from "@mui/material";
import Slider from "./Slider";
import Slider2 from "./Slider2";

const Company = () => {
  return (
    <div className="mt-24 sm:mt-32 md:mt-48 mb-16 sm:mb-24 md:mb-36">
      <Typography
        variant="h6"
        color="initial"
        className="text-center w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-8 md:py-12 px-4 sm:px-12 md:px-24 lg:px-32 leading-tight"
      >
        We've partnered with the world's leading innovators to create impactful
        products and elevate them to the next level
      </Typography>

      <div className="mt-8 sm:mt-12 md:mt-16">
        <Slider />
        <Slider2 />
        <Slider />
      </div>
    </div>
  );
};

export default Company;
