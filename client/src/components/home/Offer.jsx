"use client";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "UI UX Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 2,
      title: "Mobile App Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 3,
      title: "Web App Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 4,
      title: "SaaS Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 5,
      title: "MVP Development",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
    {
      id: 6,
      title: "Brand Design",
      desc: "Our refund policy allows refunds within 30 days of purchase if you are not satisfied with our product or service.",
      services: [
        "Legacy Modernization",
        "Solution Design",
        "Technology Enabling",
        "Mobile-First Systems",
      ],
      image: "/assets/service.png",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleHover = (index) => {
    setExpanded(index);
  };

  const handleLeave = () => {
    setExpanded(null);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Typography className="font-semibold text-[12px] uppercase text-[#F76F00] text-center rounded-[10px] border border-solid border-[#454750] p-2 w-[130px]">
            What we offer
          </Typography>
        </div>
        <div className="rounded-[10px] border border-solid border-[#454750] p-2 w-[160px] flex justify-between">
          <Typography className="font-semibold text-[12px] text-white text-center">
            View All Service
          </Typography>
          <Image
            src="/assets/arrow2.png"
            alt="service"
            width={14}
            height={15.99}
          />
        </div>
      </div>

      <Typography className="text-5xl font-bold text-white mb-8 mt-4">
        Most <span className="font-normal">Experienced</span> Services
      </Typography>

      {offers.map((data, i) => (
        <div
          key={data.id}
          className={`border-t-2 border-gray-700 transition-all duration-300 bg-[#202124] shadow-none p-4 text-white cursor-pointer`}
          onMouseEnter={() => handleHover(i)}
          onMouseLeave={handleLeave}
        >
          <div className="flex flex-col mt-4 ">
            <motion.div
              className={`rounded-[10px] border border-solid border-[#454750] px-2 py-2 flex justify-between w-[60px]`}
              initial={{ marginTop: 0 }}
              animate={{
                marginTop: expanded === i ? "1rem" : "0",
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Typography className="font-semibold text-[12px]">
                0{data.id}
              </Typography>
              <div>
                <Image
                  src="/assets/arrow.png"
                  alt="service"
                  width={14}
                  height={15.99}
                />
              </div>
            </motion.div>
            <Typography
              className={`font-semibold sm:text-xl mt-2 ${
                expanded === i ? "mt-4" : "mt-0 transition-all duration-300"
              }`}
              style={{ fontSize: 30 }}
            >
              {data.title}
            </Typography>

            <motion.div
              className="flex justify-between mt-4"
              initial={{ opacity: 0 }}
              animate={{
                opacity: expanded === i ? 1 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Typography className="text-base sm:text-lg leading-relaxed w-[400px]">
                {expanded === i && <>{data.desc}</>}
              </Typography>

              <ul className="ml-5 mt-[-80px]">
                {expanded === i &&
                  data?.services?.map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Image
                        src={"/assets/leftArrow.png"}
                        alt="service"
                        width={8.75}
                        height={14}
                      />
                      {service}
                    </li>
                  ))}
              </ul>

              {expanded === i && (
                <motion.div
                  className="my-element"
                  initial={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  }}
                  animate={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-10deg) skew(0deg, 0deg)",
                  }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Image
                    src={data.image}
                    alt="service"
                    width={250}
                    height={250}
                    className="mt-[-130px]"
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
