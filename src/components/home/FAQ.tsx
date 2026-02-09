"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What’s your typical process for a new project?",
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

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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