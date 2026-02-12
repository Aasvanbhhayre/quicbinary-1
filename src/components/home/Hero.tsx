"use client";

import { useEffect, useState, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

interface Trail {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

// Mouse Effect Component - Same for both desktop and mobile
function HeroMouseEffect() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const trailIdRef = useRef(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isInsideHero, setIsInsideHero] = useState(false);
  const lastAddedRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInside =
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom;
        setIsInsideHero(isInside);
        if (isInside) {
          const now = Date.now();
          if (now - lastAddedRef.current > 150) {
            const newTrail: Trail = {
              x: mouseX,
              y: mouseY,
              id: trailIdRef.current++,
              timestamp: now,
            };

            setTrails((prev) => {
              const updated = [...prev, newTrail];
              if (updated.length > 3) {
                return updated.slice(1);
              }
              return updated;
            });

            lastAddedRef.current = now;
          }
        } else {
          if (trails.length > 0) {
            setTrails([]);
          }
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;
      
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInside =
          touchX >= rect.left &&
          touchX <= rect.right &&
          touchY >= rect.top &&
          touchY <= rect.bottom;
        setIsInsideHero(isInside);
        if (isInside) {
          const now = Date.now();
          if (now - lastAddedRef.current > 150) {
            const newTrail: Trail = {
              x: touchX,
              y: touchY,
              id: trailIdRef.current++,
              timestamp: now,
            };

            setTrails((prev) => {
              const updated = [...prev, newTrail];
              if (updated.length > 3) {
                return updated.slice(1);
              }
              return updated;
            });

            lastAddedRef.current = now;
          }
        } else {
          if (trails.length > 0) {
            setTrails([]);
          }
        }
      }
    };

    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((t) => now - t.timestamp < 500));
    }, 100);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      <div ref={heroRef} className="absolute inset-0 w-full" />
      {isInsideHero &&
        trails.map((trail, index) => {
          const age = Date.now() - trail.timestamp;
          const opacity = Math.max(0, 0.8 - (age / 500) * 0.8);
          const scale = 1 - (index / trails.length) * 0.4;

          return (
            <div
              key={trail.id}
              style={{
                position: "fixed",
                left: trail.x,
                top: trail.y,
                width: "50px",
                height: "50px",
                backgroundColor: "#374151",
                opacity: opacity,
                transform: `translate(-50%, -50%) scale(${scale})`,
                transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
                borderRadius: "",
                boxShadow: `0 0 60px 30px rgba(55, 65, 91, ${opacity * 0.7})`,
                zIndex: 9999,
                pointerEvents: "none",
              }}
            />
          );
        })}
    </>
  );
}

// Animated Ideas Text Component - Same for both desktop and mobile
function AnimatedIdeasText() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    setIsHovered(true);
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <span className="inline-block relative">
      <div
        className="inline-block px-4 sm:px-8 py-2 sm:py-3 rounded-full relative overflow-hidden transition-all duration-300 cursor-pointer"
        style={{
          border: `1px solid ${isHovered ? "#3b82f6" : "#99CCFF"}`,
          boxShadow: isHovered
            ? "0 0 25px rgba(59, 130, 246, 0.3)"
            : "0 0 20px rgba(153, 204, 255, 0.1)",
          backgroundColor: isHovered
            ? "rgba(59, 130, 246, 0.15)"
            : "transparent",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div className="relative h-[40px] sm:h-[90px] w-[100px] sm:w-[250px] flex items-center justify-center overflow-hidden">
          <span
            className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 text-4xl sm:text-8xl font-medium leading-none tracking-wider"
            style={{
              transform: isHovered ? "translateY(-100%)" : "translateY(0%)",
              opacity: isHovered ? 10 : 1,
            }}
          >
            Ideas
          </span>
          <span
            className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300 text-4xl sm:text-8xl font-medium leading-none tracking-wider"
            style={{
              transform: isHovered ? "translateY(0%)" : "translateY(100%)",
              opacity: isHovered ? 1 : 0,
            }}
          >
            Ideas
          </span>
        </div>
        <span
          className="absolute inset-0 rounded-full transition-all duration-300 pointer-events-none"
          style={{
            background: isHovered
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.1) 100%)"
              : "rgba(153, 204, 255, 0)",
            boxShadow: isHovered
              ? "inset 0 0 30px rgba(59, 130, 246, 0.3)"
              : "none",
          }}
        />
        {isAnimating && isHovered && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 animate-pulse pointer-events-none" />
        )}
      </div>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-[#0d1117] via-black to-[#0a0e1a]" />

      <div className="relative z-10 w-full min-h-screen flex flex-col items-start sm:items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full pointer-events-none">
          <HeroMouseEffect />
        </div>
        
        <div className="relative z-20 w-full">
          <div className="w-full px-4 sm:px-0">
            
            {/* Heading Section */}
            <div className="text-left sm:text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-white leading-tight flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-2 sm:gap-4">
                <span>Turning</span>
                <AnimatedIdeasText />
                <span className="whitespace-nowrap">Into</span>
              </h1>
            </div>

            {/* Sub Heading Section - THREE LINES on mobile, inline on desktop */}
            <div className="mb-10 sm:mb-6 text-left sm:text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-light text-white leading-tight">
                <em className="font-normal italic text-white">
                  <span className="block sm:inline">Scalable</span>
                  <span className="hidden sm:inline"> </span>
                  <span className="block sm:inline">Digital</span>
                  <span className="hidden sm:inline"> </span>
                  <span className="block sm:inline">Products</span>
                </em>
              </h2>
            </div>

            {/* Description Section */}
            <div className="mb-12 sm:mb-10 text-left sm:text-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-xl text-white/80 font-light tracking-wide leading-relaxed">
                We design and develop high-performance web and mobile solutions
                built for growth.
              </p>
            </div>

            {/* CTA Button Section */}
            <div className="w-full flex justify-start sm:justify-center mt-6 sm:mt-8">
              <button
                className="group inline-flex items-center gap-3
                           px-6 sm:px-8 md:px-10 lg:px-12
                           py-3 sm:py-4 md:py-5
                           rounded-full
                           border border-white/30
                           overflow-hidden
                           bg-transparent
                           hover:border-white/60 hover:bg-white/5
                           transition-all duration-300
                           relative z-20
                           cursor-pointer
                           active:scale-[0.98] sm:active:scale-100"
              >
                <span className="relative block w-[110px] sm:w-[130px] md:w-[145px] h-6 sm:h-7 overflow-hidden">
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white
                               transition-transform duration-500
                               group-hover:translate-x-full text-lg sm:text-xl font-medium"
                  >
                    Start Project
                  </span>
                  <span
                    className="absolute inset-0 flex items-center justify-center text-white
                               -translate-x-full
                               transition-transform duration-500
                               group-hover:translate-x-0 text-lg sm:text-xl font-medium"
                  >
                    Start Project
                  </span>
                </span>
                <span
                  className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full
                             bg-gradient-to-r from-white to-white
                             flex items-center justify-center
                             overflow-hidden shrink-0
                             group-hover:from-white group-hover:to-white
                             transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 flex items-center justify-center
                               text-blue-700
                               transition-transform duration-500
                               group-hover:translate-x-full"
                  >
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </span>
                  <span
                    className="absolute inset-0 flex items-center justify-center
                               text-blue-700
                               -translate-x-full
                               transition-transform duration-500
                               group-hover:translate-x-0"
                  >
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Separating line at the bottom */}
      <div className="w-full absolute bottom-0">
        <div className="relative">
          <div className="border-t border-white/20 w-full"></div>
        </div>
      </div>
    </section>
  );
}