"use client";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="w-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white mb-6">
          Turning{" "}
          <span 
            className="px-8 py-2 rounded-full font-medium text-white transition-all duration-300 hover:bg-[#99CCFF]/10"
            style={{ 
              border: "1px solid #99CCFF",
              boxShadow: "0 0 20px rgba(153, 204, 255, 0.1)"
            }}
          >
            Ideas
          </span>{" "}
          Into <br />
          <em className="font-normal italic text-white">Scalable Digital Products</em>
        </h1>

        <p className="text-lg md:text-xl text-white/80 mt-5 mb-10 max-w-2xl mx-auto">
          We design and develop high-performance web and mobile solutions built for growth.
        </p>

        {/* Updated Button with KnowMoreButton Style */}
        <div className="w-fit mx-auto">
          <button
            className="group inline-flex items-center gap-3
                       px-8 py-4
                       rounded-full
                       border border-white/30
                       overflow-hidden
                       bg-transparent
                       hover:border-white/60 hover:bg-white/5
                       transition-all duration-300"
          >
            {/* TEXT */}
            <span className="relative block w-[120px] h-6 overflow-hidden">
              <span
                className="absolute inset-0 flex items-center text-white
                           transition-transform duration-500
                           group-hover:translate-x-full"
              >
                Start Project
              </span>

              <span
                className="absolute inset-0 flex items-center text-white
                           -translate-x-full
                           transition-transform duration-500
                           group-hover:translate-x-0"
              >
                Start Project
              </span>
            </span>

            {/* ARROW */}
            <span
              className="relative w-9 h-9 rounded-full
                         bg-gradient-to-r from-white to-white
                         flex items-center justify-center
                         overflow-hidden shrink-0
                         group-hover:from-white group-hover:to-white
                         transition-all duration-300"
            >
              <span
                className="absolute inset-0 flex items-center justify-center
                           text-blue-600
                           transition-transform duration-500
                           group-hover:translate-x-full"
              >
                <FiArrowRight className="w-5 h-5" />
              </span>

              <span
                className="absolute inset-0 flex items-center justify-center
                           text-blue-600
                           -translate-x-full
                           transition-transform duration-500
                           group-hover:translate-x-0"
              >
                <FiArrowRight className="w-5 h-5" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}