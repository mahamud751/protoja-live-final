"use client";

import { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export default function Approach() {
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
    <div className="bg-neutral-800 mt-60 p-3 md:p-20" ref={ref}>
      <div className="flex justify-center pt-32">
        <button className="bg-white w-[120px] rounded-[1440px] text-black p-1">
          Our approach
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

      <Typography
        variant="body1"
        color="initial"
        className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold pt-10 sm:pt-16 md:pt-20 text-white"
      >
        World most aspiring
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className="text-5xl text-center font-semibold mt-2 mb-12 text-white"
      >
        startups & scaleups
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__slideInDown" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/6.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Rudy Capital | Turning crypto complexity into clarity
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__slideInUp" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/1.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Nola | Beauty and bullsh*t don't mix
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__slideInUp" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/3.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Otterspace | Unleashing the Power of Communities
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__slideInLeft" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/4.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Quivo | Logistics Made Simple
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__slideInUp" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/9.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Yuri | Biotech in a space for a better life on earth
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            className={`${
              isVisible ? "animate__animated animate__fadeInTopRight" : ""
            }`}
            style={{ position: "relative", minHeight: "450px" }}
          >
            <Image
              src={"/assets/scrool/6.png"}
              width={2000}
              height={1000}
              alt="approch"
              className="h-[450px]"
            />
            <Typography
              variant="subtitle1"
              className="text-white font-semibold mt-1 "
            >
              Ascon Systems | Re-imagining Process Automation
            </Typography>
            <Typography variant="body" className="text-[#e0dada] font-normal">
              Strategy - Visual Identity - Website
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
