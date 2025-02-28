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
        <div className="relative mb-12">
          <h1 className="text-center text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] pb-12 font-extrabold tracking-tight leading-none protoja-3d">
            {"Protoja".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </h1>
          <style jsx>{`
            .protoja-3d {
              color: transparent;
              background: linear-gradient(
                45deg,
                #ffffff,
                #d1d1d1
              ); /* White to light gray */
              -webkit-background-clip: text;
              background-clip: text;
              text-shadow: 4px 4px 0 #333333, 8px 8px 0 #1a1a1a,
                12px 12px 0 #0a0a0a, 16px 16px 20px rgba(0, 0, 0, 0.8);
              transform: perspective(500px) rotateX(15deg);
              letter-spacing: -0.05em;
              display: flex;
              justify-content: center;
              gap: 0.1em; /* Space between letters */
              position: relative;
            }

            .protoja-3d::before {
              content: "Protoja";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: rgba(255, 255, 255, 0.1); /* Subtle white overlay */
              text-shadow: none;
              z-index: -1;
              transform: perspective(500px) rotateX(15deg) translateZ(-20px);
            }

            /* Per-letter styling with white focus and subtle accents */
            .protoja-3d span {
              display: inline-block;
              position: relative;
              transition: transform 0.3s ease;
              color: #ffffff; /* Base white color */
            }

            .protoja-3d span:nth-child(1) {
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              -webkit-background-clip: text;
            } /* P */
            .protoja-3d span:nth-child(2) {
              background: linear-gradient(45deg, #ffffff, #b0b0b0);
              -webkit-background-clip: text;
            } /* r */
            .protoja-3d span:nth-child(3) {
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              -webkit-background-clip: text;
            } /* o */
            .protoja-3d span:nth-child(4) {
              background: linear-gradient(45deg, #ffffff, #b0b0b0);
              -webkit-background-clip: text;
            } /* t */
            .protoja-3d span:nth-child(5) {
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              -webkit-background-clip: text;
            } /* o */
            .protoja-3d span:nth-child(6) {
              background: linear-gradient(45deg, #ffffff, #b0b0b0);
              -webkit-background-clip: text;
            } /* j */
            .protoja-3d span:nth-child(7) {
              background: linear-gradient(45deg, #ffffff, #e0e0e0);
              -webkit-background-clip: text;
            } /* a */

            .protoja-3d span:hover {
              transform: translateZ(20px); /* 3D pop-up on hover */
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); /* White glow */
            }
          `}</style>
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
