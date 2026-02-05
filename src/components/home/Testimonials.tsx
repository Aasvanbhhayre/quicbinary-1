"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
   {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `“Quicbinary delivered an outstanding SaaS platform for us with
    exceptional clarity, speed, and engineering quality. Their team
    guided us from concept to deployment with complete transparency.
    A reliable long-term tech partner.”`,
    image: "/man.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-[120px] overflow-hidden">
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-6 mb-[70px]">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="icon" width={18} height={18} />
          <span className="tracking-widest text-gray-400">Testimonials</span>
        </div>

        <h2 className="text-[48px] text-white leading-tight">
          Hear What They <br /> Say About Us.
        </h2>
      </div>

      {/* SLIDER */}
      <div
        className="
          flex gap-10
          overflow-x-auto
          snap-x snap-mandatory
          pl-[calc((90vw-1100px)/2)]
          pr-10
          scrollbar-hide
        "
      >
      {testimonials.map((item, index) => (
  <div
    key={index}
    className="
      relative
      min-w-[520px]
      snap-end
      scrollbar-hide
    "
  >
    {/* TEXT BOX (MAIN CARD) */}
    <div
      className="
        mt-[120px]
        rounded-[22px]
        bg-gradient-to-br
        from-white/[0.08]
        to-white/[0.02]
        border border-white/[0.12]
        backdrop-blur-md
        px-8
        pb-8
        pt-[200px]
        transition
        scrollbar-hide
      "
    >
      <h4 className="text-white text-[20px]">{item.name}</h4>
      <span className="text-[13px] italic text-gray-400">
        {item.company}
      </span>

      <p className="text-[15px] text-gray-300 mt-5 leading-relaxed">
        {item.text}
      </p>
    </div>

    {/* IMAGE BOX (OVERLAPPING) */}
    <div
      className="
        absolute
        top-18
        left-1/2
        -translate-x-1/2
        w-[420px]
        h-[240px]
        rounded-[18px]
        overflow-hidden
        bg-black
        z-10
        shadow-2xl
      "
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
      />
    </div>
  </div>
))}

      </div>

      {/* ARROWS */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12 flex gap-4">
        <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition">
          ←
        </button>
        <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition">
          →
        </button>
      </div>
    </section>
  );
}
