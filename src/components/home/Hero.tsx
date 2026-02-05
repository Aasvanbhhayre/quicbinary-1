'use client';

import { useEffect, useState, useRef } from 'react';
import { FiArrowRight } from "react-icons/fi";

interface Trail {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

// Mouse Effect Component
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
        const isInside = (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        );
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

            setTrails(prev => {
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
      setTrails(prev => prev.filter(t => now - t.timestamp < 500));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <>
      {/* Hero section reference - full width */}
      <div ref={heroRef} className="absolute inset-0 w-full" />
      {isInsideHero && trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 0.8 - (age / 500) * 0.8);
        const scale = 1 - (index / trails.length) * 0.4;

        return (
          <div
            key={trail.id}
            style={{
              position: 'fixed',
              left: trail.x,
              top: trail.y,
              width: '50px',
              height: '50px',
              backgroundColor: '#374151',
              opacity: opacity,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              borderRadius: '',
              boxShadow: `0 0 60px 30px rgba(55, 65, 91, ${opacity * 0.7})`,
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
}

// Animated Ideas Text Component
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
    }, 300); 
  };
  
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <span className="group inline-block relative">
      <div 
        className="inline-block px-8 py-3 rounded-full relative overflow-hidden transition-all duration-300 cursor-pointer"
        style={{ 
          border: `1px solid ${isHovered ? '#3b82f6' : '#99CCFF'}`, // blue-500 on hover
          boxShadow: isHovered 
            ? "0 0 25px rgba(59, 130, 246, 0.3)" 
            : "0 0 20px rgba(153, 204, 255, 0.1)",
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.15)" : "transparent", // blue-500
          transition: "all 0.3s ease"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Text Container with proper height and alignment */}
        <div 
          className="relative h-[50px] w-[170px] flex items-center justify-center overflow-hidden"
        >
          {/* Current Text - Slides Up on hover */}
          <span
            className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300"
            style={{
              transform: isHovered ? 'translateY(-100%)' : 'translateY(0%)',
              opacity: isHovered ? 0 : 1,
              fontSize: '3.75rem',
              fontWeight: '500',
              lineHeight: '1',
              letterSpacing: '2.5px'
            }}
          >
            Ideas
          </span>
          
          {/* New Text - Enters from Bottom on hover */}
          <span
            className="absolute inset-0 flex items-center justify-center text-white transition-all duration-300"
            style={{
              transform: isHovered ? 'translateY(0%)' : 'translateY(100%)',
              opacity: isHovered ? 1 : 0,
              fontSize: '3.75rem',
              fontWeight: '500',
              lineHeight: '1',
              letterSpacing: '2.5px'
            }}
          >
            Ideas
          </span>
        </div>

        {/* Hover effect overlay */}
        <span 
          className="absolute inset-0 rounded-full transition-all duration-300 pointer-events-none"
          style={{ 
            background: isHovered 
              ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.1) 100%)" 
              : "rgba(153, 204, 255, 0)",
            boxShadow: isHovered 
              ? "inset 0 0 30px rgba(59, 130, 246, 0.3)" 
              : "none"
          }}
        />
        
        {/* Glow effect during animation */}
        {isAnimating && isHovered && (
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 animate-pulse pointer-events-none" />
        )}
      </div>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Full width background */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-[#0d1117] via-black to-[#0a0e1a]" />

      {/* HERO SECTION with Mouse Effect - FULL WIDTH */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 w-full pointer-events-none">
          <HeroMouseEffect />
        </div>
        <div className="relative z-20 w-full max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-8xl  text-white leading-[0.9]">
              Turning{" "}
              <div className="inline-block mx-4">
                <AnimatedIdeasText />
              </div>{" "}
              Into
            </h1>
          </div>

          {/* Heading 2 - Scalable Digital Products - Proper spacing */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.9]">
              <em className="font-normal italic text-white">Scalable Digital Products</em>
            </h2>
          </div>

          {/* Description - Proper spacing and alignment */}
          <div className="mb-20">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
              We design and develop high-performance web and mobile solutions built for growth.
            </p>
          </div>

          {/* CTA Button - Updated with proper spacing */}
          <div className="w-full flex justify-center mt-8">
            <button
              className="group inline-flex items-center gap-3
                         px-12 py-5
                         rounded-full
                         border border-white/30
                         overflow-hidden
                         bg-transparent
                         hover:border-white/60 hover:bg-white/5
                         transition-all duration-300
                         relative z-20
                         cursor-pointer"
            >
              {/* TEXT Container */}
              <span className="relative block w-[145px] h-7 overflow-hidden">
                <span
                  className="absolute inset-0 flex items-center justify-center text-white
                             transition-transform duration-500
                             group-hover:translate-x-full text-xl font-medium"
                >
                  Start Project
                </span>

                <span
                  className="absolute inset-0 flex items-center justify-center text-white
                             -translate-x-full
                             transition-transform duration-500
                             group-hover:translate-x-0 text-xl font-medium"
                >
                  Start Project
                </span>
              </span>

              {/* ARROW Container */}
              <span
                className="relative w-11 h-11 rounded-full
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
                  <FiArrowRight className="w-6 h-6" />
                </span>

                <span
                  className="absolute inset-0 flex items-center justify-center
                             text-blue-700
                             -translate-x-full
                             transition-transform duration-500
                             group-hover:translate-x-0"
                >
                  <FiArrowRight className="w-6 h-6" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Full width decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent" />
    </section>
  );
}