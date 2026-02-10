"use client";

import Image from "next/image";

const steps = [
  {
    title: "Discover",
    desc: "We understand your goals, users, and business requirements to define a clear product vision.",
    step: 1,
    textOffset: "md:top-0",
  },
  {
    title: "Strategy",
    desc: "We plan the right approach, technology stack, and roadmap for long-term scalability.",
    step: 2,
    textOffset: "md:top-[50px]",
  },
  {
    title: "Design",
    desc: "We create intuitive, user-focused interfaces with wireframes and high-fidelity UI designs.",
    step: 3,
    textOffset: "md:top-0",
  },
  {
    title: "Development",
    desc: "We build fast, secure, and scalable web or mobile solutions using clean code practices.",
    step: 4,
    textOffset: "md:top-[50px]",
  },
  {
    title: "Testing",
    desc: "We thoroughly test for performance, usability, and security to ensure a flawless experience.",
    step: 5,
    textOffset: "md:top-0",
  },
  {
    title: "Launch & Scale",
    desc: "We deploy, monitor, and continuously optimize your product for growth and performance.",
    step: 6,
    textOffset: "md:top-[50px]",
  }
];

export default function Process() {
  return (
    <section className="bg-black px-6 py-20">
      {/* HEADER */}
      <div className="w-full mb-12 md:mb-[100px]">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="Process icon" width={18} height={18} />
          <span className="text-xl md:text-2xl tracking-widest text-gray-300">
            Process
          </span>
        </div>

        <h2 className="text-4xl md:text-[65px] text-white font-normal">How We Work</h2>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="max-w-[1600px] mx-auto relative min-h-[500px] md:h-[420px]">
        
        {/* DESKTOP HORIZONTAL DASHED LINE */}
        <div className="hidden md:block absolute left-0 right-0 top-[280px] border-t border-dashed border-[#5da9ff]/60 z-0" />

        {/* MOBILE VERTICAL DASHED LINE */}
        <div className="md:hidden absolute left-[22px] top-0 bottom-0 border-l border-dashed border-[#5da9ff]/60 z-0" />

        <div className="flex flex-col md:grid md:grid-cols-6 relative z-10 h-full gap-12 md:gap-0">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center"
            >
              {/* STEP CIRCLE */}
              <div
                className="
                  flex-shrink-0
                  w-[44px] h-[44px] rounded-full
                  bg-[#0b5cff] text-white font-semibold
                  flex items-center justify-center
                  shadow-[0_0_0_6px_rgba(11,92,255,0.25)]
                  relative
                  md:absolute md:top-[258px]
                  z-20
                "
              >
                {item.step}
              </div>

              {/* CONTENT BLOCK */}
              <div className={`
                ml-8 md:ml-0 
                relative 
                ${item.textOffset} 
                flex flex-col md:items-center
              `}>
                <h3 className="text-2xl md:text-lg text-white font-medium md:font-normal mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-[13px] text-[#bdbdbd] max-w-[280px] md:max-w-[200px] leading-relaxed">
                  {item.desc}
                </p>

                {/* VERTICAL GRADIENT LINE (DESKTOP ONLY) */}
                <div
                  className="hidden md:block w-[2px] h-[80px] mx-auto mt-6
                             bg-gradient-to-b from-[#0b5cff] to-transparent"
                />

                {/* HORIZONTAL GRADIENT LINE (MOBILE ONLY) */}
                <div
                  className="md:hidden h-[2px] w-[40px] mt-4
                             bg-gradient-to-r from-[#0b5cff] to-transparent"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEPARATING LINE */}
      <div className="w-full mt-20 mb-8">
        <div className="border-t border-white/20 w-full"></div>
      </div>
    </section>
  );
}