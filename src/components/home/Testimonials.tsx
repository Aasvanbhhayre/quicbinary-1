"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "William Barnes",
    company: "CEO, NovaTech Canada",
    text: `"Quicbinary delivered an outstanding SaaS platform for us with exceptional clarity, speed, and engineering quality. Their team guided us from concept to deployment with complete transparency. A reliable long-term tech partner."`,
    image: "/man.png",
  },
  {
    name: "Sarah Johnson",
    company: "CTO, TechFlow Solutions",
    text: `"The team at Quicbinary transformed our outdated system into a modern, scalable solution. Their attention to detail and commitment to quality is unmatched. Highly recommended!"`,
    image: "/man.png",
  },
  {
    name: "Michael Chen",
    company: "Director, Global Innovations Inc.",
    text: `"Working with Quicbinary was a game-changer for our business. They delivered ahead of schedule and under budget. Exceptional service from start to finish."`,
    image: "/man.png",
  },
  {
    name: "Emma Rodriguez",
    company: "Head of Product, Digital Dynamics",
    text: `"Quicbinary's expertise in cloud architecture saved us months of development time. Their solutions are robust, secure, and perfectly aligned with our business goals."`,
    image: "/man.png",
  },
  {
    name: "David Kim",
    company: "Founder, FutureTech Labs",
    text: `"Outstanding partnership! Quicbinary not only delivered a great product but also provided comprehensive training and ongoing support. A truly professional team."`,
    image: "/man.png",
  },
  {
    name: "Lisa Thompson",
    company: "VP Engineering, Enterprise Solutions Ltd.",
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
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollToLeft = () => {
    if (sliderRef.current) {
      const cardWidth = isMobile ? sliderRef.current.clientWidth : 520 + 40;
      sliderRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToRight = () => {
    if (sliderRef.current) {
      const cardWidth = isMobile ? sliderRef.current.clientWidth : 520 + 40;
      sliderRef.current.scrollBy({
        left: cardWidth,
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
    sliderRef.current.style.cursor = 'grabbing';
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

  // Handle touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    setStartX(touch.clientX - rect.left);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
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
    <section className="bg-black overflow-hidden">
      {/* HEADER */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-[70px]">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-6">
          <Image 
            src="/logo.png" 
            alt="icon" 
            width={16} 
            height={16}
            className="w-4 h-4 sm:w-5 sm:h-5" 
          />
          <span className="tracking-widest text-gray-300 text-lg sm:text-xl lg:text-2xl">Testimonials</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-white leading-tight font-semibold">
          Hear What They <br className="hidden sm:block" /> Say About Us.
        </h2>
      </div>

      {/* SLIDER CONTAINER */}
      <div className="relative">
        {/* ARROWS - BOTTOM LEFT CORNER for both mobile and desktop */}
        <div className="absolute bottom-6 left-4 sm:left-6 lg:left-8 z-20 flex gap-2 sm:gap-4">
          <button 
            onClick={scrollToLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95
              ${canScrollLeft 
                ? "bg-white text-black hover:bg-white/90 cursor-pointer" 
                : "bg-white/20 text-white/50 cursor-not-allowed"
              }`}
            aria-label="Scroll left"
          >
            <span className="text-xl">←</span>
          </button>
          
          <button 
            onClick={scrollToRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95
              ${canScrollRight 
                ? "bg-white text-black hover:bg-white/90 cursor-pointer" 
                : "bg-white/20 text-white/50 cursor-not-allowed"
              }`}
            aria-label="Scroll right"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="
            flex gap-4 sm:gap-5 lg:gap-10
            overflow-x-auto
            px-4 sm:px-6 lg:px-8
            pb-20 sm:pb-24 lg:pb-28
            cursor-grab
            select-none
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            touch-pan-x
            snap-x snap-mandatory
          "
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onScroll={checkScrollButtons}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                w-[calc(100vw-32px)] sm:w-[calc(50vw-40px)] lg:w-[520px]
                relative
                snap-center
              "
            >
              {/* IMAGE BOX */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  w-full
                  h-[160px] sm:h-[180px] md:h-[200px] lg:h-[240px]
                  rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]
                  overflow-hidden
                  bg-black
                  z-10
                  shadow-lg sm:shadow-xl lg:shadow-2xl
                "
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) calc(50vw - 40px), 520px"
                  priority={index < 2}
                />
              </div>

              {/* TEXT BOX */}
              <div
                className="
                  mt-[120px] sm:mt-[140px] md:mt-[160px] lg:mt-[200px]
                  rounded-[16px] sm:rounded-[18px] md:rounded-[20px] lg:rounded-[22px]
                  bg-gradient-to-br
                  from-white/[0.08]
                  to-white/[0.02]
                  border border-white/[0.12]
                  backdrop-blur-sm md:backdrop-blur-md
                  px-4 sm:px-5 md:px-6 lg:px-8
                  pb-4 sm:pb-5 md:pb-6 lg:pb-8
                  pt-6 sm:pt-7 md:pt-8 lg:pt-12
                  transition-all
                  duration-300
                  hover:border-white/[0.2]
                  hover:shadow-lg sm:hover:shadow-xl
                  min-h-[240px] sm:min-h-[260px] md:min-h-[280px] lg:min-h-[320px]
                "
              >
                {/* NAME AND DESIGNATION */}
                <div className="mb-3 sm:mb-4">
                  <h4 className="text-white text-base sm:text-lg md:text-xl lg:text-[20px] font-semibold mb-1">
                    {item.name}
                  </h4>
                  <span className="text-xs sm:text-sm lg:text-[13px] text-gray-400 block font-normal">
                    {item.company}
                  </span>
                </div>

                <p className="text-sm sm:text-base lg:text-[15px] text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEPARATING LINE */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-32">
        <div className="border-t border-white/20 w-full"></div>
      </div>
    </section>
  );
}