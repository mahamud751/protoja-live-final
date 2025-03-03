"use client";

import SpinHome from "../home/SpinHome";

const WorksTop = () => {
  return (
    <>
      <div className=" bg-white">
        <div className="flex justify-center items-center mt-[100px]">
          <div className="text-center">
            <h6 className="text-[74px]  text-[#161616] font-[700px]">
              We craft interactive
            </h6>

            <h6 className="text-[74px]  text-[#161616] font-[700px">
              experiences
            </h6>
          </div>
        </div>
        <div className="flex justify-end mr-[100px] mt-2">
          <SpinHome />
        </div>
      </div>
    </>
  );
};

export default WorksTop;
