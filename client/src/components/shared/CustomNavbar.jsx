"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../icons/Logo";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import {
  Home as HomeIcon,
  Build as ServiceIcon,
  Work as WorkIcon,
  Info as AboutIcon,
  Article as BlogIcon,
} from "@mui/icons-material";

const CustomNavbar = () => {
  const [activeMenu, setActiveMenu] = useState("home"); // Track active menu item

  return (
    <>
      {/* Top Navbar */}
      <nav className="py-2.5 w-full bg-white shadow-md fixed top-0 z-50">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:px-20">
          <Link href="/" className="flex items-center mb-2 md:mb-0">
            <Logo />
            <Image
              src="/assets/logoName.png"
              alt="logo"
              width={74.74}
              height={21.75}
              className="ml-2"
            />
          </Link>

          <div className="flex items-center md:ml-8">
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f97316",
                borderRadius: "100px",
                minWidth: "140px",
                padding: "8px 16px",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#ea580c" },
              }}
            >
              Let's Work
            </Button>
            <Image
              loading="lazy"
              src="/assets/scrool/arrowO.png"
              width={39}
              height={39}
              alt="arrow"
              className="ml-2"
            />
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
          bottom: "20px", // Slightly raised from bottom
          left: "50%",
          transform: "translateX(-50%)", // Center horizontally
          width: { xs: "90%", sm: "80%", md: "60%", lg: "50%" }, // Responsive width
          maxWidth: "600px", // Cap max width for larger screens
          bgcolor: "#0A0A0A", // Dark background
          borderRadius: "30px", // Rounded corners
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
          padding: "24px 32px", // Inner padding
          zIndex: 50,
          "& .MuiBottomNavigationAction-root": {
            minWidth: "auto",
            padding: { xs: "6px 8px", sm: "8px 12px", md: "10px 16px" }, // Responsive padding
            margin: "0 4px", // Margin between items
            borderRadius: "20px", // Rounded items
            color: "#ffffff", // White text/icon by default
            transition: "all 0.3s ease", // Smooth transition for hover/active
            position: "relative", // Required for pseudo-elements
            "&::before": {
              position: "absolute",
              top: "50%",
              right: "-2px", // Position the separator between items
              transform: "translateY(-50%)",
              width: "5px", // Width of the separator
              height: "60%", // Height of the separator
              bgcolor: "white", // White separator
              borderRadius: "2px", // Rounded edges for the separator
            },
            "&:last-child::before": {
              display: "none", // Hide separator for the last item
            },
          },
          "& .Mui-selected": {
            bgcolor: "#f97316", // Orange background for active item
            color: "#ffffff", // White text/icon for active
            borderRadius: "20px 40px 0px 40px",
            marginTop: -5,
            border: "6px solid white", // White border around the selected item
            padding: "4px", // Add padding to create space for the white border
          },
          "& .MuiBottomNavigationAction-label": {
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "uppercase",
            border: "none",
            marginTop: "4px", // Space between icon and label
          },
          "& .MuiSvgIcon-root": {
            fontSize: "16px", // Responsive icon size
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
