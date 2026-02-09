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
      <div className="max-w-[1200px] mx-auto mb-[60px] flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Services icon" width={18} height={18} />
            <span className="text-xl tracking-widest text-white">
              Our Work
            </span>
          </div>
          <h2 className="text-[70px] md:text-[90px] mt-3 text-white font-normal">
            Latest Works
          </h2>
        </div>

        <p className="max-w-[420px] text-[#bdbdbd] text-base md:text-lg">
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      {/* ROW 1 */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 group mb-8">
        <div className="md:basis-[60%] md:group-hover:basis-[40%] transition-all duration-500">
          <Card item={works[0]} />
        </div>

        <div className="md:basis-[40%] md:group-hover:basis-[60%] transition-all duration-500">
          <Card item={works[1]} />
        </div>
      </div>

      {/* ROW 2 */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 group">
        <div className="md:basis-[40%] md:group-hover:basis-[60%] transition-all duration-500">
          <Card item={works[2]} />
        </div>

        <div className="md:basis-[60%] md:group-hover:basis-[40%] transition-all duration-500">
          <Card item={works[3]} />
        </div>
      </div>

      {/* VIEW ALL */}
      <div className="max-w-[1200px] mx-auto mt-[60px]">
        <KnowMoreButton text="View All" />
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ item }: any) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-[20px] p-5 h-full">
      <div className="h-[260px] sm:h-[320px] md:h-[450px] rounded-[14px] mb-4 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          width={600}
          height={450}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 65%" }}
        />
      </div>

      <h3 className="text-xl sm:text-2xl md:text-3xl mb-1.5 text-white">
        {item.title}
      </h3>

      <p
        className="
          text-[14px] sm:text-[16px] md:text-[20px]
          leading-[22px] sm:leading-[24px] md:leading-[28px]
          text-[#bdbdbd] line-clamp-2
        "
      >
        {item.desc}
      </p>
    </div>
  );
}

/* ================= KNOW MORE BUTTON ================= */

function KnowMoreButton({ text }: { text: string }) {
  return (
    <div className="w-fit">
      <button
        className="group inline-flex items-center gap-3
        px-5 py-2 rounded-full
        border border-neutral-500
        overflow-hidden bg-transparent text-white"
      >
        {/* TEXT */}
        <span className="relative block w-[90px] h-5 overflow-hidden">
          <span
            className="absolute inset-0 flex items-center
            transition-transform duration-500
            group-hover:translate-x-full"
          >
            {text}
          </span>

          <span
            className="absolute inset-0 flex items-center
            -translate-x-full
            transition-transform duration-500
            group-hover:translate-x-0"
          >
            {text}
          </span>
        </span>

        {/* ARROW */}
        <span
          className="relative w-7 h-7 rounded-full bg-white
          flex items-center justify-center overflow-hidden shrink-0"
        >
          <span
            className="absolute inset-0 flex items-center justify-center
            text-black transition-transform duration-500
            group-hover:translate-x-full"
          >
            →
          </span>

          <span
            className="absolute inset-0 flex items-center justify-center
            text-black -translate-x-full transition-transform duration-500
            group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </button>
    </div>
  );
}