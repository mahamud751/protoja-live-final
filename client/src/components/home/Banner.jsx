import React from "react";

const SideBanner = () => {
  return (
    <div className="lg:grid lg:grid-cols-6 sm:grid-cols-12">
      <div className="lg:flex lg:order-last">
        <img src="your-image-url" alt="Your Image" className="w-full" />
      </div>
      <div className="lg:flex lg:order-first">
        <p>Your text goes here</p>
      </div>
    </div>
  );
};

export default SideBanner;
