"use client";
import { useState } from "react";
import Image from "next/image";

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

// FYDE Project Detail Page Component
function WorkPage() {
  return (
    <section className="w-full overflow-x-hidden bg-gradient-to-br from-black via-[#0b0f19] to-black px-4 sm:px-6 md:px-10 py-20 md:py-24 text-white">
      {/* Back Button */}
      <div className="max-w-[1408px] mx-auto mb-8">
        <button
          onClick={() => window.location.reload()} // Or use a state to go back
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="text-xl">←</span>
          <span className="text-sm">Back to Works</span>
        </button>
      </div>

      {/* ================= HERO ================= */}
      <div className="max-w-[1408px] mx-auto text-center mb-16 md:mb-20">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          <span>Work</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-wide">
          FYDE
        </h1>

        <p className="mt-5 max-w-xl mx-auto text-gray-400 text-sm md:text-base">
          Visuals Were Curated To Evoke A Sense Of Avant-Garde Sophistication.
        </p>
      </div>

      {/* ================= HERO IMAGE ================= */}
      <div className=" mb-20 md:mb-28">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[584px] rounded-[20px] md:rounded-[24px] overflow-hidden">
          <img
            src="/f1.png"
            alt="FYDE Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/40" />
        </div>
      </div>

      {/* ================= DETAILS ================= */}
      <div className="max-w-[1408px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center mb-24 md:mb-32">
        {/* Left text */}
        <div className="space-y-8 md:space-y-10 text-gray-300">
          {[
            ["Industry", "Website Design"],
            ["Date Completed", "Jan 1, 2022"],
            ["Scope", "UI Design, Prototyping, And Delivery"],
            ["Timeline", "2 Months"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-xs tracking-widest text-gray-500 uppercase mb-1">
                {label}
              </p>
              <p className="text-sm md:text-base">{value}</p>
            </div>
          ))}
        </div>

        {/* Right image */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] rounded-[20px] md:rounded-[24px] overflow-hidden">
          <img
            src="/f2.png"
            alt="Project Screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= CASE STUDY ================= */}
      <div className="max-w-[1408px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-center mb-24 md:mb-32">
        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 md:mb-8">
            Case Study Overview
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5 md:mb-6">
            CricketPro Arena Is A Sports-Focused Digital Platform Created To
            Connect Players, Teams, And Fans Through A Modern Online Experience.
          </p>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Our Team Designed And Developed A Scalable Sports Website With A
            Strong Focus On Performance, Mobile Usability, And Easy Content
            Management.
          </p>
        </div>

        {/* Mobile image */}
        <div className="mx-auto w-[240px] sm:w-[300px] md:w-[416px] h-[340px] sm:h-[400px] md:h-[445px] rounded-[14px] md:rounded-[16px] overflow-hidden">
          <img
            src="/f3.png"
            alt="Mobile Preview"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 38%" }}
          />
        </div>
      </div>

      {/* ================= SUCCESS STORY ================= */}
      <div className="max-w-[1408px] mx-auto mb-24 md:mb-32">
        <div className="max-w-3xl mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 md:mb-6">
            Success Story Spotlight
          </h2>

          <p className="text-gray-400 text-sm md:text-base mb-4">
            CricketPro Arena Transformed The Way Local Cricket Tournaments Are
            Managed And Experienced Online.
          </p>
        </div>

        <div className="w-full h-[220px] sm:h-[300px] md:h-[520px] rounded-[20px] md:rounded-[24px] overflow-hidden">
          <img
            src="/f4.png"
            alt="Spin Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ================= LAPTOP (FULL WIDTH) ================= */}
      <div className="mb-24">
        {/* mobile normal width */}
        <div className="block md:hidden w-full h-[220px] sm:h-[300px] overflow-hidden rounded-[20px]">
          <img
            src="/laptopvelvet.png"
            alt="Laptop"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 78%" }}
          />
        </div>

        {/* desktop full-bleed */}
        <div className="hidden md:block relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw]">
          <div className="w-full h-[760px] overflow-hidden">
            <img
              src="/f5.png"
              alt="Laptop"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 78%" }}
            />
          </div>
        </div>
      </div>

      {/* ================= RESULTS ================= */}
      <div className="max-w-[1408px] mx-auto">
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-5 md:mb-6">
            Results In Focus
          </h2>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            The New Cricket Platform Delivered A Faster, More Engaging Digital
            Experience With Improved Performance.
          </p>
        </div>

        <div className="w-full h-[220px] sm:h-[300px] md:h-[460px] rounded-[20px] md:rounded-[24px] overflow-hidden">
          <img
            src="/brin.jpg"
            alt="Results"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function LatestWorks() {
  const [active, setActive] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Handle project click
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(`fyde-${projectId}`);
  };

  // If a project is selected, show the project detail page
  if (selectedProject) {
    return <WorkPage />;
  }

  return (
    <>
      {/* LATEST WORKS SECTION */}
      <section className="relative w-full bg-black py-50 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />

        <div className="relative max-w-[1120px] mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="flex items-center justify-center gap-2 text-xl text-gray-300 mb-3">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              Work
            </span>
            <h2 className="text-8xl font-medium text-white">
              Latest Works
            </h2>
          </div>

          {/* ROWS */}
          <div className="flex flex-col gap-16">
            {[0, 2, 4, 6].map((rowStart) => {
              const leftActive = active === rowStart;
              const rightActive = active === rowStart + 1;

              return (
                <div
                  key={rowStart}
                  onMouseLeave={() => setActive(null)}
                  className={`
                    grid gap-12
                    transition-[grid-template-columns] duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                    ${
                      leftActive
                        ? "md:grid-cols-[1.5fr_0.5fr]"
                        : rightActive
                        ? "md:grid-cols-[0.5fr_1.5fr]"
                        : "md:grid-cols-[1fr_1fr]"
                    }
                  `}
                >
                  {[rowStart, rowStart + 1].map((i) => (
                    <div
                      key={i}
                      onClick={() => handleProjectClick(i)}
                      onMouseEnter={() => setActive(i)}
                      className="
                        rounded-[26px]
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        p-[22px]
                        transition-all duration-500
                        hover:border-white/20
                        cursor-pointer
                        group
                        hover:scale-[1.02]
                      "
                    >
                      {/* Image (FIXED SIZE) */}
                      <div className="rounded-[18px] overflow-hidden mb-5">
                        <img
                          src={i % 2 === 0 ? "/fyde1.png" : "/fyde2.png"}
                          alt="Work"
                          className="w-full h-[420px] object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Text */}
                      <h3 className="text-[25px] font-semibold text-white mb-1">
                        FYDE
                      </h3>
                      <p className="text-[18px] text-gray-400 leading-relaxed max-w-[92%]">
                        Visuals were curated to evoke a sense of avant-garde sophistication.
                      </p>
                      
                      {/* View Project Button (appears on hover) */}
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                          View Project →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        {/* ===== SEPARATING LINE AT THE END ===== */}
        <div className="w-full mt-30">
          <div className="relative">
            {/* MAIN LINE */}
            <div className="border-t border-white/20 w-full"></div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection />

      {/* CONTACT SECTION */}
      <section className="bg-black px-4 ">
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