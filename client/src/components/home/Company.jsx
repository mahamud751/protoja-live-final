"use client";

import Slider from "./Slider";
import Slider2 from "./Slider2";
import SliderReverse from "./SliderReverse";

const Company = () => {
  return (
    <div className="mt-24 sm:mt-32 md:mt-48 mb-16 sm:mb-24 md:mb-36">
      <div className="mt-8 sm:mt-12 md:mt-16">
        <Slider />
        <Slider2 />
        <SliderReverse />
      </div>
    </div>
  );
};

export default Company;
