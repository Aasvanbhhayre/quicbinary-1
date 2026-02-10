"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const works = [
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    image: "/fyde.png",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    image: "/fyde2.PNG",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    image: "/brin.JPG",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    image: "/fyde3.jpg",
  },
];

export default function OurWork() {
  return (
    <section className="bg-black px-6 py-[80px] md:py-[120px]">
      {/* HEADER */}
      <div className="max-w-[1400px] mx-auto mb-[60px] flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo.png" alt="Services icon" width={18} height={18} />
            <span className="text-xl tracking-widest text-white uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-[50px] md:text-[90px] text-white font-normal uppercase leading-[0.9]">
            Latest Works
          </h2>
        </div>

        <p className="max-w-[420px] text-[#bdbdbd] text-base md:text-lg">
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      {/* ROW 1 */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6 group/row1 mb-6 h-auto md:h-[600px]">
        <ScrollWrapper index={0} rowIndex="row1">
          <Card item={works[0]} />
        </ScrollWrapper>
        <ScrollWrapper index={1} rowIndex="row1">
          <Card item={works[1]} />
        </ScrollWrapper>
      </div>

      {/* ROW 2 */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6 group/row2 h-auto md:h-[600px]">
        <ScrollWrapper index={0} rowIndex="row2">
          <Card item={works[2]} />
        </ScrollWrapper>
        <ScrollWrapper index={1} rowIndex="row2">
          <Card item={works[3]} />
        </ScrollWrapper>
      </div>

      {/* VIEW ALL */}
      <div className="max-w-[1400px] mx-auto mt-[40px]">
        <KnowMoreButton text="View All" />
      </div>
    </section>
  );
}

/* ================= SCROLL & HOVER WRAPPER ================= */

function ScrollWrapper({ children, index, rowIndex }: any) {
  const ref = useRef(null);
  
  // Mobile Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Mobile: Jab user scroll karega to card ki height expand hogi
  const mobileHeight = useTransform(
    scrollYProgress,
    index === 0 ? [0.3, 0.45, 0.6] : [0.45, 0.6, 0.75],
    ["350px", "550px", "350px"]
  );
  
  const smoothHeight = useSpring(mobileHeight, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ height: smoothHeight }}
      className={`
        relative w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[28px]
        
        /* Desktop Settings: Full Height & Accordion Width */
        md:!height-full md:h-full md:basis-[50%] 
        ${rowIndex === "row1" 
          ? "md:group-hover/row1:basis-[35%] md:hover:!basis-[65%]" 
          : "md:group-hover/row2:basis-[35%] md:hover:!basis-[65%]"
        }
      `}
    >
      {children}
    </motion.div>
  );
}

/* ================= CARD COMPONENT ================= */

function Card({ item }: any) {
  return (
    <div className="group/card relative w-full h-full cursor-pointer overflow-hidden rounded-[28px] border border-white/[0.08]">
      {/* FULL WIDTH & HEIGHT IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
        />
        {/* Dynamic Overlay: Hover par light hota hai */}
        <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-all duration-500" />
      </div>

      {/* CONTENT: Overlayed on Image bottom */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <h3 className="text-3xl md:text-5xl mb-3 text-white font-medium uppercase tracking-tighter">
          {item.title}
        </h3>
        <p className="text-[15px] md:text-[20px] leading-relaxed text-[#eee] font-light max-w-[85%] line-clamp-2">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

/* ================= KNOW MORE BUTTON ================= */

function KnowMoreButton({ text }: { text: string }) {
  return (
    <div className="w-fit">
      <button className="group inline-flex items-center gap-4 px-8 py-3.5 rounded-full border border-white/20 overflow-hidden bg-transparent text-white transition-all duration-300 hover:border-white">
        <span className="relative block w-[90px] h-5 overflow-hidden font-medium text-lg">
          <span className="absolute inset-0 flex items-center transition-transform duration-500 group-hover:translate-x-full">
            {text}
          </span>
          <span className="absolute inset-0 flex items-center -translate-x-full transition-transform duration-500 group-hover:translate-x-0">
            {text}
          </span>
        </span>
        <span className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
          <span className="absolute inset-0 flex items-center justify-center text-black transition-transform duration-500 group-hover:translate-x-full font-bold">
            →
          </span>
          <span className="absolute inset-0 flex items-center justify-center text-black -translate-x-full transition-transform duration-500 group-hover:translate-x-0 font-bold">
            →
          </span>
        </span>
      </button>
    </div>
  );
}