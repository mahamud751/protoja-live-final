"use client";

import SpinHome from "../home/SpinHome";

const WorksTop = () => {
  return (
    <>
      <div className=" bg-white">
        <div className="flex justify-center items-center mt-[100px]">
          <div className="text-center">
            <h6 className="text-[30px] md:text-[74px]  text-[#161616] font-[700px]">
              Helping You Bring Ideas to <br />
              Life with Care and
              <br />
              Creativity
            </h6>
          </div>
        </div>

        <div className="flex justify-end md:mr-[100px] md:mt-[-80px]">
          <SpinHome />
        </div>
        <h2 className="mt-40 md:mt-72">What we offer</h2>
      </div>
    </>
  );
};

export default WorksTop;
