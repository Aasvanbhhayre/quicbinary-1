"use client";
import Image from "next/image";
import {
  FiTarget,
  FiUsers,
  FiGlobe,
  FiCheckCircle,
  FiLayers,
  FiCode,
  FiArrowRight,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { LuMousePointerClick } from "react-icons/lu";
import { LiaIndustrySolid } from "react-icons/lia";
import { 
  FaGlobeAmericas, 
  FaRocket, 
  FaChartLine,
  FaBuilding,
  FaDatabase,
  FaCloud,
  FaMobileAlt
} from "react-icons/fa";

// Updated MoreAboutUsButton with the new style from Hero button
function MoreAboutUsButton() {
  return (
    <div className="w-fit">
      <button
        className="group inline-flex items-center gap-3
                   px-8 py-4
                   rounded-full
                   border border-white/30
                   overflow-hidden
                    
                   transition-all duration-300"
      >
        {/* TEXT */}
        <span className="relative block w-[130px] h-6 overflow-hidden">
          <span
            className="absolute inset-0 flex items-center text-white
                       transition-transform duration-500
                       group-hover:translate-x-full"
          >
            More About Us
          </span>

          <span
            className="absolute inset-0 flex items-center text-white
                       -translate-x-full
                       transition-transform duration-500
                       group-hover:translate-x-0"
          >
            More About Us
          </span>
        </span>

        {/* ARROW */}
        <span
          className="relative w-9 h-9 rounded-full
                     bg-gradient-to-r from-white to-white
                     flex items-center justify-center
                     overflow-hidden shrink-0
                     group-hover:from-white group-hover:to-white
                     transition-all duration-300"
        >
          <span
            className="absolute inset-0 flex items-center justify-center
                       text-blue-600
                       transition-transform duration-500
                       group-hover:translate-x-full"
          >
            <FiArrowRight className="w-5 h-5" />
          </span>

          <span
            className="absolute inset-0 flex items-center justify-center
                       text-blue-600
                       -translate-x-full
                       transition-transform duration-500
                       group-hover:translate-x-0"
          >
            <FiArrowRight className="w-5 h-5" />
          </span>
        </span>
      </button>
    </div>
  );
}

// Statistics Grid Component - Stacked & Left-Aligned
function StatisticsGrid() {
  const stats = [
    {
      value: "100",
      percentage: "%",
      label: "Focus On Solutions",
      description: "Complete dedication to solving client challenges",
      icon: <FiTarget className="w-10 h-10" />,
      color: "text-[#003BD7]",
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#003BD7]", 
    },
    {
      value: "8",
      plus: "+",
      label: "Team Experience",
      description: "Years of collective expertise in digital solutions",
      icon: <FiUsers className="w-10 h-10" />,
      color: "text-[#003BD7]",
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[3652A3]",
    },
    {
      value: "23",
      plus: "+",
      label: "Countries Served",
      description: "Global reach with international client base",
      icon: <FiGlobe className="w-10 h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#3652A3]",
    },
    {
      value: "80",
      plus: "+",
      label: "Projects Delivered",
      description: "Successful digital transformations completed",
      icon: <LuMousePointerClick className="w-10 h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[3652A3]", 
    },
    {
      value: "13",
      plus: "+",
      label: "Industry Verticals",
      description: "Diverse industry expertise and solutions",
      icon: <LiaIndustrySolid className="w-10 h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#3652A3]", 
    },
    {
      value: "47",
      plus: "+",
      label: "Development Staff",
      description: "Skilled professionals driving innovation",
      icon: <FiCode className="w-10 h-10 text-[#003BD7]" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#003BD7]", 
    },
  ];

  return (
    <div className="w-full py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              {/* Left-Aligned Card Container with dynamic border color */}
              <div className={`bg-gray-900/40 rounded-4xl p-8 border-b-3 ${stat.borderColor} flex flex-col text-left`}>
                {/* ICON (Top Left) */}
                <div className={`mb-6 p-4 ${stat.bgColor} w-fit`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>

                {/* VALUE with colored symbol */}
                <div className="mb-3 leading-none flex items-baseline">
                  {/* White number */}
                  <div className="text-5xl md:text-6xl text-white">
                    {stat.value}
                  </div>
                  {/* Colored symbol (% or +) */}
                  <div className={`text-6xl md:text-6xl ${stat.color} ml-1`}>
                    {stat.percentage || stat.plus}
                  </div>
                </div>

                {/* LABEL (Below Value, Left) */}
                <div className="text-2xl text-white mb-4">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Industry Leaders Component - FIXED VERSION (auto-scroll doesn't stop on hover)
function IndustryLeaders() {
  const companies = [
    {
      name: "ASGARDIA",
      icon: <FaRocket className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "nirastate",
      icon: <FaBuilding className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "velocity",
      icon: <FaChartLine className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "OUTOSIA",
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "ASGARDIA",
      icon: <FaRocket className="w-8 h-8" />,
      color: "text-white"
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.8;

    const animateScroll = () => {
      scrollPosition += speed;

      if (scrollPosition >= maxScroll / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full py-6 md:py-1 border-2 border-white/20 mt-9">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Auto-Scrolling Logos - Continuous scroll without hover pause */}
        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            ref={scrollRef}
            className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 py-4"
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* First Set */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-56 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-xl ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0">
                <div className="w-56 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Third Set for better continuity */}
            {companies.map((company, index) => (
              <div key={`third-${index}`} className="flex-shrink-0">
                <div className="w-56 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-xl ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

// Alternative: With different React Icons
function IndustryLeadersVariant() {
  const companies = [
    {
      name: "ASGARDIA",
      icon: <FaRocket className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "nirastate",
      icon: <FaBuilding className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "velocity",
      icon: <FaDatabase className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "OUTOSIA",
      icon: <FaCloud className="w-8 h-8" />,
      color: "text-white"
    },
    {
      name: "ASGARDIA",
      icon: <FaMobileAlt className="w-8 h-8" />,
      color: "text-white"
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animateScroll = () => {
      scrollPosition += speed;

      if (scrollPosition >= maxScroll / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="w-full py-6 md:py-1 border-2 border-white/20 mt-9">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 py-4"
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* First Set */}
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="w-56 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-xl ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set */}
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0">
                <div className="w-56 flex items-center justify-center">
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

// Main AboutUs Component
export default function AboutUs() {
  return (
    <section className="w-full min-h-screen bg-black">
      {/* TOP SECTION */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/logo.png" 
                alt="About Us icon" 
                width={18} 
                height={18} 
              />
              <div className="inline-block">
                <span className="text-white font-semibold text-3xl tracking-wider">
                  About Us
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-4xl text-white leading-tight mb-6">
              Trusted By Startups And Businesses
              <br />
              To Build Future-Ready Digital Solutions
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              We Combine Strategy, Design, And Technology To Build Scalable
              Digital Products For Growing Businesses.
            </p>

            {/* Updated "More About Us" Button with new style */}
            <MoreAboutUsButton />
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-4xl overflow-hidden">
              <Image
                src="/about.png"
                alt="About Us"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-700"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-3xl"></div>
            </div>

            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-full opacity-70 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-full opacity-70 blur-xl"></div>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* SEPARATOR LINE */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/20 w-full"></div>
      </div>
      {/* Version 1: Full with description */}
      <StatisticsGrid />
      {/* SEPARATOR LINE */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 w-full"></div>
      </div>
      {/* INDUSTRY LEADERS SECTION - Now it won't stop on hover */}
      <IndustryLeaders />
    </section>
  );
}