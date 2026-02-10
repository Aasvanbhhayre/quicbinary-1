"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ================= MAIN SECTION ================= */

export default function Services() {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* ===== TOP HEADER ===== */}
      <div className="w-full mb-16 sm:mb-20 md:mb-24 lg:mb-32">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Image 
            src="/logo.png" 
            alt="Services icon" 
            width={16} 
            height={16}
            className="w-4 h-4 sm:w-5 sm:h-5" 
          />
          <span className="text-xs sm:text-sm tracking-widest text-gray-300">
            Services
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-6 uppercase tracking-tight">What We Offer</h2>

        <p className="text-gray-400 max-w-3xl text-base sm:text-lg md:text-xl">
          We Craft Digital Experiences From Idea To Launch — Blending Strategy,
          Design, And Engineering To Build Products That Performs.
        </p>
      </div>

      {/* ===== SERVICES (All 5 Sections) ===== */}
      <div className="space-y-24 sm:space-y-32">
        <ServiceRow
          icon="/icon1.png"
          title={<>WEB<br />DEVELOPMENT</>}
          description="Web Apps, SaaS Platforms, Dashboards, CMS"
          images={["/image1.png", "/image2.png", "/image3.png"]}
        />

        <ServiceRow
          reverse
          icon="/icon2.png"
          title={<>CUSTOM SOFTWARE<br />DEVELOPMENT</>}
          description="Smart, Secure & Custom-Built Software"
          images={["/image1.png", "/image2.png", "/image3.png"]}
        />

        <ServiceRow
          icon="/icon3.png"
          title={<>MOBILE &<br />CLOUD</>}
          description="Cloud-native mobile apps with seamless scalability."
          images={["/image1.png", "/image2.png", "/image3.png"]}
        />

        <ServiceRow
          reverse
          icon="/icon4.png"
          title={<>SAAS, CRM,<br />ERP</>}
          description="Enterprise-grade platforms for operations and growth."
          images={["/image1.png", "/image2.png", "/image3.png"]}
        />

        <ServiceRow
          icon="/icon5.png"
          title={<>DIGITAL<br />MARKETING</>}
          description="SEO, paid ads & growth strategies that convert users."
          images={["/image1.png", "/image2.png", "/image3.png"]}
        />
      </div>

      <div className="w-full mt-16 sm:mt-20 md:mt-24 lg:mt-32">
        <div className="border-t border-white/20 w-full"></div>
      </div>
    </section>
  );
}

/* ================= SERVICE ROW ================= */

function ServiceRow({
  title,
  description,
  icon,
  images,
  reverse = false,
}: {
  title: React.ReactNode;
  description: string;
  icon: string;
  images: string[];
  reverse?: boolean;
}) {
  const [imageHover, setImageHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for Mobile Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smoothly transform flex-grow values based on scroll position
  // Image 1 expands at start, Image 2 in middle, Image 3 at end of scroll
  const flex1 = useTransform(scrollYProgress, [0, 0.3, 0.45], [4, 4, 1]);
  const flex2 = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [1, 4, 1]);
  const flex3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [1, 1, 4]);

  const flexValues = [flex1, flex2, flex3];

  return (
    <div 
      ref={containerRef}
      className={`max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 ${reverse ? "lg:flex-row-reverse" : ""}`}
    >
      
      {/* MOBILE VIEW IMAGES (Scroll-Linked Accordion) */}
      <div className="flex lg:hidden flex-col gap-3 h-[550px] w-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            style={{ flex: flexValues[index] }}
            className="relative overflow-hidden rounded-[24px] bg-neutral-900 transition-all duration-300"
          >
            <Image 
                src={img} 
                alt="Service showcase" 
                fill 
                className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        ))}
      </div>

      {/* DESKTOP VIEW IMAGES (Aapka Original Logic - Fixed) */}
      <div
        className={`hidden lg:flex h-[520px] gap-6 transition-all duration-700 ease-in-out
          ${imageHover ? "flex-[6]" : "flex-[4]"}`}
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      >
        {images.map((img, idx) => (
          <ImageBox 
            key={idx} 
            src={img} 
            setHover={setImageHover} 
          />
        ))}
      </div>

      {/* SERVICE CONTENT CARD */}
      <div
        className={`h-auto lg:h-[520px] transition-all duration-700 ease-in-out
          ${imageHover ? "lg:flex-[4]" : "lg:flex-[6]"}
          border border-white/20 bg-[#0A0A0A] rounded-3xl lg:rounded-[28px]
          p-8 sm:p-10 lg:p-12 flex flex-col w-full`}
      >
        <div className="flex flex-col gap-6">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Image src={icon} alt="icon" width={24} height={24} className="brightness-200" />
          </div>

          <div className="min-h-[120px]">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.1] uppercase">
              {title}
            </h3>
          </div>

          <p className="text-gray-400 text-lg max-w-md font-light">
            {description}
          </p>
        </div>

        <div className="mt-8 lg:mt-auto">
          <KnowMoreButton />
        </div>
      </div>
    </div>
  );
}

/* ================= IMAGE BOX (DESKTOP) ================= */

function ImageBox({ src, setHover }: any) {
  const [selfHover, setSelfHover] = useState(false);
  return (
    <div
      onMouseEnter={() => { setHover(true); setSelfHover(true); }}
      onMouseLeave={() => { setHover(false); setSelfHover(false); }}
      className={`relative h-full overflow-hidden rounded-[28px] transition-all duration-700 ease-in-out
        ${selfHover ? "flex-[4]" : "flex-1"}`}
    >
      <Image 
        src={src} 
        alt="Work" 
        fill 
        className="object-cover transition-transform duration-700 hover:scale-105" 
      />
    </div>
  );
}

/* ================= KNOW MORE BUTTON ================= */

function KnowMoreButton() {
  return (
    <button className="group inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-500">
      <span className="text-sm font-medium uppercase tracking-wider">Know more</span>
      <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
        →
      </span>
    </button>
  );
}