"use client";
import { useState } from "react";
import Image from "next/image";

export default function LatestWorks() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* LATEST WORKS SECTION */}
      <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
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
                      onMouseEnter={() => setActive(i)}
                      className="
                        rounded-[26px]
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        p-[22px]
                        transition-all duration-500
                        hover:border-white/20
                      "
                    >
                      {/* Image (FIXED SIZE) */}
                      <div className="rounded-[18px] overflow-hidden mb-5">
                        <img
                          src={i % 2 === 0 ? "/fyde1.png" : "/fyde2.png"}
                          alt="Work"
                          className="w-full h-[420px] object-cover"
                        />
                      </div>

                      {/* Text */}
                      <h3 className="text-[25px] font-semibold text-white mb-1">
                        FYDE
                      </h3>
                      <p className="text-[18px] text-gray-400 leading-relaxed max-w-[92%]">
                        Visuals were curated to evoke a sense of avant-garde sophistication.
                      </p>
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

      {/* EXACT SAME CONTACT SECTION AS YOU PROVIDED */}
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

/* FAQ Component */

const faqs = [
  {
    question: "What's your typical process for a new project?",
    answer:
      "We start with a discovery phase to understand your goals, audience, and competitors. From there, we move into strategy, design, and development—keeping you in the loop at every stage. Each service has its own milestones, but collaboration is constant throughout.",
  },
  {
    question: "How do you ensure our project aligns with business goals?",
    answer:
      "We align business goals with technical execution to ensure scalable and future-ready digital solutions. Our team works closely with stakeholders to understand objectives and translate them into actionable technical requirements.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Yes, we provide continuous support, optimization, and maintenance after project delivery. We offer various support packages to ensure your digital solution continues to perform optimally and evolves with your business needs.",
  },
  {
    question: "What's the typical timeline for projects?",
    answer:
      "Project timelines depend on scope and complexity, but we always deliver within agreed milestones. We provide detailed project timelines during the planning phase and maintain regular communication about progress throughout the development process.",
  },
];

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-black px-6 py-[10px]">
      {/* HEADER */}
      <div className="w-full mb-[70px]">
        <div className="flex items-center gap-3 mb-6">
          {/* LOGO */}
          <Image src="/logo.png" alt="logo" width={18} height={18} />
          <span className="tracking-widest text-white uppercase text-2xl">
            FAQs
          </span>
        </div>

        <h2 className="text-[56px] text-white leading-[1.1] font-normal">
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
                cursor-pointer
                flex
                rounded-[40px]
                overflow-hidden
                border border-white/[0.08]
                transition-all duration-300
                hover:border-white/[0.2]
              "
            >
              {/* LEFT NUMBER PILL (ALWAYS DARK) */}
              <div
                className="
                  w-[90px]
                  flex items-center justify-center
                  bg-white/[0.04]
                  text-[#a9d4ff]
                  text-[18px]
                  rounded-l-[40px]
                  border-r border-white/[0.08]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* RIGHT CONTENT */}
              <div
                className={`
                  flex-1
                  px-8 py-6
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#a9d4ff]"
                      : "bg-white/[0.04]"
                  }
                `}
              >
                {/* QUESTION ROW */}
                <div className="flex items-center gap-6">
                  <h4
                    className={`flex-1 text-[16px] ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h4>

                  <span
                    className={`text-[26px] ${
                      isActive ? "text-black" : "text-white"
                    }`}
                  >
                    {isActive ? "×" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                {isActive && (
                  <p className="mt-4 text-[15px] text-black/70 leading-relaxed max-w-[720px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}