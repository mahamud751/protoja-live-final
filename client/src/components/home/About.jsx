"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Typography, Box, Grid2 as Grid } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

const AboutSection = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const imageRef = useRef(null);
  const rightGridRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsImageVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsTextVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    if (rightGridRef.current) {
      observer.observe(rightGridRef.current);
    }

    return () => {
      if (rightGridRef.current) {
        observer.unobserve(rightGridRef.current);
      }
    };
  }, []);

  return (
    <Box className="mt-60">
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5, lg: 5 }} ref={imageRef}>
          <div
            className={`${
              isImageVisible ? "animate__animated animate__fadeInRight" : ""
            }`}
          >
            <Image
              src="/assets/about.png"
              alt="About Us"
              width={400}
              height={300}
              className="rounded-xl shadow-md"
            />
          </div>
        </Grid>

        <Grid size={{ xs: 12, md: 7, lg: 7 }} ref={rightGridRef}>
          <motion.div
            className={isHovered ? "animate__animated animate__rubberBand" : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Typography
              variant="h4"
              className="font-semibold mb-10 text-[#B7B7B7] text-6xl"
            >
              Innovative Design, Transforming Businesses
            </Typography>
          </motion.div>

          <div
            className={`${
              isTextVisible ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            <Typography
              variant="body1"
              className={`font-normal mb-10 text-[#DEDEDC] text-[18.594px] leading-[30px] ${
                isTextVisible ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              Welcome to Protoja, where creativity meets strategy! We are a team
              of passionate UI/UX designers and branding experts dedicated to
              crafting intuitive, user-centered digital experiences that drive
              results. With years of expertise, we’ve perfected the art of
              designing interfaces and brands that are not only visually
              stunning but also highly functional. Whether you’re a startup or
              an established business, our mission is to reshape your digital
              presence and empower your growth through innovative design
              solutions.
            </Typography>

            <Typography
              variant="body1"
              className="font-normal mb-10 text-[#DEDEDC] text-[18.594px] leading-[30px]"
            >
              Let’s create something extraordinary together.
            </Typography>
          </div>

          <motion.button
            className="w-[140px] p-2 rounded-full bg-[#F76F00] text-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            More About us
          </motion.button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
