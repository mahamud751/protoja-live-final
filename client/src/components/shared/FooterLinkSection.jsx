import React from "react";

function FooterLinkSection({ title, links }) {
  return (
    <div className="flex flex-col pb-5">
      <div className="w-full text-xs font-semibold leading-none text-white uppercase tracking-[2px]">
        {title}
      </div>
      <div className="flex flex-col mt-6 w-full text-sm leading-none text-zinc-300">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex flex-col items-start mt-4 w-full first:mt-0"
          >
            <div className="py-0.5">{link}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLinkSection;
