"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const Question = ({ header }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
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
    <div className="bg-[#272727] p-3 md:p-6 lg:p-8" ref={ref}>
      <div className="flex flex-col">
        <div className="flex flex-col  md:pb-32 lg:pb-48 w-full min-h-[600px] md:min-h-[750px] lg:min-h-[899px]">
          <div className="flex flex-wrap gap-4 justify-center items-center mt-10 md:mt-20 lg:mt-28">
            {/* Left Section */}
            <div
              className={`flex flex-col justify-center w-full md:w-auto px-4 md:px-6 py-8 md:py-11 rounded-2xl bg-white min-h-[400px] md:min-h-[505px] ${
                isVisible ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <p className="text-black text-3xl md:text-4xl lg:text-5xl">
                {header}
              </p>
              <p className="text-black font-light text-xl md:text-2xl mt-2">
                Let's talk, no strings attached
              </p>
              <div className="flex flex-col mt-8 md:mt-10 w-full">
                <div className="gap-2.5 self-stretch px-2.5 py-4 w-full text-4xl md:text-6xl lg:text-7xl font-bold border-b border-zinc-300 leading-[1.2] md:leading-[1.3] lg:leading-[1.4] text-neutral-700">
                  Let's work
                </div>
                <div className="flex text-black mt-12 md:mt-16 lg:mt-20">
                  <div>
                    <button className="px-4 md:px-6 py-2 bg-orange-500 min-w-[200px] md:min-w-[240px] rounded-[100px] text-sm md:text-base whitespace-nowrap">
                      Book a free Consultation today!
                    </button>
                  </div>
                  <div>
                    <Image
                      loading="lazy"
                      src="/assets/scrool/arrowo.png"
                      width={220}
                      height={220}
                      alt="arrow"
                      className="w-[30px] h-[30px] md:w-[39px] md:h-[39px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div
              className={`px-4 md:px-6 py-4 md:py-6 rounded-2xl bg-[#F76F00] w-full md:w-[309px] max-w-full overflow-hidden`}
              style={{ position: "relative", minHeight: "300px", md: "350px" }}
            >
              <div className="flex justify-center">
                <Image
                  src={"/assets/scrool/logo.png"}
                  width={1000}
                  height={1000}
                  alt="Profile picture of Rafat, Design Head at Protoja"
                  className="w-[80px] md:w-[100px] mt-6 md:mt-12"
                />
              </div>

              <p className="mt-8 md:mt-12 text-black text-center text-sm md:text-lg">
                My Name is Rafat, Design Head at Protoja. I will answer all your
                Questions.
              </p>

              <div className="text-black border-b border-[#D16004] mt-8 md:mt-10"></div>

              <div className="flex mt-8 md:mt-20 items-center justify-between">
                <div>
                  <button className="w-[224px] bg-[#272727] py-2 rounded-[1440px]">
                    <span className="text-[#F76F00] text-sm md:text-base">
                      Ask Questions
                    </span>
                  </button>
                </div>
                {/* Fully rounded button for WhatsApp */}
                <div className="flex items-center justify-center bg-[#272727] rounded-full h-[40px] w-[40px]">
                  <Image
                    loading="lazy"
                    src="/assets/scrool/whatsapp.png"
                    width={220}
                    height={220}
                    alt="whatsapp"
                    className="w-[25px] h-[25px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
