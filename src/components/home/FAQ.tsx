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
    question: "What’s your typical process for a new project?",
    answer:
      "We align business goals with technical execution to ensure scalable and future-ready digital solutions.",
  },
  {
    question: "What’s your typical process for a new project?",
    answer:
      "Yes, we provide continuous support, optimization, and maintenance after project delivery.",
  },
  {
    question: "What’s your typical process for a new project?",
    answer:
      "Project timelines depend on scope and complexity, but we always deliver within agreed milestones.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-black px-6 py-[80px]">
      {/* HEADER */}
      <div className=" w-full mb-[70px]">
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
