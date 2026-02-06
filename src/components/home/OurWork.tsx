"use client";

import Image from "next/image";

const works = [
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "light",
    image: "/fyde.png",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "dark",
    image: "/fyde2.PNG",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "dark",
    image: "/brin.JPG",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "light",
    image: "/fyde3.jpg",
  },
];

export default function OurWork() {
  return (
    <section className="bg-black px-6 py-[120px]">
      {/* HEADER */}
      <div className="w-full mb-[60px] flex justify-between items-end gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Services icon" width={18} height={18} />
            <span className="text-xl tracking-widest text-gray-300">
              Our Work
            </span>
          </div>
          <h2 className="text-[60px] mt-3 text-white font-normal">
            Latest Works
          </h2>
        </div>

        <p className="max-w-[420px] text-[#bdbdbd] text-sm">
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      {/* GRID */}
      <div className="w-full grid grid-cols-2 gap-8">
        {works.map((item, index) => (
          <div
            key={index}
            className="bg-white/[0.03] border border-white/[0.08] rounded-[20px] p-5
                       transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5da9ff]"
          >
            {/* IMAGE */}
            <div className="h-[450px] rounded-[14px] mb-4 overflow-hidden">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={400} 
                height={250} 
                className="w-full h-full object-cover"
                  style={{ objectPosition: "center 65%" }}
              />
            </div>

            {/* TEXT */}
            <h3 className="text-lg mb-1.5 text-white">{item.title}</h3>
            <p className="text-[13px] text-[#bdbdbd]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="">
        <button
          className="mt-[60px] flex items-center gap-2 bg-transparent
                     border border-white/40 text-white
                     px-[22px] py-[10px] rounded-full
                     transition-all hover:bg-white hover:text-black"
        >
          View All <span>→</span>
        </button>
      </div>
      {/* ===== SEPARATING LINE AT THE END ===== */}
      <div className="w-full mt-10">
        <div className="relative">
          {/* MAIN LINE */}
          <div className="border-t border-white/20 w-full"></div>
        </div>
      </div>
    </section>
    
  );
}
