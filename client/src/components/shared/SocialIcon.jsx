import Image from "next/image";
import React from "react";

function SocialIcon({ src, alt }) {
  return (
    <Image
      src={`/assets/footer/${src}.svg`}
      alt={alt}
      width={22}
      height={22}
      className="object-contain w-full aspect-square"
    />
  );
}

export default SocialIcon;
