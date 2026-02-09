"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiTarget, FiUsers, FiGlobe, FiCode } from "react-icons/fi";
import { LuMousePointerClick } from "react-icons/lu";
import { LiaIndustrySolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaBuilding, FaChartLine, FaGlobeAmericas } from "react-icons/fa";

// Industry Leaders Component - Mobile Responsive
function IndustryLeaders() {
  const companies = [
    {
      name: "ASGARDIA",
      icon: <FaRocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      color: "text-white"
    },
    {
      name: "nirastate",
      icon: <FaBuilding className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      color: "text-white"
    },
    {
      name: "velocity",
      icon: <FaChartLine className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      color: "text-white"
    },
    {
      name: "OUTOSIA",
      icon: <FaGlobeAmericas className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      color: "text-white"
    },
    {
      name: "ASGARDIA",
      icon: <FaRocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
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
    <div className="w-full py-4 sm:py-5 md:py-6 lg:py-1 border-2 border-white/20 mt-6 sm:mt-8 md:mt-9">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16 py-3 sm:py-4 md:py-5"
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
                <div className="w-32 sm:w-40 md:w-48 lg:w-56 flex items-center justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set */}
            {companies.map((company, index) => (
              <div key={`dup-${index}`} className="flex-shrink-0">
                <div className="w-32 sm:w-40 md:w-48 lg:w-56 flex items-center justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${company.color} font-medium`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Third Set */}
            {companies.map((company, index) => (
              <div key={`third-${index}`} className="flex-shrink-0">
                <div className="w-32 sm:w-40 md:w-48 lg:w-56 flex items-center justify-center">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4">
                    <div className="flex-shrink-0">
                      <div className="text-white opacity-80 hover:opacity-100 transition-opacity">
                        {company.icon}
                      </div>
                    </div>
                    <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${company.color}`}>
                      {company.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-12 lg:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

// Statistics Grid Component - PERFECT 2-COLUMN MOBILE LAYOUT
function StatisticsGrid() {
  const stats = [
    {
      value: "100",
      percentage: "%",
      label: "Focus On Solutions",
      description: "Complete dedication to solving client challenges",
      icon: <FiTarget className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]",
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#003BD7]",
    },
    {
      value: "8",
      plus: "+",
      label: "Team Experience",
      description: "Years of collective expertise in digital solutions",
      icon: <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]",
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[3652A3]",
    },
    {
      value: "23",
      plus: "+",
      label: "Countries Served",
      description: "Global reach with international client base",
      icon: <FiGlobe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#3652A3]",
    },
    {
      value: "80",
      plus: "+",
      label: "Projects Delivered",
      description: "Successful digital transformations completed",
      icon: <LuMousePointerClick className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[3652A3]", 
    },
    {
      value: "13",
      plus: "+",
      label: "Industry Verticals",
      description: "Diverse industry expertise and solutions",
      icon: <LiaIndustrySolid className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#3652A3]", 
    },
    {
      value: "47",
      plus: "+",
      label: "Development Staff",
      description: "Skilled professionals driving innovation",
      icon: <FiCode className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />,
      color: "text-[#003BD7]", 
      bgColor: "bg-gray-900 rounded-full",
      borderColor: "border-b-[#003BD7]", 
    },
  ];

  return (
    <div className="w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="px-4 sm:px-5 md:px-6 lg:px-8">
        {/* PERFECT 2-COLUMN GRID ON MOBILE */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 md:gap-4 lg:gap-6 xl:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group h-full">
              {/* CARD WITH FIXED DIMENSIONS FOR CONSISTENCY */}
              <div className={`bg-gray-900/40 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl p-3 sm:p-3.5 md:p-4 lg:p-6 xl:p-8 border-b-3 ${stat.borderColor} flex flex-col text-left h-full`}>
                
                {/* ICON - TOP LEFT */}
                <div className={`mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 xl:mb-5 p-1.5 sm:p-2 md:p-2.5 lg:p-3 ${stat.bgColor} w-fit`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>

                {/* VALUE - PERFECT ALIGNMENT */}
                <div className="mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 xl:mb-3">
                  <div className="leading-none flex items-baseline">
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-medium">
                      {stat.value}
                    </div>
                    <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${stat.color} ml-0.5 sm:ml-0.5 md:ml-1`}>
                      {stat.percentage || stat.plus}
                    </div>
                  </div>
                </div>

                {/* LABEL - PROPER SPACING */}
                <div className="mb-1 sm:mb-1.5 md:mb-2 lg:mb-2.5 xl:mb-3">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white font-medium">
                    {stat.label}
                  </div>
                </div>
                
                {/* DESCRIPTION - BOTTOM OF CARD */}
                <div className="mt-auto pt-1 sm:pt-1.5">
                  <div className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-300/80 leading-tight sm:leading-snug">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Service Slider Component - Mobile Responsive
function ServiceSlider() {
  const services = [
    "Development",
    "UI/UX Design",
    "Product Design",
    "Web Development",
    "Maintenance",
    "Custom Software Solutions",
  ];

  const duplicatedServices = [...services, ...services];

  return (
    <div className="relative flex w-full overflow-hidden border border-white/20 bg-black py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {duplicatedServices.map((service, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-3 sm:mx-4 md:mx-5 lg:mx-6 xl:mx-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-white">
              {service}
            </span>
            
            <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6 rounded-full bg-white" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// FAQ Component - Mobile Responsive with LEFT ALIGNED NUMBER
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What's your typical process for a new project?",
      answer:
        "We start with a discovery phase to understand your goals, audience, and competitors. From there, we move into strategy, design, and development—keeping you in the loop at every stage. Each service has its own milestones, but collaboration is constant throughout.",
    },
    {
      question: "How do you ensure the project stays on track?",
      answer:
        "We align business goals with technical execution to ensure scalable and future-ready digital solutions through weekly check-ins and agile methodology.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide continuous support, optimization, and maintenance after project delivery to ensure your platform evolves with your business.",
    },
    {
      question: "What is the typical timeline for a project?",
      answer:
        "Project timelines depend on scope and complexity, but we always deliver within agreed milestones, typically ranging from 4 to 12 weeks.",
    },
  ];

  return (
    <section className="bg-black px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-[80px]">
      {/* HEADER */}
      <div className="w-full mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-[70px]">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mb-3 sm:mb-3.5 md:mb-4 lg:mb-5 xl:mb-6">
          <Image 
            src="/logo.png" 
            alt="logo" 
            width={16} 
            height={16} 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" 
          />
          <span className="tracking-[0.08em] sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] text-white uppercase text-[10px] sm:text-xs md:text-sm font-medium">
            FAQs
          </span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] 3xl:text-[56px] text-white leading-tight sm:leading-snug md:leading-normal lg:leading-[1.1] font-normal">
          Frequently Asked <br className="hidden sm:block" /> Questions
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(isActive ? null : index)}
              className="
                group
                cursor-pointer
                flex
                rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-full xl:rounded-[40px]
                overflow-hidden
                border border-white/[0.08]
                transition-all duration-500
                hover:border-white/[0.2]
              "
            >
              {/* LEFT NUMBER PILL - LEFT ALIGNED ON MOBILE */}
              <div
                className={`
                  w-[60px] sm:w-[60px] md:w-[70px] lg:w-[80px] xl:w-[90px]
                  flex items-center justify-center sm:justify-center
                  text-xs sm:text-sm md:text-base lg:text-[17px] xl:text-[18px] font-medium
                  rounded-l-lg sm:rounded-l-[40px]
                  border-r border-white/[0.08]
                  transition-colors duration-500
                  ${isActive ? "bg-[#1E1E1E] text-[#99CCFF]" : "bg-[#1E1E1E] text-white"}
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* RIGHT CONTENT */}
              <div
                className={`
                  flex-1
                  px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8
                  py-3 sm:py-3.5 md:py-4 lg:py-5 xl:py-7
                  transition-all duration-500 ease-in-out
                  ${isActive ? "bg-[#99CCFF]" : "bg-[#1E1E1E]"}
                `}
              >
                {/* QUESTION ROW */}
                <div className="flex items-center justify-between gap-3 md:gap-4 lg:gap-5 xl:gap-6">
                  <h4
                    className={`text-xs sm:text-sm md:text-base lg:text-[17px] xl:text-[18px] font-medium transition-colors duration-500 ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h4>

                  <div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] font-light transition-transform duration-500 ${
                      isActive ? "rotate-45 text-black" : "rotate-0 text-white"
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* ANSWER */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${isActive ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-[10px] sm:text-xs md:text-sm lg:text-[14px] xl:text-[15px] leading-relaxed ${
                        isActive ? "text-black/80" : "text-transparent"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative pt-16 sm:pt-18 md:pt-20 lg:pt-24 xl:pt-28 2xl:mt-50 pb-16 sm:pb-18 md:pb-20 lg:pb-24 xl:pb-32 2xl:pb-40 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-5 md:px-6">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full bg-blue-500" />
            <span>About Quicbinary</span>
          </div>

          <h1 className="mt-3 sm:mt-3.5 md:mt-4 lg:mt-4.5 xl:mt-5 2xl:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
            From concept to market leader
          </h1>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-4 sm:px-5 md:px-6 -mt-12 sm:-mt-14 md:-mt-16 lg:-mt-20 xl:-mt-24 2xl:-mt-32 pb-8 sm:pb-9 md:pb-10 lg:pb-12 xl:pb-16 2xl:pb-20">
        <img
          src="a.png"
          alt="Team discussion"
          className="rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[380px] xl:h-[450px] 2xl:h-[520px] object-cover"
        />
      </section>
   
      {/* SEPARATOR LINE */}
      <div className="w-full px-4 sm:px-5 md:px-6">
        <div className="border-t border-white/20 w-full"></div>
      </div>

      {/* INDUSTRY LEADERS */}
      <IndustryLeaders />

      {/* BUILDING DIGITAL PRODUCTS - FULL WIDTH IMAGE ON MOBILE */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-28">
        <div className="px-4 sm:px-5 md:px-6 lg:px-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
            Building Digital Products That Scale
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
            {/* FULL WIDTH IMAGE ON MOBILE */}
            <div className="w-full lg:w-auto rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white">
              <img
                src="a1.png"
                alt="Team collaboration"
                className="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[450px] 2xl:h-[550px] object-cover"
              />
            </div>

            <div className="
text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl
space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 xl:space-y-6
mt-6 sm:mt-8 md:mt-12 lg:mt-80">
              <p>
                Quicbinary Is A Technology-Driven Digital Agency Focused On
                Building Scalable, Secure, And High-Performance Web And Mobile
                Products. We Help Startups, Founders, And Growing Businesses Turn
                Ideas Into Reliable Digital Solutions Through Thoughtful Design,
                Clean Code, And Modern Technology.
              </p>

              <p>
                From Concept To Launch—And Beyond—We Partner With Our Clients At
                Every Stage Of Their Digital Journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS GRID - PERFECT 2-COLUMN MOBILE */}
      <StatisticsGrid />

      {/* WHO WE ARE */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-28 border-t border-white/10">
        <div className="px-4 sm:px-5 md:px-6 lg:px-6 flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium">
            Who We Are
          </h2>

          <div className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl space-y-3 sm:space-y-3.5 md:space-y-4 lg:space-y-5 xl:space-y-6">
            <p>
              We Are A Team Of Designers, Developers, And Problem-Solvers Who
              Believe Technology Should Be Simple, Powerful, And
              Purpose-Driven.
            </p>

            <p>
              At Quicbinary, We Don't Just Build Websites Or Apps—We Build Digital
              Products That Solve Real Business Problems, Improve User
              Experience, And Drive Long-Term Growth.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE SLIDER */}
      <ServiceSlider />

      {/* MISSION & VISION - FULL WIDTH ON MOBILE */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-28">
        <div className="px-4 sm:px-5 md:px-6 lg:px-3">
          {/* MOBILE LAYOUT - STACKED */}
          <div className="flex flex-col lg:hidden gap-6 sm:gap-7 md:gap-8">
            {/* MISSION CARD - FULL WIDTH */}
            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-2.5 md:mb-3">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                To Empower Businesses With Innovative Digital Solutions That Are
                Scalable, Secure, And Built For The Future—Without Unnecessary
                Complexity.
              </p>
            </div>

            {/* VISION CARD - FULL WIDTH */}
            <div className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-2.5 md:mb-3">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                To Become A Trusted Global Technology Partner For Startups And
                Businesses By Delivering High-Quality Digital Products That Create
                Real Impact.
              </p>
            </div>

            {/* IMAGE - FULL WIDTH */}
            <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="a2.png"
                alt="Team celebration"
                className="w-full h-[250px] sm:h-[280px] md:h-[320px] object-cover"
              />
            </div>
          </div>

          {/* DESKTOP LAYOUT - GRID */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 items-center">
            {/* MISSION */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 xl:p-12 2xl:p-21">
              <h3 className="text-2xl lg:text-3xl mb-3 lg:mb-3.5 xl:mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                To Empower Businesses With Innovative Digital Solutions That Are
                Scalable, Secure, And Built For The Future—Without Unnecessary
                Complexity.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 xl:p-12 2xl:p-21">
              <h3 className="text-2xl lg:text-3xl mb-3 lg:mb-3.5 xl:mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed text-lg lg:text-xl">
                To Become A Trusted Global Technology Partner For Startups And
                Businesses By Delivering High-Quality Digital Products That Create
                Real Impact.
              </p>
            </div>

            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="a2.png"
                alt="Team celebration"
                className="w-full h-[320px] lg:h-[380px] xl:h-[200px] 2xl:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-28 border-t border-white/10">
        <div className="px-4 sm:px-5 md:px-6 lg:px-6">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
            Members
          </h2>

          {/* GRID - 2 COLUMNS ON MOBILE */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10">
            {[
              { img: "a.5.png", name: "Priya Sharma", role: "Head Of Development" },
              { img: "a.4.png", name: "Rahul Patel", role: "Lead Designer" },
              { img: "a.5.png", name: "Anjali Gupta", role: "Frontend Developer" },
              { img: "a.4.png", name: "Vikram Singh", role: "Backend Developer" },
              { img: "a.5.png", name: "Sneha Mehta", role: "Product Manager" },
              { img: "a.4.png", name: "Amit Kumar", role: "DevOps Engineer" },
            ].map((member, i) => (
              <div
                key={i}
                className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] xl:h-[380px] 2xl:h-[450px] 3xl:h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute items-center bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-3 sm:left-4 md:left-5 lg:left-6 xl:left-25">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl font-medium">{member.name}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl italic">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATOR LINE */}
      <div className="w-full px-4 sm:px-5 md:px-6">
        <div className="border-t border-white/20 w-full"></div>
      </div>

      {/* FAQ SECTION WITH LEFT ALIGNED NUMBER */}
      <FAQSection />
    </main>
  );
}