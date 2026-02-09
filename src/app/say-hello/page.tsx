"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="bg-black text-white py-50">
        {/* TOP HEADER */}
        <div className="text-center mb-4">
          <h1 className="text-9xl font-semibold">Contact Us</h1>
          <p className="text-gray-400 text-3xl mt-8 mb-9 ">
            Visuals Were Curated To Evoke A Sense Of Avant-Garde Sophistication.
          </p>
        </div>

        {/* IMAGE CARD */}
        <div className="w-full mb-20 px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/meeting.jpg" // put image in public folder
              alt="Team discussion"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 px-6">
          
          {/* LEFT INFO */}
          <div>
            <h2 className="text-8xl  mb-6">
              Have a question? <br /> Ask us!
            </h2>

            <p className="text-gray-400 text-xl max-w-md mb-10">
              Have questions, feedback, or service inquiries? We&apos;re here to
              listen and respond quickly. Your input is important to us.
            </p>

            <div className="space-y-6 text-gray-300">
              <div>
                <h4 className="text-white font-medium mb-1">Address</h4>
                <p>Janjeerwala square, Indore</p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-1">Phone number</h4>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p>quicbinary@gmail.com</p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">Socials</h4>
                <ul className="space-y-1 text-gray-400">
                  <li className="hover:text-white cursor-pointer">Instagram</li>
                  <li className="hover:text-white cursor-pointer">Twitter</li>
                  <li className="hover:text-white cursor-pointer">Facebook</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 space-y-6">
            
            <Input label="Name" placeholder="Richa Sharma" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Phone number" placeholder="+91**********" />

            <Select label="Select Service" />
            <Select label="Price Budget" />

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Tell us about your project
              </label>
              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition text-white font-medium"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* NEW FAQ SECTION */}
      <NewFAQSection />
    </>
  );
}

/* Reusable Components */

interface InputProps {
  label: string;
  placeholder: string;
}

const Input = ({ label, placeholder }: InputProps) => (
  <div>
    <label className="block text-sm mb-2 text-gray-300">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-full bg-white/10 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

interface SelectProps {
  label: string;
}

const Select = ({ label }: SelectProps) => (
  <div>
    <label className="block text-sm mb-2 text-gray-300">{label}</label>
    <select className="w-full rounded-full bg-white/10 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="">Select {label}</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </div>
);

/* NEW FAQ Component - Replaces the old one */

const newFaqs = [
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

function NewFAQSection() {
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
        {newFaqs.map((faq, index) => {
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