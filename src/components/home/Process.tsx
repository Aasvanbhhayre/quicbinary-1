"use client";

import Image from "next/image";

const steps = [
  {
    title: "Discover",
    desc: "We understand your goals, users, and business requirements to define a clear product vision.",
    step: 1,
    textOffset: "top-0",
  },
  {
    title: "Strategy",
    desc: "We plan the right approach, technology stack, and roadmap for long-term scalability.",
    step: 2,
    textOffset: "top-[50px]",
  },
  {
    title: "Design",
    desc: "We create intuitive, user-focused interfaces with wireframes and high-fidelity UI designs.",
    step: 3,
    textOffset: "top-0",
  },
  {
    title: "Development",
    desc: "We build fast, secure, and scalable web or mobile solutions using clean code practices.",
    step: 4,
    textOffset: "top-[50px]",
  },
  {
    title: "Testing",
    desc: "We thoroughly test for performance, usability, and security to ensure a flawless experience.",
    step: 5,
    textOffset: "top-0",
  },
];

export default function Process() {
  return (
    <section className="bg-black px-6 ">
      {/* HEADER */}
      <div className="w-full mb-[100px]">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="Process icon" width={18} height={18} />
          <span className="text-2xl tracking-widest text-gray-300">
            Process
          </span>
        </div>

        <h2 className="text-[65px] text-white font-normal">How We Work</h2>
      </div>

      {/* TIMELINE */}
      <div className="max-w-[1600px] mx-auto relative h-[420px]">
        {/* MAIN DASHED LINE */}
        <div
          className="absolute left-0 right-0 top-[280px]
                        border-t border-dashed border-[#5da9ff]/60 z-0"
        />

        <div className="grid grid-cols-5 relative z-10 h-full">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center"
            >
              {/* TEXT BLOCK (ONLY THIS MOVES UP/DOWN) */}
              <div className={`relative ${item.textOffset}`}>
                <h3 className="text-lg text-white mb-2">{item.title}</h3>

                <p className="text-[13px] text-[#bdbdbd] max-w-[200px] leading-relaxed">
                  {item.desc}
                </p>

                {/* VERTICAL GRADIENT LINE */}
                <div
                  className="w-[2px] h-[80px] mx-auto mt-6
                             bg-gradient-to-b
                             from-[#0b5cff]
                             to-transparent"
                />
              </div>

              {/* STEP CIRCLE (FIXED ON DASHED LINE) */}
              <div
                className="absolute top-[258px]
                           w-[44px] h-[44px] rounded-full
                           bg-[#0b5cff] text-white font-semibold
                           flex items-center justify-center
                           shadow-[0_0_0_6px_rgba(11,92,255,0.25)]"
              >
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>
{/* ===== SEPARATING LINE AT THE END ===== */}
      <div className="w-full mb-8">
        <div className="relative">
          {/* MAIN LINE */}
          <div className="border-t border-white/20 w-full"></div>
        </div>
      </div>

    </section>
  );
}
