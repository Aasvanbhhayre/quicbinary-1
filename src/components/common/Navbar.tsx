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
    // Set active link based on current path
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

  const isLinkActive = (link: string) => {
    return activeLink === link;
  };

  return (
    <header className={`${styles.navbar} w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 border-b border-white/10 py-4 shadow-lg' 
        : 'bg-transparent py-1'
    }`}>
      <div className={`${styles.navContainer} w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24`}>
        {/* LOGO SECTION */}
        <div className="flex items-center gap-4">
          {/* LOGO IMAGE */}
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Quicbinary Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* LOGO TEXT - No hover effects */}
          <Link 
            href="/" 
            className={`${styles.logo} flex items-center gap-3`}
            onClick={() => handleLinkClick("home")}
          >
            <span className="text-3xl font-bold tracking-tight text-white">
              Quicbinary
            </span>
          </Link>
        </div>

        {/* HAMBURGER MENU */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* NAV LINKS - Desktop */}
        <nav className={`${styles.navLinks} hidden lg:flex`}>
          <Link 
            href="/about" 
            className="relative px-4 py-2 group"
            onClick={() => handleLinkClick("about")}
          >
            <span className={`relative z-10 transition-colors duration-300 ${
              isLinkActive("about")
                ? 'text-white font-medium' 
                : 'text-gray-400'
            }`}>
              About
            </span>
            
            {/* Blue background only for active link */}
            <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ease-out ${
              isLinkActive("about")
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`} />
          </Link>

          <Link 
            href="/services" 
            className="relative px-4 py-2 group"
            onClick={() => handleLinkClick("services")}
          >
            <span className={`relative z-10 transition-colors duration-300 ${
              isLinkActive("services")
                ? 'text-white font-medium' 
                : 'text-gray-400'
            }`}>
              Services
            </span>
            
            {/* Blue background only for active link */}
            <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ease-out ${
              isLinkActive("services")
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`} />
          </Link>

          <Link 
            href="/work" 
            className="relative px-4 py-2 group"
            onClick={() => handleLinkClick("work")}
          >
            <span className={`relative z-10 transition-colors duration-300 ${
              isLinkActive("work")
                ? 'text-white font-medium' 
                : 'text-gray-400'
            }`}>
              Work
            </span>
            
            {/* Blue background only for active link */}
            <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ease-out ${
              isLinkActive("work")
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`} />
          </Link>

          <Link 
            href="/say-hello" 
            className="relative px-4 py-2 group"
            onClick={() => handleLinkClick("hello")}
          >
            <span className={`relative z-10 transition-colors duration-300 ${
              isLinkActive("hello")
                ? 'text-white font-medium' 
                : 'text-gray-400'
            }`}>
              Say Hello
            </span>
            
            {/* Blue background only for active link */}
            <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ease-out ${
              isLinkActive("hello")
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`} />
          </Link>
        </nav>

        {/* MOBILE MENU */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <Link 
              href="/about" 
              className="relative px-6 py-3"
              onClick={() => handleLinkClick("about")}
            >
              <span className={`text-2xl transition-colors duration-300 ${
                isLinkActive("about") ? 'text-white font-medium' : 'text-gray-400'
              }`}>
                About
              </span>
              <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ${
                isLinkActive("about") ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </Link>

            <Link 
              href="/services" 
              className="relative px-6 py-3"
              onClick={() => handleLinkClick("services")}
            >
              <span className={`text-2xl transition-colors duration-300 ${
                isLinkActive("services") ? 'text-white font-medium' : 'text-gray-400'
              }`}>
                Services
              </span>
              <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ${
                isLinkActive("services") ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </Link>

            <Link 
              href="/work" 
              className="relative px-6 py-3"
              onClick={() => handleLinkClick("work")}
            >
              <span className={`text-2xl transition-colors duration-300 ${
                isLinkActive("work") ? 'text-white font-medium' : 'text-gray-400'
              }`}>
                Work
              </span>
              <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ${
                isLinkActive("work") ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </Link>

            <Link 
              href="/say-hello" 
              className="relative px-6 py-3"
              onClick={() => handleLinkClick("hello")}
            >
              <span className={`text-2xl transition-colors duration-300 ${
                isLinkActive("hello") ? 'text-white font-medium' : 'text-gray-400'
              }`}>
                Say Hello
              </span>
              <span className={`absolute inset-0 bg-[#99CCFF] rounded-full transition-all duration-300 ${
                isLinkActive("hello") ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}