import Image from "next/image";
import React from "react";

function SocialIcon({ src, alt }) {
  return (
    <div className="flex justify-center items-center self-stretch px-2 my-auto w-9 h-9 bg-neutral-700 max-w-[228px] min-h-[36px] rounded-[100px]">
      <div className="flex overflow-hidden flex-col flex-1 shrink self-stretch my-auto w-full basis-0 max-w-[36px]">
        <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[22px]">
          <Image
            src={`/assets/${src}.png`}
            alt={alt}
            width={36}
            height={36}
            className="object-contain w-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
}

export default SocialIcon;
