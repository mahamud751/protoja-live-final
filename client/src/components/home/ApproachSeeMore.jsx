import Image from "next/image";
import React from "react";

const ApproachSeeMore = () => {
  return (
    <div className="bg-neutral-800 pt-32 pb-8">
      <div className="flex justify-center">
        <button className="bg-white w-[160px] rounded-[1440px] text-black p-1">
          See more projects
        </button>
        <div className="flex overflow-hidden justify-center items-center px-2.5 bg-white rounded-2xl h-[33px] min-h-[33px] w-[33px]">
          <Image
            loading="lazy"
            src="/assets/scrool/arrow.png"
            className="object-contain self-stretch my-auto aspect-[0.93] w-[13px]"
            width={120}
            height={120}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ApproachSeeMore;
