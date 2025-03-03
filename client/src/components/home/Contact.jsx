"use client";
import { Box } from "@mui/material";
import * as React from "react";

const serviceOptions = [
  { id: 1, label: "UI|UX Design" },
  { id: 2, label: "Web Development" },
  { id: 3, label: "Technology Enabling" },
  { id: 4, label: "Mobile-First Systems" },
];
const budgetOptions = [
  { id: 1, label: "Less than $10,000" },
  { id: 2, label: "$10,000 - $50,000" },
  { id: 3, label: "More than $50,000" },
];
const formFields = [
  {
    id: "fullName",
    label: "Fill Name",
    type: "text",
    placeholder: "Full name",
  },
  {
    id: "companyName",
    label: "Company name",
    type: "text",
    placeholder: "Ex. google",
  },
  {
    id: "email",
    label: "Email*",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    id: "service",
    label: "Service required*",
    type: "select",
    placeholder: "select your service",
    options: serviceOptions,
  },
  {
    id: "budget",
    label: "Project budget*",
    type: "select",
    placeholder: "Select your Range",
    options: budgetOptions,
  },
];

function FormInput({ label, id, type, placeholder, options }) {
  if (type === "select") {
    return (
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] h-16 animate__animated animate__fadeInUp animate__delay-1s">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-zinc-400"
        >
          {label}
        </label>
        <div className="flex overflow-hidden gap-2 items-center w-full text-lg mt-1 font-semibold leading-none rounded-lg border border-solid bg-zinc-300 bg-opacity-30 border-zinc-300 text-neutral-900">
          <select
            id={id}
            className="bg-transparent border-none outline-none p-3 text-zinc-400"
            aria-label={label}
            defaultValue=""
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options?.map((option) => (
              <option key={option.id} value={option?.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] h-16 animate__animated animate__fadeInUp animate__delay-1s">
        <label
          htmlFor={id}
          className="text-sm font-medium leading-none text-zinc-400"
        >
          {label}
        </label>
        <div className="flex overflow-hidden gap-2 items-center w-full text-lg mt-1 font-semibold leading-none rounded-lg border border-solid bg-zinc-300 bg-opacity-30 border-zinc-300 text-neutral-900">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="mt-8 bg-transparent border-none outline-none p-2"
            aria-label={label}
          />
        </div>
      </div>
    );
  }
}

export default function Contact({ page }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <Box className={`${page === "create" ? "bg-[#E8E8E8]" : "bg-[#272727]"}`}>
      <div className={`flex flex-col`} ref={ref}>
        <div className="flex flex-col pb-48 w-full min-h-[899px] max-md:pb-24">
          <div className="flex flex-wrap gap-2 items-center  mt-28 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <div className="px-20 pt-32 pb-10 w-full max-md:px-5 max-md:pt-24 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div
                  className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full   ${
                    isVisible ? "" : ""
                  }`}
                >
                  <div
                    className="flex flex-col max-md:mt-10 bg-black"
                    style={{
                      height: "100%",
                    }}
                  >
                    <h1
                      className={`p-12 text-[68px] font-semibold text-white leading-[98px] max-md:text-4xl max-md:leading-10
                   `}
                    >
                      <span className="text-[#F76F00]">Let's TALK</span> ABOUT
                      YOU, YOUR COMPANY,{" "}
                      <span className="text-[#F76F00]">YOUR PRODUCT</span>, AND
                      YOUR <span className="text-[#F76F00]">GOALS</span>
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <form
                    className={`flex flex-col justify-center px-11 py-14 mx-auto w-full rounded-2xl bg-white max-md:px-5 max-md:mt-4 max-md:max-w-full 
                  
                    ${isVisible ? "animate__animated animate__fadeInRight" : ""}
                   `}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    <div className="flex flex-col w-full max-md:max-w-full">
                      <FormInput {...formFields[0]} />
                    </div>
                    <div className="flex flex-wrap gap-10 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
                      <FormInput {...formFields[1]} />
                      <FormInput {...formFields[2]} />
                    </div>
                    <div className="flex flex-wrap gap-10 items-start mt-11 w-full max-md:mt-10 max-md:max-w-full">
                      <FormInput {...formFields[3]} />
                      <FormInput {...formFields[4]} />
                    </div>

                    <div className="flex flex-col mt-11 w-full min-h-[180px] max-md:mt-10 max-md:max-w-full">
                      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
                        <label
                          htmlFor="projectDetails"
                          className="text-sm font-medium leading-none text-zinc-400"
                        >
                          Project details*
                        </label>
                        <textarea
                          id="projectDetails"
                          className="overflow-hidden flex-1 shrink gap-2 px-3.5 py-6 mt-1.5 text-lg font-semibold leading-6 rounded-lg border border-solid shadow-sm bg-zinc-300 bg-opacity-30 border-zinc-300 size-full text-neutral-900 max-md:max-w-full"
                          placeholder="Tell us more about your project idea"
                          aria-label="Project details"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className={`flex overflow-hidden justify-center items-center self-start px-6 py-3 mt-11 text-base font-medium tracking-normal leading-7 text-black bg-orange-500 rounded-[100px] max-md:px-5 max-md:mt-10 
                     `}
                    >
                      Send inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
