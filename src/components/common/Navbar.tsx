"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 border-b border-white/10 py-2"
            : "bg-transparent py-3"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center z-50">
            <div className="relative w-[140px] h-[45px] sm:w-[180px] sm:h-[60px] md:w-[250px] md:h-[90px]">
              <Image
                src="/quicbinary logo.png"
                alt="Quicbinary Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2 md:gap-4">
            {["about", "services", "work", "say-hello"].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`px-8 md:px-10 py-1 md:py-2 rounded-full text-lg md:text-[25px] transition-all duration-300 ${
                  isActive(`/${item}`)
                    ? "bg-[#99CCFF] text-black font-medium"
                    : "text-white hover:text-white/70"
                }`}
              >
                {item === "say-hello" ? "Say Hello" : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white text-2xl z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {["about", "services", "work", "say-hello"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`px-10 py-3 rounded-full text-2xl transition-all duration-300 w-48 text-center ${
                isActive(`/${item}`)
                  ? "bg-[#99CCFF] text-black font-medium"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item === "say-hello" ? "Say Hello" : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
