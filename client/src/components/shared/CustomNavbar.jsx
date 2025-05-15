"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

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
    initial: {
      backgroundColor: "#fff",
      backdropFilter: "blur(0px)",
      borderColor: "rgba(0,0,0,0.08)"
    },
    scrolled: {
      backgroundColor: "#ffffff",
      backdropFilter: "blur(8px)",
      borderColor: "rgba(0,0,0,0.12)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
    }
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
          border: "1.5px solid rgba(0,0,0,0.05)",
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.05)",
          height: "36px",
          minHeight: "36px",
        }}
        variants={glassVariants}
        initial="initial"
        animate={scrolled ? "scrolled" : "initial"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex items-center gap-x-3 h-full">
          {/* Logo linking to Home */}
          <Link href="/" onClick={() => setActive("Home")} className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/assets/plogo.png"
              alt="Company logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-x-1 h-full select-none">
            {navLinks.map(({ name, href }) => (
              <li key={name} className="flex items-center h-full">
                <Link
                  href={href}
                  onClick={() => {
                    setActive(name);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-150 flex items-center h-8 font-medium ${active === name
                    ? "bg-orange-50 text-[#fd5001]"
                    : "hover:text-[#fd5001] hover:bg-orange-50"
                    }`}
                  style={{ lineHeight: "1.75rem" }}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden ml-2 p-1 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Right: Let's Talk Button */}
      <a
        href="#projects"
        className="inline-flex items-center gap-2 border-2 border-[#fd5001] px-5 h-9 rounded-full relative z-50 hover:rounded-xl transition duration-200 bg-[#fd5001] text-white font-medium"
      >
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
          className="md:hidden bg-[#1a0e1c] backdrop-blur-md border-t border-gray-100"
        >
          <ul className="flex flex-col items-center px-4 py-2 space-y-2 select-none">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  onClick={() => {
                    setActive(name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block font-bold px-3 py-2 rounded-md transition-colors duration-150 ${active === name
                    ? "text-[#fd5001]"
                    : "text-white/80"
                    }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  </header>
);
}