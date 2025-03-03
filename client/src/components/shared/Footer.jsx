"use client";
import React from "react";
import SocialIcon from "./SocialIcon";
import FooterLinkSection from "./FooterLinkSection";
import Image from "next/image";

function Footer() {
  const services = [
    "UI/UX Design",
    "Web Design",
    "Branding",
    "MVP Development",
    "SaaS Design",
    "Mobile App",
    "Design System",
  ];

  const quickLinks = [
    "Home",
    "Work",
    "Contact",
    "Pricing",
    "Our Process",
    "Blog",
  ];

  const reviews = ["Clutch", "Behance", "Dribbble"];

  const socialIcons = [
    {
      src: "linkdin",
      alt: "Social media icon",
    },
    {
      src: "insta",
      alt: "insta",
    },
    {
      src: "twitter",
      alt: "twitter",
    },
    {
      src: "youtube",
      alt: "twitter",
    },
    {
      src: "facebook",
      alt: "facebook",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pt-24 bg-neutral-900">
      <div className="flex flex-col self-center px-10 max-w-full w-[1370px] max-md:px-5">
        <div className="flex flex-wrap gap-5 justify-between items-start pb-3 w-full max-md:max-w-full">
          <div className="flex flex-col self-stretch">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="flex justify-center items-center pt-px max-w-full w-[114px]">
                  <div>
                    <Image
                      loading="lazy"
                      src={"/assets/plogo.png"}
                      alt="Company logo"
                      width={214}
                      height={114}
                      className="object-contain self-stretch my-auto rounded-none aspect-[43.78px] w-[43.78px]"
                    />
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      src={"/assets/cname.png"}
                      alt="Company logo"
                      width={114}
                      height={114}
                      className="object-contain self-stretch my-auto rounded-none ms-2"
                    />
                  </div>
                </div>
                <div className="mt-6 w-full text-base leading-6 text-zinc-400">
                  An Experienced UX Design Studio focusing on crafting
                  <br />
                  functional, simple, human-centered digital products for
                  <br />
                  future.
                </div>
              </div>
              <button className="flex items-center mt-14 w-full text-base font-medium tracking-normal leading-7 text-black max-md:mt-10">
                <div className="flex overflow-hidden justify-center items-center self-stretch px-6 py-3 my-auto bg-orange-500 max-w-[400.8px] rounded-[100px] max-md:px-5">
                  <div className="self-stretch my-auto">Contact us now</div>
                </div>
              </button>
            </div>
            <div className="flex justify-center items-center self-start mt-16 max-md:mt-10">
              <div className="flex flex-col items-start self-stretch pr-3.5 my-auto min-h-[36px] w-[50px]">
                <div className="flex justify-center items-center pr-3 pl-3 w-9 h-9 bg-orange-500 min-h-[36px] rounded-[100px]">
                  <div className="flex flex-col flex-1 shrink self-stretch pt-1.5 pb-2 my-auto w-full basis-0">
                    <Image
                      loading="lazy"
                      src={"/assets/arrow7.png"}
                      alt="Company deck icon"
                      width={114}
                      height={114}
                      className="object-contain w-full aspect-[0.81]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col self-stretch my-auto font-medium w-[168px]">
                <div className="w-full text-2xl leading-none text-white">
                  Company Deck
                </div>
                <div className="w-full text-sm leading-7 text-zinc-500">
                  PDF, 3 MB
                </div>
              </div>
            </div>
          </div>

          <FooterLinkSection title="Services" links={services} />
          <FooterLinkSection title="QUICK LINK" links={quickLinks} />
          <FooterLinkSection title="Review" links={reviews} />
        </div>
        <div className="relative">
          <Image
            src={"/assets/footer.png"}
            alt="Footer background"
            priority
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-9 pt-7 pb-6 w-full border-t border-solid border-t-neutral-700 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-none md:flex-1  shrink justify-between items-center self-stretch px-10 my-auto w-full basis-0 max-w-[1370px] min-w-[240px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap flex-1 shrink gap-5 justify-between self-stretch py-2.5 my-auto w-full basis-0  max-md:max-w-full">
            <div className="my-auto text-base leading-none text-zinc-400">
              <div className="w-full">
                © 2018-2025, Protoja Studio, All Rights Reserved.
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} src={icon.src} alt={icon.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
