import Image from "next/image";
import * as React from "react";

export default function Startup() {
  const [currentFact, setCurrentFact] = React.useState(0);

  const proFactsData = [
    {
      number: "200",
      description:
        "Startups we have helped in their growth journey over the past 6 years",
      img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2547f131f795ec919fb216bb9c4f16eafb56d27c4fd7769a04d1a4698c8b319",
      img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/bdd3c095-7e61-4366-b97f-3b3ecc9031e3",
    },
    {
      number: "150",
      description:
        "Projects completed for leading clients globally in the last 3 years",
      img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/your-image-1",
      img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/your-image-2",
    },
    {
      number: "50",
      description:
        "Countries we have served with our expert consulting services",
      img1: "https://cdn.builder.io/api/v1/image/assets/TEMP/your-image-3",
      img2: "https://cdn.builder.io/api/v1/image/assets/TEMP/your-image-4",
    },
  ];

  const handleNextFact = () => {
    setCurrentFact((prevFact) => (prevFact + 1) % proFactsData.length);
  };

  const handlePrevFact = () => {
    setCurrentFact(
      (prevFact) => (prevFact - 1 + proFactsData.length) % proFactsData.length
    );
  };

  return (
    <div className="flex overflow-hidden flex-col  sm:px-6 lg:px-20 pt-24 sm:pt-48 lg:pt-72 pb-8 sm:pb-12">
      <div className="flex flex-wrap gap-10 sm:gap-16 lg:gap-20 justify-center">
        {/* Pro Facts Section */}
        <div className="flex overflow-hidden flex-col pb-10 sm:pb-16 lg:pb-20 w-full sm:w-[300px] lg:w-[400px]">
          <div className="flex justify-between items-center pb-3.5 border-b border-solid border-b-neutral-50 text-neutral-50">
            <div className="text-sm sm:text-base font-semibold leading-none">
              Pro Facts
            </div>
            <div className="flex gap-1 text-sm whitespace-nowrap w-[58px]">
              <div className="flex justify-center items-start pr-3 leading-none min-h-[16px]">
                <div className="py-px h-4 w-[19px]">{`0${
                  currentFact + 1
                }`}</div>
              </div>
              <div className="leading-tight">/</div>
              <div className="py-px h-4 leading-none">03</div>
            </div>
          </div>

          <div className="flex mt-4 font-semibold tracking-tighter whitespace-nowrap text-neutral-50">
            <div className="text-4xl sm:text-5xl lg:text-6xl leading-none">
              {proFactsData[currentFact].number}
            </div>
            <div className="text-4xl sm:text-6xl lg:text-7xl leading-none">
              +
            </div>
          </div>

          <div className="mt-2 text-xs sm:text-sm leading-4 text-neutral-50">
            <div className="w-full sm:w-[280px] lg:w-[350px]">
              <div className="min-h-[65px] pr-2 sm:pr-5">
                {proFactsData[currentFact].description}
              </div>
            </div>
          </div>

          <div className="flex gap-8 sm:gap-12 items-start mt-6">
            {/* Left image for going to the previous fact */}
            <div
              className="flex justify-center items-center px-2.5 bg-white rounded-full h-[33px] w-[33px] cursor-pointer"
              onClick={handlePrevFact}
            >
              <img
                loading="lazy"
                src={"/assets/service/s2.png"}
                alt=""
                className="object-contain w-[13px]"
              />
            </div>
            <div
              className="flex justify-center items-center px-2.5 bg-white rounded-full h-[33px] w-[33px] cursor-pointer"
              onClick={handleNextFact}
            >
              <img
                loading="lazy"
                src={"/assets/service/s1.png"}
                alt=""
                className="object-contain w-[13px]"
              />
            </div>

            {/* Right image for going to the next fact */}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col flex-1 min-w-[240px] pr-4 sm:pr-20 lg:pr-60">
          <div className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-gray-200 leading-tight sm:leading-[72px]">
            Building brands for startups that
            <br />
            make people smile
          </div>

          <div className="flex flex-col mt-8 sm:mt-12 lg:mt-16 w-[152px]">
            <div className="flex items-center">
              <div className="px-4 sm:px-5 py-2 sm:py-2.5 text-base sm:text-lg font-semibold leading-none bg-orange-500 rounded-[1440px] text-neutral-50">
                About us
              </div>
              <div className="flex justify-center items-center px-3 bg-orange-500 rounded-full h-[39px] w-[39px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcc3b60ddc4f04bbe46c85eda2c221a00be06ab518cb68f438a1c09530254ae3"
                  alt=""
                  className="w-[15px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 sm:mt-20 lg:mt-32 ml-2.5 sm:ml-8 lg:ml-14 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tighter leading-none text-neutral-50">
        What we offer
      </div>
    </div>
  );
}
