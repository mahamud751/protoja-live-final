"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // You can use any icon library or SVG

const navLinks = ["Home", "Service", "Works", "About", "Blog"];

export default function Header() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const glassVariants = {
    initial: { backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(0px)" },
    scrolled: { backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" },
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="container flex items-center justify-center h-16 px-4 md:px-8">
        {/* Left: Logo and Nav */}
        <motion.div
          className="flex items-center pl-[4px] pr-3 py-1 rounded-full relative"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 0 0)",
            border: "1.5px solid rgba(255,255,255,0.08)",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
            height: "36px",
            minHeight: "36px",
          }}
          variants={glassVariants}
          initial="initial"
          animate={scrolled ? "scrolled" : "initial"}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-x-3 h-full">
            {/* Logo */}
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src="/assets/plogo.png"
                alt="Company logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-x-1 h-full select-none">
              {navLinks.map((link) => (
                <li key={link} className="flex items-center h-full">
                  <a
                    href="#"
                    onClick={() => {
                      setActive(link);
                      setMobileMenuOpen(false);
                    }}
                    className={`font-bold px-3 py-1 rounded-full text-sm transition-all duration-150 flex items-center h-8 ${active === link
                        ? "bg-white/10 text-white shadow-inner"
                        : "text-white hover:bg-white/10"
                      }`}
                    style={{ lineHeight: "1.75rem" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden ml-2 p-1 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Right: Let's Talk Button */}
        <a href='#projects' className="inline-flex items-center gap-2 border-2 px-5 h-9 rounded-full relative z-50 hover:rounded-xl transition duration-200 bg-white text-gray-900">
          <span className="block px-1">Let's Talk</span>
        </a>
      </nav>

      {/* Mobile Menu - AnimatePresence for smooth mount/unmount */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#222222cc] backdrop-blur-md border-t border-gray-700"
          >
            <ul className="flex flex-col px-4 py-2 space-y-2 select-none">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => {
                      setActive(link);
                      setMobileMenuOpen(false);
                    }}
                    className={`block font-bold px-3 py-2 rounded-md text-white transition-colors duration-150 ${active === link
                        ? "bg-[#6B6B6B]"
                        : "hover:bg-[#353535]"
                      }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
