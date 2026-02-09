"use client";
import React, { useState, useRef, useEffect } from "react";
import { FiTarget, FiUsers, FiGlobe, FiCode } from "react-icons/fi";
import { LuMousePointerClick } from "react-icons/lu";
import { LiaIndustrySolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRocket, FaBuilding, FaChartLine, FaGlobeAmericas } from "react-icons/fa";

const aboutFaqs = [
  {
    question: "What's your typical process for a new project?",
    answer:
      "We start with a discovery phase to understand your goals, audience, and competitors. From there, we move into strategy, design, and development—keeping you in the loop at every stage. Each service has its own milestones, but collaboration is constant throughout.",
  },
  {
    question: "What's your typical process for a new project?",
    answer:
      "We align business goals with technical execution to ensure scalable and future-ready digital solutions.",
  },
  {
    question: "What's your typical process for a new project?",
    answer:
      "Yes, we provide continuous support, optimization, and maintenance after project delivery.",
  },
  {
    question: "What's your typical process for a new project?",
    answer:
      "Project timelines depend on scope and complexity, but we always deliver within agreed milestones.",
  },
];

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

// Service Slider Component
function ServiceSlider() {
  const services = [
    "Development",
    "UI/UX Design",
    "Product Design",
    "Web Development",
    "Maintenance",
    "Custom Software Solutions",
  ];

  // We double the array to ensure there's no "gap" when the loop resets
  const duplicatedServices = [...services, ...services];

  return (
    <div className="relative flex w-full overflow-hidden border border-white/20 bg-black py-10">
      {/* 1. The Scrolling Container */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"], // Moves halfway because the list is duplicated
        }}
        transition={{
          ease: "linear",
          duration: 10, // Adjust speed here (higher = slower)
          repeat: Infinity,
        }}
      >
        {duplicatedServices.map((service, index) => (
          <div key={index} className="flex items-center">
            {/* The Service Text */}
            <span className="mx-8 text-1xl  text-white md:text-4xl">
              {service}
            </span>
            
            {/* The White Dot Separator */}
            <div className="h-4 w-4 rounded-full bg-white md:h-6 md:w-6" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// FAQ Component - From the first code you provided
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
    <section className="bg-black px-6 py-[80px]">
      {/* HEADER */}
      <div className="w-full mb-[70px]">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          <span className="tracking-[0.2em] text-white uppercase text-sm font-medium">
            FAQs
          </span>
        </div>

        <h2 className="text-[48px] md:text-[56px] text-white leading-[1.1] font-normal">
          Frequently Asked <br /> Questions
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="w-full flex flex-col gap-5">
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
                rounded-[40px]
                overflow-hidden
                border border-white/[0.08]
                transition-all duration-500
                hover:border-white/[0.2]
              "
            >
              {/* LEFT NUMBER PILL */}
              <div
                className={`
                  w-[70px] md:w-[90px]
                  flex items-center justify-center
                  text-[18px] font-medium
                  rounded-l-[40px]
                  border-r border-white/[0.08]
                  transition-colors duration-500
                  ${isActive ? "bg-[#1E1E1E] text-[#99CCFF]" : "bg-[#1E1E1E] text-white"}
                `}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* RIGHT CONTENT (The Running Animation Area) */}
              <div
                className={`
                  flex-1
                  px-8 py-7
                  transition-all duration-500 ease-in-out
                  ${isActive ? "bg-[#99CCFF]" : "bg-[#1E1E1E]"}
                `}
              >
                {/* QUESTION ROW */}
                <div className="flex items-center justify-between gap-6">
                  <h4
                    className={`text-[16px] md:text-[18px] font-medium transition-colors duration-500 ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h4>

                  <div
                    className={`text-[50px] font-light transition-transform duration-500 ${
                      isActive ? "rotate-45 text-black" : "rotate-0 text-white"
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* ANSWER - ANIMATED CONTAINER */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${isActive ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-[15px] leading-relaxed max-w-[800px] ${
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
      <section className="relative mt-50 pb-40 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-xl text-gray-300">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            <span>About Quicbinary</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold">
            From concept to market leader
          </h1>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className=" px-6 -mt-32 pb-20">
        <img
          src="a.png"
          alt="Team discussion"
          className="rounded-2xl w-full h-[520px] object-cover"
        />
      </section>
   
      {/* SEPARATOR LINE */}
      <div className="w-full px-2 ">
        <div className="border-t border-white/20 w-full"></div>
      </div>

      {/* INDUSTRY LEADERS - Added after HERO IMAGE section */}
      <IndustryLeaders />

      {/* BUILDING DIGITAL PRODUCTS */}
      <section className="py-28">
        <div className=" px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-14">
            Building Digital Products That Scale
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden bg-white">
              <img
                src="a1.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-400 leading-relaxed text-xl space-y-6 mt-50">
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

      {/* STATISTICS GRID - Added after BUILDING DIGITAL PRODUCTS */}
      <StatisticsGrid />

      {/* WHO WE ARE */}
      <section className="py-28 border-t border-white/10">
        <div className=" px-6 grid md:grid-cols-2 gap-16">
          <h2 className="text-3xl md:text-4xl font-medium">
            Who We Are
          </h2>

          <div className="text-gray-400 leading-relaxed text-xl space-y-6">
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

      {/* SERVICE SLIDER - Added after WHO WE ARE */}
      <ServiceSlider />

      {/* MISSION & VISION */}
      <section className="py-28">
        <div className=" px-3 grid md:grid-cols-3 gap-10 items-center">
          {/* MISSION */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-21">
            <h3 className="text-3xl mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed text-xl">
              To Empower Businesses With Innovative Digital Solutions That Are
              Scalable, Secure, And Built For The Future—Without Unnecessary
              Complexity.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-21">
            <h3 className="text-3xl mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-xl">
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
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEMBERS */}
      <section className="py-28 border-t border-white/10">
        <div className=" px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-14">
            Members
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute items-center bottom-6 left-25">
                  <h3 className="text-4xl font-medium">{member.name}</h3>
                  <p className="text-gray-300 text-2xl italic">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATOR LINE */}
      <div className="w-full px-4 ">
        <div className="border-t border-white/20 w-full"></div>
      </div>

      {/* FAQ SECTION - ADDED HERE exactly as from the first code */}
      <FAQSection />
    </main>
  );
}