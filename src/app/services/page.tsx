"use client";
import React, { useState } from "react";
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

// FAQ Component - Same as from About page
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

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

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

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="bg-black text-white py-50">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="flex items-center justify-center gap-2 text-xl text-gray-300 mb-3">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            Services
          </span>
          <h2 className="text-8xl font-medium text-white">Web Development</h2>
        </div>

        {/* FIRST IMAGE - FULL WIDTH */}
        <div className="w-full mb-20 px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/web.png" // put image in public folder
              alt="Team discussion"
              className="w-full h-[800px] object-cover"
            />
          </div>
        </div>

         {/* SEPARATOR LINE */}
        <div className="w-full  ">
          <div className="border-t border-white/20 "></div>
        </div>

        {/* SECOND SECTION IMAGE - FULL WIDTH */}
        <div className="relative w-full overflow-hidden mt-20 mb-8">
          <div className="container px-2">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Half Image */}
              <div className="w-full relative mb-20">
                <div className="relative h-[600px] rounded-2xl overflow-hidden">
                  <img
                    src="/web2.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Blue Card - Partially Overlapping Image */}
              <div className="w-full lg:w-1/2 lg:-ml-125 p-4 relative z-10">
                <div
                  className="
            bg-[#0A3DDA]
            text-white
            rounded-[28px]
            p-200
            lg:p-12
            shadow-2xl
           
           
          "
                >
                  <h2 className="text-2xl lg:text-4xl font-semibold ">
                    What We Do
                  </h2>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90 mb-4">
                    We Build High-Performance Web Applications That Are
                    Scalable, Secure, And Designed To Grow With Your Business.
                  </p>
                  <p className="text-lg lg:text-xl leading-relaxed text-white/90">
                    Our Team Focuses On Clean Architecture, Modern Frameworks,
                    And User-Centric Development To Deliver Reliable Solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="w-full  ">
          <div className="border-t border-white/20 "></div>
        </div>
      </section>

      {/* THIRD SECTION - WHAT'S INCLUDED */}
      <section className="min-h-screen bg-black px-6 text-white ">
        <div className="w-full.363">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold mb-20">
            What's Included
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-9">
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
                  p-8
                  backdrop-blur-md
                "
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-4">{item.title}</h3>

                <p className="text-white/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Right Image Card */}
            <div
              className="
                relative
                rounded-2xl
              "
            >
              <Image
                src="/web3.png"
                alt="Included Visual"
                width={800}
                height={800}
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>


         {/* SEPARATOR LINE */}
      <div className="w-full  ">
        <div className="border-t border-white/20 "></div>
      </div>

        {/* FOURTH SECTION WITH SLIDER CONTAINER */}
        <div className="relative overflow-hidden mt-20 mb-25">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Half Image */}
              <div className="w-full lg:w-3/1 relative">
                <div className="relative h-[700px] rounded-2xl overflow-hidden">
                  <img
                    src="/s.png"
                    alt="Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Slider Container - Partially Overlapping Image */}
              <div className="w-full lg:w-5/2 lg:-ml-100 relative z-10 ">
                <div className="bg-[#0A3DDA] text-white rounded-[28px] p-10 shadow-2xl -mt-20 lg:mt-0">
                  {/* TITLE */}
                  <h1 className="text-4xl font-bold text-white mb-8">
                    Why Choose This Service
                  </h1>

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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {features.slice(0, 2).map((feature, idx) => (
                            <div
                              key={idx}
                              className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                            >
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                {feature.icon}
                              </div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                {feature.title}
                              </h3>
                              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Slide 2 */}
                      <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {features.slice(2, 4).map((feature, idx) => (
                            <div
                              key={idx + 2}
                              className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                            >
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                {feature.icon}
                              </div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                {feature.title}
                              </h3>
                              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Slide 3 */}
                      <div className="w-full flex-shrink-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {features.slice(4, 6).map((feature, idx) => (
                            <div
                              key={idx + 4}
                              className="space-y-4 border border-gray-300/30 rounded-2xl p-6 bg-blue-700/20"
                            >
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                {feature.icon}
                              </div>
                              <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                                {feature.title}
                              </h3>
                              <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* NAVIGATION CONTROLS */}
                  <div className="flex items-center gap-6">
                    {/* ARROW BUTTONS */}
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
        {/* SEPARATOR LINE */}
        <div className="w-full  ">
          <div className="border-t border-white/20  "></div>
        </div>
      </section>

      {/* TECHNOLOGY STACK SECTION */}
      <section className="bg-[#0a0a0a] text-white py-10 px-6">
        <div className="w-full">
          {/* HEADER */}
          <div className="mb-16">
            <h2 className="text-5xl font-semibold mb-4">
              Our Technology Stack
            </h2>
            <p className="text-white text-2xl">
              We use industry-best tools and frameworks to deliver cutting-edge
              digital solutions.
            </p>
          </div>

          {/* STACK LIST */}
          <div className="flex flex-col">
            {techData.map((row, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row py-8 border-b border-gray-800/60 last:border-0"
              >
                {/* CATEGORY */}
                <div className="flex items-center gap-4 w-full md:w-1/4 mb-6 md:mb-0">
                  <FaArrowRight className="text-blue-600 border-2 rounded-full w-6 h-6" />
                  <span className="text-xl font-medium text-gray-400">
                    {row.category}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="flex flex-wrap gap-x-10 gap-y-6 w-full md:w-3/4">
                  {row.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <span className="text-xl text-gray-400">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEPARATOR LINE */}
        <div className="w-full  ">
          <div className="border-t border-white/10"></div>
        </div>
      </section>
      {/* FAQ SECTION -  */}
      <FAQSection />

      {/* CONTACT SECTION */}
      <section className="bg-black px-4">
        {/* HEADER WITH LOGO */}
        <div className="w-full mb-[70px]"> </div>

        <div
          className="w-full
                     grid grid-cols-1 lg:grid-cols-2 gap-[60px]
                     border border-white/20
                     p-[40px] lg:p-[60px]"
        >
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* LOGO */}
              <Image src="/logo.png" alt="logo" width={18} height={18} />
              <span className="tracking-widest text-white uppercase text-2xl">
                Contact
              </span>
            </div>

            <h2 className="text-[40px] leading-[1.2] text-white mt-4 mb-10 font-normal">
              Let's Talk About What You're <br />
              Building And How We Can <br />
              Help.
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-3xl text-white">• Want to call us?</p>
                <span className="block mt-1.5 text-[20px] text-[#bdbdbd]">
                  +91 58622 47845
                </span>
              </div>

              <div>
                <p className="text-3xl text-white">• Prefer the old way?</p>
                <span className="block mt-1.5 text-[20px] text-[#bdbdbd]">
                  contact@quicbinary.com
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="flex flex-col gap-[18px]">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white/[0.04]
                         border border-white/[0.08]
                         px-4 py-[14px]
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
                         px-4 py-[14px]
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
                         px-4 py-[14px]
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
                         px-4 py-[14px]
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
                         px-4 py-[14px]
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
              className="mt-5
                         bg-[#0b5cff]
                         text-white
                         text-[15px]
                         py-[14px]
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
      </section>
    </>
  );
}