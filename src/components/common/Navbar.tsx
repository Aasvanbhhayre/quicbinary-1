"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "../../styles/common.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") setActiveLink("home");
    else if (pathname === "/about") setActiveLink("about");
    else if (pathname === "/services") setActiveLink("services");
    else if (pathname === "/work") setActiveLink("work");
    else if (pathname === "/say-hello") setActiveLink("hello");
  }, [pathname]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  const isLinkActive = (link: string) => activeLink === link;

  return (
    <header
      className={`${styles.navbar} w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/95 border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* FULL WIDTH NAVBAR */}
      <div className="w-full h-[100px] flex items-center justify-between px-6 lg:px-6 xl:px-20">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0 w-[130px] h-[34px] md:w-[200px] md:h-[40px]">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => handleLinkClick("home")}
            >
              <Image
                src="/quicbinary logo.png"
                alt="Quicbinary Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex  text-2xl items-center gap-6">
          {[
            { href: "/about", key: "about", label: "About" },
            { href: "/services", key: "services", label: "Services" },
            { href: "/work", key: "work", label: "Work" },
            { href: "/say-hello", key: "hello", label: "Say Hello" },
          ].map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="relative px-10 py-3 group"
              onClick={() => handleLinkClick(item.key)}
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isLinkActive(item.key)
                    ? "text-black font-medium"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </span>

              <span
                className={`absolute inset-0 bg-[#99CCFF] rounded-3xl transition-all duration-300 ${
                  isLinkActive(item.key)
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {[
              { href: "/about", key: "about", label: "About" },
              { href: "/services", key: "services", label: "Services" },
              { href: "/work", key: "work", label: "Work" },
              { href: "/say-hello", key: "hello", label: "Say Hello" },
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="relative px-6 py-3"
                onClick={() => handleLinkClick(item.key)}
              >
                <span
                  className={`text-2xl transition-colors duration-300 ${
                    isLinkActive(item.key)
                      ? "text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ${
                    isLinkActive(item.key)
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
 