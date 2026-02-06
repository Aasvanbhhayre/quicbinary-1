"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "William Barnes",
    company: "NovaTech Canada",
    text: `"Quicbinary delivered an outstanding SaaS platform for us with exceptional clarity, speed, and engineering quality. Their team guided us from concept to deployment with complete transparency. A reliable long-term tech partner."`,
    image: "/man.png",
  },
  {
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    text: `"The team at Quicbinary transformed our outdated system into a modern, scalable solution. Their attention to detail and commitment to quality is unmatched. Highly recommended!"`,
    image: "/man.png",
  },
  {
    name: "Michael Chen",
    company: "Global Innovations Inc.",
    text: `"Working with Quicbinary was a game-changer for our business. They delivered ahead of schedule and under budget. Exceptional service from start to finish."`,
    image: "/man.png",
  },
  {
    name: "Emma Rodriguez",
    company: "Digital Dynamics",
    text: `"Quicbinary's expertise in cloud architecture saved us months of development time. Their solutions are robust, secure, and perfectly aligned with our business goals."`,
    image: "/man.png",
  },
  {
    name: "David Kim",
    company: "FutureTech Labs",
    text: `"Outstanding partnership! Quicbinary not only delivered a great product but also provided comprehensive training and ongoing support. A truly professional team."`,
    image: "/man.png",
  },
  {
    name: "Lisa Thompson",
    company: "Enterprise Solutions Ltd.",
    text: `"The mobile app developed by Quicbinary has received fantastic feedback from our users. Smooth performance, intuitive design, and excellent backend integration."`,
    image: "/man.png",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollToLeft = () => {
    if (sliderRef.current && canScrollLeft) {
      sliderRef.current.scrollBy({
        left: -520,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRight = () => {
    if (sliderRef.current && canScrollRight) {
      sliderRef.current.scrollBy({
        left: 520,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    const rect = sliderRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left);
    setScrollLeft(sliderRef.current.scrollLeft);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScrollButtons);
      return () => slider.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  return (
    <section className="bg-black  overflow-hidden">
      {/* HEADER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-12 lg:mb-[70px]">
        <div className="flex items-center gap-3 mb-4 lg:mb-6">
          <Image 
            src="/logo.png" 
            alt="icon" 
            width={18} 
            height={18} 
            className="w-4 h-4 lg:w-5 lg:h-5"
          />
          <span className="tracking-widest text-gray-300 text-2xl ">Testimonials</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-[48px] text-white leading-tight font-semibold">
          Hear What They <br className="hidden sm:block" /> Say About Us.
        </h2>
      </div>

      {/* SLIDER CONTAINER */}
    <div className="relative">
  {/* ARROWS - POSITIONED BOTH ON BOTTOM LEFT SIDE */}
  <div className="absolute bottom-8 left-4 lg:left-8 z-20 flex gap-4">
    <button 
      onClick={scrollToLeft}
      disabled={!canScrollLeft}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        canScrollLeft 
          ? "bg-white text-black hover:bg-white/90 cursor-pointer" 
          : "bg-white/20 text-white/50 cursor-not-allowed"
      } transition-all duration-300 active:scale-95`}
      aria-label="Scroll left"
    >
      ←
    </button>
    
    <button 
      onClick={scrollToRight}
      disabled={!canScrollRight}
      className={`w-10 h-10 rounded-full flex items-center justify-center ${
        canScrollRight 
          ? "bg-white text-black hover:bg-white/90 cursor-pointer" 
          : "bg-white/20 text-white/50 cursor-not-allowed"
      } transition-all duration-300 active:scale-95`}
      aria-label="Scroll right"
    >
      →
    </button>
  </div>

  {/* SLIDER */}
  <div
    ref={sliderRef}
    className="
      flex gap-6 lg:gap-10
      overflow-x-auto
      px-4 lg:px-8
      pb-8 lg:pb-12
      cursor-grab
      select-none
      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
    "
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    onScroll={checkScrollButtons}
  >
    {testimonials.map((item, index) => (
      <div
        key={index}
        className="
          flex-shrink-0
          w-[90vw] sm:w-[500px] lg:w-[520px]
          relative
        "
      >
        {/* IMAGE BOX (OVERLAPPING - FULL WIDTH) */}
        <div
          className="
            absolute
            top-0
            left-0
            right-0
            w-full
            h-[200px] sm:h-[220px] lg:h-[240px]
            rounded-[18px] lg:rounded-[20px]
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
            sizes="(max-width: 340px) 90vw, (max-width: 1024px) 500px, 520px"
            priority={index < 2}
          />
        </div>

        {/* TEXT BOX (MAIN CARD) */}
        <div
          className="
            mt-[160px] sm:mt-[180px] lg:mt-[200px]
            rounded-[20px] lg:rounded-[22px]
            bg-gradient-to-br
            from-white/[0.08]
            to-white/[0.02]
            border border-white/[0.12]
            backdrop-blur-md
            px-6 sm:px-8 lg:px-8
            pb-6 sm:pb-8 lg:pb-8
            pt-8 sm:pt-10 lg:pt-12
            transition-all
            duration-300
            hover:border-white/[0.2]
            hover:shadow-xl
            min-h-[280px] sm:min-h-[300px] lg:min-h-[320px]
          "
        >
          <h4 className="text-white text-lg sm:text-xl lg:text-[20px] font-semibold">{item.name}</h4>
          <span className="text-xs sm:text-sm lg:text-[13px] italic text-gray-400 block mt-1">
            {item.company}
          </span>

          <p className="text-sm sm:text-base lg:text-[15px] text-gray-300 mt-4 sm:mt-5 leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* SCROLL INDICATOR DOTS - POSITIONED AT BOTTOM CENTER */}
  <div className="flex justify-center gap-2 mt-6 lg:mt-8">
    {testimonials.map((_, index) => (
      <div
        key={index}
        className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
      />
    ))}
  </div>
</div>
{/* ===== SEPARATING LINE AT THE END ===== */}
      <div className="w-full mt-32">
        <div className="relative">
          {/* MAIN LINE */}
          <div className="border-t border-white/20 w-full"></div>
        </div>
      </div>
    </section>
  );
}