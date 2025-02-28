"use client";

import SpinHome from "../home/SpinHome";

const WorksTop = () => {
  return (
    <>
      <div className="relative h-screen bg-white">
        <div className="relative z-10 h-full text-white px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex items-center h-full">
            <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12">
              <h6 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] text-[#161616] font-bold md:w-[60%] lg:w-[50%] leading-tight">
                We craft interactive experiences
              </h6>
              <div className="md:mt-[120px] ml-[200px]">
                <SpinHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksTop;
