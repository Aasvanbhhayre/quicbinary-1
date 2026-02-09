"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-[100px] pb-[60px] border-t border-white/[0.08]">
      {/* TOP LINKS */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-[25px] mb-6 text-[#0b5cff] font-medium">Studio</h4>
          <ul className="space-y-3">
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">About</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Services</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Work</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[25px] mb-6 text-[#0b5cff] font-medium">Socials</h4>
          <ul className="space-y-3">
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Linkedin</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Instagram</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Twitter</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Facebook</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[25px] mb-6 text-[#0b5cff] font-medium">Trust And Legal</h4>
          <ul className="space-y-3">
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Terms & Conditions</li>
            <li className="text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[25px] mb-6 text-[#0b5cff] font-medium">Contact info</h4>
          <ul className="space-y-3">
            <li className="text-[20px] text-white hover:text-[#0b5cff]">hi@quicbinary.com</li>
            <li className="text-[20px] text-white hover:text-[#0b5cff]">+915263647852</li>
            <li className="text-[20px] text-white leading-relaxed hover:text-[#0b5cff]">
              4th Floor, Vidyapati Building <br />
              Janjeerwala Square, Indore
            </li>
          </ul>
        </div>
      </div>

      {/* BRAND IMAGE LOGO */}
      <div className="w-full mt-20">
        <div className="w-full">
          <img 
            src="/quicbinary logo.png" 
            alt="Quicbinary Logo" 
            className="w-full h-auto object-contain opacity-50"
          />
        </div>
      </div>
    </footer>
  );
}