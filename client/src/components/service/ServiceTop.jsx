"use client";

import SpinHome from "../home/SpinHome";

const ServiceTop = () => {
  return (
    <>
      <div className="relative h-screen bg-white">
        <div className="relative z-10 h-full text-white px-4 sm:px-8 md:px-12 lg:px-32">
          <div className="flex items-center h-full">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-12">
              <h6 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] text-[#161616] font-bold text-center md:text-left md:w-[60%] lg:w-[50%] leading-tight">
                Helping You Bring Ideas to Life with Care and Creativity
              </h6>

              <div className="md:mt-[120px] ml-[140px] md:mr-[120px] lg:mr-[200px]">
                <SpinHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTop;
