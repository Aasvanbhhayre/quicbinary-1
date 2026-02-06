"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="bg-black text-white py-10">
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

      {/* FAQ SECTION */}
      <FAQSection />
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
    <section className="bg-black px-6 py-[80px]">
      {/* HEADER */}
      <div className="w-full mb-[70px]">
        <div className="flex items-center gap-3 mb-6">
          {/* LOGO */}
          <Image src="/logo.png" alt="logo" width={18} height={18} />
          <span className="tracking-widest text-white uppercase text-2xl">
            FAQs
          </span>
        </div>

        <h2 className="text-8xl text-white leading-[1.1] font-normal">
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