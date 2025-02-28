"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";

import Image from "next/image";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      title: "What are your focus areas as a UI/UX agency?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 2,
      title: "What sets Musemind apart from other top UI/UX design agencies?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 3,
      title:
        "What services do you offer for start-ups, and how can they add value to my business?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 4,
      title:
        "Can you help us redesign our app, website, or enterprise/B2B software?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 5,
      title: "How do you estimate the time for the UI/UX project?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
    {
      id: 6,
      title: "How much does a UI/UX design project cost?",
      desc: "Though UI/UX design costs depend highly on your project goal, duration, and deliverables, our solution normally starts from $3000. However, our pricing plan is not fixed. Normally, we encourage you to contact us via scheduling and meeting by submitting the contact form. We also reach out to the clients if they want. After hearing your requirements or plan, we deliver a detailed project proposal along with the pricing plan discussed in detail, subject to be altered based on mutual discussion.",
    },
  ];

  const [expanded, setExpanded] = useState(0);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? false : index);
  };

  return (
    <Box className="mt-20">
      <Typography className="font-semibold text-[12px] uppercase text-[#F76F00] text-center rounded-[10px] border border-solid border-[#454750] p-2 w-[80px]">
        Faq
      </Typography>

      <Typography className="text-5xl font-bold text-white mb-8 mt-4">
        Your questions matter to us!
      </Typography>
      <Typography className="text-xl font-semibold text-white mt-4">
        Still have a question? Contact us at:
      </Typography>
      <Typography className="text-xl font-semibold  text-white mb-8">
        hello@protoja.com
      </Typography>

      {faqs.map((data, i) => (
        <Accordion
          key={data.id}
          expanded={expanded === i}
          onChange={() => handleToggle(i)}
          className={`border-t-2 border-gray-700 transition-all duration-300 bg-[#202124] shadow-none
          `}
        >
          <AccordionSummary
            expandIcon={
              expanded === i ? (
                <Image
                  src="/assets/minus1.png"
                  alt="minus"
                  width={14}
                  height={15.99}
                />
              ) : (
                <Image
                  src="/assets/plus.png"
                  alt="plus"
                  width={14}
                  height={15.99}
                />
              )
            }
            className="px-4 py-2 text-white"
          >
            <div>
              <div className="rounded-[10px] border border-solid border-[#454750] px-2 py-2 flex justify-between w-[60px]">
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
              </div>

              <Typography className="font-semibold text-lg sm:text-xl mt-2">
                {data.title}
              </Typography>
            </div>
          </AccordionSummary>

          <AccordionDetails className="px-4 py-2 text-gray-300">
            <Typography className="text-base sm:text-lg leading-relaxed">
              {data.desc}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
