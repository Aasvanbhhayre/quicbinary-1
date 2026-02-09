"use client";

export default function Footer() {
  return (
    <footer className="bg-black px-4 md:px-6 pt-16 md:pt-[100px] pb-10 md:pb-[60px] border-t border-white/[0.08] w-full">
      {/* TOP LINKS - Centered on mobile, full width grid on desktop */}
      <div className="w-full  flex flex-col items-center md:grid md:grid-cols-4 gap-8 md:gap-10">
        {/* Studio Section */}
        <div className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-[22px] md:text-[25px] mb-4 md:mb-6 text-[#0b5cff] font-medium">Studio</h4>
          <ul className="space-y-2 md:space-y-3">
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">About</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Services</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Work</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Contact</li>
          </ul>
        </div>

        {/* Socials Section */}
        <div className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-[22px] md:text-[25px] mb-4 md:mb-6 text-[#0b5cff] font-medium">Socials</h4>
          <ul className="space-y-2 md:space-y-3">
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Linkedin</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Instagram</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Twitter</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Facebook</li>
          </ul>
        </div>

        {/* Trust And Legal Section */}
        <div className="w-full md:w-auto text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-[22px] md:text-[25px] mb-4 md:mb-6 text-[#0b5cff] font-medium">Trust And Legal</h4>
          <ul className="space-y-2 md:space-y-3">
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Terms & Conditions</li>
            <li className="text-[18px] md:text-[20px] text-white cursor-pointer hover:text-[#0b5cff] transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact info Section */}
        <div className="w-full md:w-auto text-center md:text-left">
          <h4 className="text-[22px] md:text-[25px] mb-4 md:mb-6 text-[#0b5cff] font-medium">Contact info</h4>
          <ul className="space-y-2 md:space-y-3">
            <li className="text-[18px] md:text-[20px] text-white hover:text-[#0b5cff] transition-colors cursor-pointer">hi@quicbinary.com</li>
            <li className="text-[18px] md:text-[20px] text-white hover:text-[#0b5cff] transition-colors cursor-pointer">+915263647852</li>
            <li className="text-[18px] md:text-[20px] text-white leading-relaxed hover:text-[#0b5cff] transition-colors">
              4th Floor, Vidyapati Building <br />
              Janjeerwala Square, Indore
            </li>
          </ul>
        </div>
      </div>

      {/* BRAND IMAGE LOGO */}
      <div className="w-full mt-12 md:mt-20">
        <div className="w-full  flex justify-center">
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