"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaRegStar, FaArrowRight } from "react-icons/fa";
import { PiCursorClickBold } from "react-icons/pi";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaPython,
  FaWordpress,
  FaShopify,
  FaAws,
  FaDocker,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiLaravel,
  SiDjango,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiGooglecloud,
  SiWix,
} from "react-icons/si";

// FAQ Component - fully responsive
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
    <section className="bg-black px-4 sm:px-6 py-16 sm:py-[80px]">
      {/* HEADER */}
      <div className="w-full mb-12 sm:mb-[70px]">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          <span className="tracking-[0.2em] text-white uppercase text-xs sm:text-sm font-medium">
            FAQs
          </span>
        </div>

        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] text-white leading-[1.1] font-normal">
          Frequently Asked <br className="hidden sm:block" /> Questions
        </h2>
      </div>

      {/* FAQ LIST */}
      <div className="w-full flex flex-col gap-4 sm:gap-5">
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
                rounded-[24px] sm:rounded-[40px]
                overflow-hidden
                border border-white/[0.08]
                transition-all duration-500
                hover:border-white/[0.2]
              "
            >
              {/* LEFT NUMBER PILL */}
              <div
                className={`
                  w-[50px] sm:w-[70px] md:w-[90px]
                  flex items-center justify-center
                  text-[14px] sm:text-[18px] font-medium
                  rounded-l-[24px] sm:rounded-l-[40px]
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
                  px-4 sm:px-8 py-5 sm:py-7
                  transition-all duration-500 ease-in-out
                  ${isActive ? "bg-[#99CCFF]" : "bg-[#1E1E1E]"}
                `}
              >
                {/* QUESTION ROW */}
                <div className="flex items-center justify-between gap-3 sm:gap-6">
                  <h4
                    className={`text-[14px] sm:text-[16px] md:text-[18px] font-medium transition-colors duration-500 ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h4>

                  <div
                    className={`text-[40px] sm:text-[50px] font-light transition-transform duration-500 ${
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
                    ${isActive ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4" : "grid-rows-[0fr] opacity-0 mt-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className={`text-[13px] sm:text-[15px] leading-relaxed max-w-[800px] ${
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

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <PiCursorClickBold className="text-2xl text-blue-700" />,
      title: "Modern Tech Stack",
      description:
        "Using The Latest Frameworks And Tools To Deliver Fast, Secure, And High-Performance Applications.",
    },
    {
      icon: <PiCursorClickBold className="text-2xl text-blue-700" />,
      title: "Business-Focused Solutions",
      description:
        "Technology Aligned With Your Goals To Solve Real Problems And Drive Measurable Results.",
    },
    {
      icon: <PiCursorClickBold className="text-2xl text-blue-700" />,
      title: "Innovative Approach",
      description:
        "Creative Solutions That Push Boundaries And Deliver Exceptional User Experiences.",
    },
    {
      icon: <PiCursorClickBold className="text-2xl text-blue-700" />,
      title: "Secure & Reliable",
      description:
        "Enterprise-Grade Security Standards To Protect Your Data And Ensure System Reliability.",
    },
    {
      icon: <PiCursorClickBold className="text-2xl text-blue-700" />,
      title: "Scalable & Future-Ready Architecture",
      description:
        "Built With Flexibility And Growth In Mind, Ensuring Your Product Scales Smoothly As Your Business Expands.",
    },
  ];

  const techData = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Vue.js", icon: <FaVuejs className="text-green-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
        { name: "Django", icon: <SiDjango className="text-green-300" /> },
        { name: ".NET", icon: <SiDotnet className="text-purple-400" /> },
      ],
    },
    {
      category: "CMS",
      items: [
        { name: "WordPress", icon: <FaWordpress className="text-blue-400" /> },
        { name: "Shopify", icon: <FaShopify className="text-green-400" /> },
        { name: "Wix", icon: <SiWix className="text-white" /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-300" />,
        },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
        { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
    {
      category: "APIs",
      items: [
        { name: "REST APIs", icon: <FaDatabase className="text-gray-400" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      ],
    },
  ];

  // Desktop pagination
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 2 >= features.length ? 0 : prev + 2));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 2 < 0 ? features.length - 2 : prev - 2));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Mobile scroll - snap to each pair (2 columns)
  const scrollLeft = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  // Group features in pairs for mobile slides
  const mobileFeaturePairs = [];
  for (let i = 0; i < features.length; i += 2) {
    mobileFeaturePairs.push(features.slice(i, i + 2));
  }

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="bg-black text-white py-16 sm:py-20 md:py-50">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 px-4">
          <span className="flex items-center justify-center gap-2 text-lg sm:text-xl text-gray-300 mb-3">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-500" />
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white">
            Web Development
          </h2>
        </div>

        {/* FIRST IMAGE - FULL WIDTH */}
        <div className="w-full mb-16 sm:mb-20 px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/web.png"
              alt="Team discussion"
              className="w-full h-auto sm:h-[500px] md:h-[600px] lg:h-[800px] object-cover"
            />
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="w-full px-4">
          <div className="border-t border-white/20"></div>
        </div>

        {/* SECOND SECTION IMAGE - FULL WIDTH */}
<section className="relative w-full py-16 px-4 sm:px-8 lg:px-20 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center">
      
      {/* Background Image Container */}
      <div className="w-full lg:w-3/5 z-0">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden shadow-xl">
          <img
            src="/web2.png" 
            alt="Coding Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Blue Overlap Card */}
      <div className="w-full lg:w-1/2 lg:-ml-32 z-10 mt-[-60px] lg:mt-0">
        <div className="bg-[#0047FF] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            What We Do
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              We Build High-Performance Web Applications That Are Scalable, 
              Secure, And Designed To Grow With Your Business.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed opacity-95">
              Our Team Focuses On Clean Architecture, Modern Frameworks, 
              And User-Centric Development To Deliver Reliable Solutions.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
        {/* SEPARATOR LINE */}
        <div className="w-full px-4 mt-8 sm:mt-12">
          <div className="border-t border-white/20"></div>
        </div>
      </section>

      {/* THIRD SECTION - WHAT'S INCLUDED */}
      <section className="min-h-screen bg-black px-4 sm:px-6 text-white">
        <div className="w-full max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 sm:mb-20">
            What's Included
          </h2>

          {/* Grid - responsive columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-9">
            {/* Cards with Icons */}
            {[
              {
                title: "Custom Web Applications",
                desc: "We Build Tailor-Made Web Applications Designed Around Your Business Needs, Workflows, And Scalability Goals.",
                icon: <FaRegStar className="text-blue-600 text-2xl" />,
              },
              {
                title: "SaaS Platforms & Dashboards",
                desc: "Scalable SaaS Products And Dashboards With Intuitive Interfaces And Real-Time Data Visibility.",
                icon: <FaRegStar className="text-blue-600 text-2xl" />,
              },
              {
                title: "API Development & Integrations",
                desc: "Secure And Efficient APIs That Connect Your Systems, Third-Party Tools, And Services Seamlessly.",
                icon: <FaRegStar className="text-blue-600 text-2xl" />,
              },
              {
                title: "Performance Optimization",
                desc: "Optimizing Speed, Responsiveness, And Reliability To Ensure A Smooth User Experience At Scale.",
                icon: <FaRegStar className="text-blue-600 text-2xl" />,
              },
              {
                title: "Security Best Practices",
                desc: "Implementing Industry-Standard Security Measures To Protect Data, Users, And Infrastructure.",
                icon: <FaRegStar className="text-blue-600 text-2xl" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  relative
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6 sm:p-8
                  backdrop-blur-md
                "
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">{item.title}</h3>

                <p className="text-white/70 leading-relaxed text-xs sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Right Image Card */}
            <div className="relative rounded-2xl flex items-center justify-center lg:col-span-1">
              <Image
                src="/web3.png"
                alt="Included Visual"
                width={800}
                height={800}
                className="object-contain w-full h-auto max-h-[400px] lg:max-h-[500px] transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-20">
          <div className="border-t border-white/20"></div>
        </div>

        {/* FOURTH SECTION - WHY CHOOSE THIS SERVICE */}
        <div className="relative overflow-hidden mt-16 sm:mt-20 mb-16 sm:mb-25 px-4">
          <div className="container mx-auto px-0">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Half Image */}
              <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[700px] rounded-2xl overflow-hidden">
                  <img
                    src="/s.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Slider Container - Mobile: 2 columns per slide, Desktop: Grid Pagination */}
              <div className="w-full lg:w-5/12 xl:w-1/2 lg:-ml-16 xl:-ml-32 relative z-10">
                <div className="bg-[#0A3DDA] text-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-8 lg:p-10 shadow-2xl -mt-7 lg:mt-0">
                  {/* TITLE */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
                    Why Choose This Service
                  </h1>

                  {/* MOBILE: 2 COLUMNS PER SNAP - FIXED HEIGHT & WIDTH ALIGNMENT */}
                  <div className="block lg:hidden">
                    <div 
                      ref={sliderRef}
                      className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 scrollbar-hide"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {mobileFeaturePairs.map((pair, pairIndex) => (
                        <div 
                          key={pairIndex} 
                          className="flex-shrink-0 w-full snap-start grid grid-cols-2 gap-4"
                        >
                          {pair.map((feature, idx) => (
                            <div
                              key={idx}
                              className="
                                border border-gray-300/30 rounded-2xl p-5 
                                bg-blue-700/20 
                                flex flex-col 
                                min-h-[240px] h-full w-full
                                shadow-md
                              "
                            >
                              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 flex-shrink-0">
                                <span className="text-blue-700 text-xl">
                                  {feature.icon}
                                </span>
                              </div>
                              <h3 className="text-sm font-bold text-white leading-tight mb-2">
                                {feature.title}
                              </h3>
                              <p className="text-blue-100 text-xs leading-relaxed line-clamp-4">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    {/* Mobile Navigation Arrows - BOTTOM LEFT CORNER */}
                    <div className="flex items-center justify-start gap-4 mt-6">
                      <button
                        onClick={scrollLeft}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all border-2 border-blue-600/20"
                        aria-label="Scroll left"
                      >
                        <LuMoveLeft className="w-6 h-6 text-blue-600" />
                      </button>
                      <button
                        onClick={scrollRight}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all border-2 border-blue-600/20"
                        aria-label="Scroll right"
                      >
                        <LuMoveRight className="w-6 h-6 text-blue-600" />
                      </button>
                    </div>
                  </div>

                  {/* DESKTOP: GRID PAGINATION (hidden on mobile) */}
                  <div className="hidden lg:block">
                    {/* SLIDER CONTAINER */}
                    <div className="overflow-hidden mb-8">
                      <div
                        className={`flex transition-transform duration-500 ease-in-out ${
                          isAnimating ? "pointer-events-none" : ""
                        }`}
                        style={{
                          transform: `translateX(-${(currentSlide / 2) * 100}%)`,
                        }}
                      >
                        {/* Slide 1 */}
                        <div className="w-full flex-shrink-0">
                          <div className="grid grid-cols-2 gap-8">
                            {features.slice(0, 2).map((feature, idx) => (
                              <div
                                key={idx}
                                className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                              >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                  {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white leading-tight">
                                  {feature.title}
                                </h3>
                                <p className="text-blue-100 text-base leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="w-full flex-shrink-0">
                          <div className="grid grid-cols-2 gap-8">
                            {features.slice(2, 4).map((feature, idx) => (
                              <div
                                key={idx + 2}
                                className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                              >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                  {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white leading-tight">
                                  {feature.title}
                                </h3>
                                <p className="text-blue-100 text-base leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="w-full flex-shrink-0">
                          <div className="grid grid-cols-2 gap-8">
                            {features.slice(4, 6).map((feature, idx) => (
                              <div
                                key={idx + 4}
                                className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                              >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                  {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-white leading-tight">
                                  {feature.title}
                                </h3>
                                <p className="text-blue-100 text-base leading-relaxed">
                                  {feature.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESKTOP NAVIGATION CONTROLS */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={prevSlide}
                          disabled={isAnimating}
                          className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                            isAnimating
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-gray-50 hover:shadow-xl hover:scale-105"
                          }`}
                          aria-label="Previous slide"
                        >
                          <LuMoveLeft className="w-6 h-6 text-blue-600" />
                        </button>

                        <button
                          onClick={nextSlide}
                          disabled={isAnimating}
                          className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                            isAnimating
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-gray-50 hover:shadow-xl hover:scale-105"
                          }`}
                          aria-label="Next slide"
                        >
                          <LuMoveRight className="w-6 h-6 text-blue-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEPARATOR LINE */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="border-t border-white/20"></div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
              Our Technology Stack
            </h2>
            <p className="text-white text-lg sm:text-xl lg:text-2xl">
              We use industry-best tools and frameworks to deliver cutting-edge
              digital solutions.
            </p>
          </div>

          {/* STACK LIST */}
          <div className="flex flex-col">
            {techData.map((row, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row py-6 sm:py-8 border-b border-gray-800/60 last:border-0"
              >
                {/* CATEGORY */}
                <div className="flex items-center gap-3 sm:gap-4 w-full md:w-1/4 mb-4 md:mb-0">
                  <FaArrowRight className="text-blue-600 border-2 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-lg sm:text-xl font-medium text-gray-400">
                    {row.category}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="flex flex-wrap gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-6 w-full md:w-3/4">
                  {row.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center text-lg sm:text-xl">
                        {item.icon}
                      </div>
                      <span className="text-base sm:text-xl text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-16">
          <div className="border-t border-white/10"></div>
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <FAQSection />

      {/* CONTACT SECTION - FULLY RESPONSIVE */}
      <section className="bg-black px-4 py-12 sm:py-16">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-[60px] border border-white/20 p-6 sm:p-10 lg:p-[60px] rounded-2xl">
            {/* LEFT CONTENT */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image src="/logo.png" alt="logo" width={18} height={18} />
                <span className="tracking-widest text-white uppercase text-xl sm:text-2xl">
                  Contact
                </span>
              </div>

              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.2] text-white mt-4 mb-8 sm:mb-10 font-normal">
                Let's Talk About What You're <br className="hidden sm:block" />
                Building And How We Can <br className="hidden sm:block" />
                Help.
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <div>
                  <p className="text-2xl sm:text-3xl text-white">• Want to call us?</p>
                  <span className="block mt-1.5 text-lg sm:text-[20px] text-[#bdbdbd]">
                    +91 58622 47845
                  </span>
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl text-white">• Prefer the old way?</p>
                  <span className="block mt-1.5 text-lg sm:text-[20px] text-[#bdbdbd]">
                    contact@quicbinary.com
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form className="flex flex-col gap-4 sm:gap-[18px]">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/[0.04]
                           border border-white/[0.08]
                           px-4 py-3 sm:py-[14px]
                           rounded-[12px]
                           text-sm text-white
                           outline-none
                           placeholder:text-[#9e9e9e]
                           focus:border-[#0b5cff]
                           transition-colors duration-200"
              />

              <input
                type="email"
                placeholder="Email"
                className="bg-white/[0.04]
                           border border-white/[0.08]
                           px-4 py-3 sm:py-[14px]
                           rounded-[12px]
                           text-sm text-white
                           outline-none
                           placeholder:text-[#9e9e9e]
                           focus:border-[#0b5cff]
                           transition-colors duration-200"
              />

              <input
                type="text"
                placeholder="Mobile number"
                className="bg-white/[0.04]
                           border border-white/[0.08]
                           px-4 py-3 sm:py-[14px]
                           rounded-[12px]
                           text-sm text-white
                           outline-none
                           placeholder:text-[#9e9e9e]
                           focus:border-[#0b5cff]
                           transition-colors duration-200"
              />

              <input
                type="text"
                placeholder="City"
                className="bg-white/[0.04]
                           border border-white/[0.08]
                           px-4 py-3 sm:py-[14px]
                           rounded-[12px]
                           text-sm text-white
                           outline-none
                           placeholder:text-[#9e9e9e]
                           focus:border-[#0b5cff]
                           transition-colors duration-200"
              />

              <textarea
                rows={4}
                placeholder="Message"
                className="bg-white/[0.04]
                           border border-white/[0.08]
                           px-4 py-3 sm:py-[14px]
                           rounded-[12px]
                           text-sm text-white
                           outline-none
                           resize-none
                           placeholder:text-[#9e9e9e]
                           focus:border-[#0b5cff]
                           transition-colors duration-200"
              ></textarea>

              <button
                type="submit"
                className="mt-4 sm:mt-5
                           bg-[#0b5cff]
                           text-white
                           text-[15px]
                           py-3 sm:py-[14px]
                           rounded-[12px]
                           transition-all duration-200
                           hover:opacity-90
                           hover:scale-[1.02]
                           active:scale-[0.98]
                           font-medium"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}