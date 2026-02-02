"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { FaGlobe, FaUsers, FaRocket, FaAward, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export default function AboutUsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "100+", label: "Build on our experience from digital products that scale" },
    { value: "8+", label: "Real expertise" },
    { value: "23+", label: "Qualities shared" },
    { value: "80+", label: "Regions delivered" },
    { value: "13+", label: "Industry trends" },
    { value: "47+", label: "Development skill" },
  ];

  const companies = [
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Meta", logo: "/logos/meta.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
    { name: "Tesla", logo: "/logos/tesla.svg" },
    { name: "Uber", logo: "/logos/uber.svg" },
    { name: "Airbnb", logo: "/logos/airbnb.svg" },
    { name: "Spotify", logo: "/logos/spotify.svg" },
  ];

  const members = [
    { name: "Priya Sharma", role: "Founder & CEO", initial: "PS" },
    { name: "Priya Sharma", role: "Co-Founder & CTO", initial: "PS" },
    { name: "Priya Sharma", role: "Co-Founder & CTO", initial: "PS" },
  ];

  const services = [
    "Product Development",
    "UI/UX Design", 
    "Web Development"
  ];

  const faqs = [
    {
      question: "How long does it take to get results?",
      answer: "It depends on the project. We work closely with our clients to understand their needs and develop tailored solutions."
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing varies based on the scope of work and complexity of the project. We offer flexible pricing options to accommodate different budgets."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer post-project support to ensure a smooth transition and maximize the benefits of our solutions."
    },
    {
      question: "Can I customize the solution to fit my specific needs?",
      answer: "Absolutely! We work closely with our clients to understand their unique requirements and deliver customized solutions."
    },
    {
      question: "How do you stay updated with the latest trends?",
      answer: "We regularly attend industry conferences, participate in webinars, and follow thought leaders in the field to stay informed about the latest trends and best practices."
    }
  ];

  // Fallback image placeholder generator
  const generateImagePlaceholder = (text: string, width: number = 800, height: number = 600) => {
    return `https://placehold.co/${width}x${height}/0b0f14/ffffff?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full min-h-screen bg-[#0b0f14] text-white">

      {/* HERO SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-cyan-400 mb-4 text-sm md:text-base tracking-wider">From concept to market leader</p>
          <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-16">
            Building Digital Products<br />That Scale
          </h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-20">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{s.value}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
          
          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 md:mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b0f14] via-[#0b0f14]/90 to-[#0b0f14]/80 z-5"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center z-20 p-8">
                <div className="text-cyan-400 text-4xl md:text-6xl mb-4">🚀</div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  Digital Innovation Hub
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Transforming ideas into scalable digital solutions with cutting-edge technology
                </p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-md">
                <FaQuoteLeft className="text-cyan-400 text-xl mb-2" />
                <p className="text-white text-sm md:text-base">
                  Transforming ideas into scalable digital solutions with cutting-edge technology and innovative design.
                </p>
              </div>
            </div>
          </div>

          {/* Company Logos Marquee */}
          <div className="mb-16 md:mb-24">
            <p className="text-center text-gray-400 mb-6 text-sm md:text-base">Trusted by industry leaders</p>
            <div className="relative overflow-hidden">
              <div 
                ref={scrollRef}
                className="flex items-center space-x-8 md:space-x-16 py-4 overflow-x-auto scrollbar-hide"
                style={{ scrollBehavior: 'auto' }}
              >
                {/* First set */}
                {companies.map((company, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="w-32 h-16 md:w-40 md:h-20 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 border border-cyan-500/10">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg md:text-xl">{company.name}</div>
                        <div className="text-cyan-400 text-xs">Partner</div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companies.map((company, index) => (
                  <div key={`dup-${index}`} className="flex-shrink-0">
                    <div className="w-32 h-16 md:w-40 md:h-20 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 border border-cyan-500/10">
                      <div className="text-center">
                        <div className="text-white font-bold text-lg md:text-xl">{company.name}</div>
                        <div className="text-cyan-400 text-xs">Partner</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0b0f14] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0b0f14] to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-dashed border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Who We Are</h2>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                As a team of young professionals, we are passionate about what we do. We have a deep understanding of the challenges and opportunities in the digital landscape. Our goal is to help our clients achieve their goals by leveraging our expertise and industry knowledge.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Web Development</h3>
                <div className="flex flex-wrap gap-3">
                  {services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-[#0f1620] border border-cyan-500/30 rounded-full text-sm hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 active:scale-95">
                Learn More About Us
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-2">Our Team</h3>
                  <p className="text-gray-300">Young professionals passionate about digital innovation</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl">🌟</div>
                  <p className="text-xs mt-1">Since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-dashed border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-[#0f1620] border border-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <FaRocket className="text-cyan-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Our mission is to empower businesses with innovative solutions that drive growth and success. We are committed to delivering high-quality services that exceed expectations.
              </p>
            </div>
            
            <div className="bg-[#0f1620] border border-cyan-500/30 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <FaAward className="text-purple-400 text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Our vision is to be at the forefront of digital innovation, shaping the future of technology and creating value for our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-dashed border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <div key={index} className="group bg-[#0f1620] border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{member.initial}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium">{member.role}</p>
                <div className="mt-4 pt-4 border-t border-cyan-500/20">
                  <p className="text-gray-400 text-sm">
                    Passionate about creating innovative digital solutions that make a difference.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-dashed border-cyan-500/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group bg-[#0f1620] border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-[#111a26] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-cyan-400 font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                  <FaChevronRight className="text-cyan-400 group-hover:rotate-90 transition-transform flex-shrink-0 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-dashed border-cyan-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Digital Products. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Building the future, one digital product at a time.
          </p>
        </div>
      </footer>

      {/* Custom Scrollbar Hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </div>
  );
}