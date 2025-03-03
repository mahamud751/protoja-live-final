"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../icons/Logo";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  Build as ServiceIcon,
  Work as WorkIcon,
  Info as AboutIcon,
  Article as BlogIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const CustomNavbar = () => {
  const [activeMenu, setActiveMenu] = useState("home"); // Track active bottom nav item
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="py-2.5 w-full bg-white shadow-md fixed top-0 z-50 md:sticky md:top-0">
        <div className="flex flex-wrap justify-between items-center md:px-20 px-4">
          {/* Always Visible Logo */}
          <Link href="/" className="flex ms-1 mt-4">
            <Logo />
            <div>
              <Image
                src="/assets/logoName.png"
                alt="logo"
                width={74.74}
                height={21.75}
                className="ms-1 mt-2"
              />
            </div>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-black">
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Collapsible Section (Hidden on Mobile by Default) */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex w-full md:w-auto items-center justify-between lg:order-1 transition-all duration-300 ease-in-out`}
          >
            {/* Navigation Links */}
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 uppercase bg-white md:bg-transparent">
              <Link
                href="/"
                className="block py-2 px-3 text-black md:p-0 md:dark:hover:text-neutral-700 hover:bg-gray-100 md:hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/service"
                className="block py-2 px-3 text-black md:p-0 md:dark:hover:text-neutral-700 hover:bg-gray-100 md:hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service
              </Link>
              <Link
                href="/works"
                className="block py-2 px-3 text-black md:p-0 md:dark:hover:text-neutral-700 hover:bg-gray-100 md:hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Works
              </Link>
              <Link
                href="/about"
                className="block py-2 px-3 text-black md:p-0 md:dark:hover:text-neutral-700 hover:bg-gray-100 md:hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/blogs"
                className="block py-2 px-3 text-black md:p-0 md:dark:hover:text-neutral-700 hover:bg-gray-100 md:hover:bg-transparent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </ul>

            {/* "Let's Work" Button */}
            <div className="flex items-center lg:order-2 mt-4 md:mt-0 md:ms-8">
              <div className="flex text-black">
                <button className="px-2 py-2 bg-orange-500 min-w-[140px] rounded-[100px]">
                  Let's work
                </button>
                <div>
                  <Image
                    loading="lazy"
                    src="/assets/scrool/arrowo.png"
                    width={220}
                    height={220}
                    alt="arrow"
                    className="w-[39px] h-[39px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Sticky Navigation */}
      <BottomNavigation
        showLabels
        value={activeMenu}
        onChange={(event, newValue) => setActiveMenu(newValue)}
        sx={{
          position: "fixed",
          height: 80,
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" },
          maxWidth: "600px",
          bgcolor: "#0A0A0A",
          borderRadius: "30px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          padding: "24px 32px",
          zIndex: 50,
          "& .MuiBottomNavigationAction-root": {
            minWidth: "auto",
            padding: { xs: "6px 8px", sm: "8px 12px", md: "10px 16px" },
            margin: "0 4px",
            borderRadius: "20px",
            color: "#ffffff",
            transition: "all 0.3s ease",
            position: "relative",
            "&::before": {
              position: "absolute",
              top: "50%",
              right: "-2px",
              transform: "translateY(-50%)",
              width: "5px",
              height: "60%",
              bgcolor: "white",
              borderRadius: "2px",
            },
            "&:last-child::before": {
              display: "none",
            },
          },
          "& .Mui-selected": {
            bgcolor: "#f97316",
            color: "#ffffff",
            borderRadius: "20px 40px 0px 40px",
            marginTop: -5,
            border: "6px solid white",
            padding: "4px",
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
            border: "none",
            marginTop: "4px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "16px",
            color: "white",
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          component={Link}
          href="/"
        />
        <BottomNavigationAction
          label="Service"
          value="service"
          icon={<ServiceIcon />}
          component={Link}
          href="/service"
        />
        <BottomNavigationAction
          label="Works"
          value="works"
          icon={<WorkIcon />}
          component={Link}
          href="/works"
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<AboutIcon />}
          component={Link}
          href="/about"
        />
        <BottomNavigationAction
          label="Blog"
          value="blog"
          icon={<BlogIcon />}
          component={Link}
          href="/blogs"
        />
      </BottomNavigation>
    </>
  );
};

export default CustomNavbar;
