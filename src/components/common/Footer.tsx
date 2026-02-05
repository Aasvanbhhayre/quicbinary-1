"use client";

export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-[100px] pb-[60px] border-t border-white/[0.08]">
      {/* TOP LINKS */}
      <div className="max-w-[1200px] mx-auto mb-[80px] grid grid-cols-4 gap-10">
        <div>
          <h4 className="text-[15px] mb-4 text-[#0b5cff]">Studio</h4>
          <ul>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              About
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Services
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Work
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] mb-4 text-[#0b5cff]">Socials</h4>
          <ul>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              LinkedIn
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Instagram
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Twitter
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Facebook
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] mb-4 text-[#0b5cff]">
            Trust And Legal
          </h4>
          <ul>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Terms & Conditions
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed cursor-pointer hover:text-white">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[15px] mb-4 text-[#0b5cff]">Contact info</h4>
          <ul>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed">
              hi@quicbinary.com
            </li>
            <li className="text-sm text-[#bdbdbd] mb-2.5 leading-relaxed">
              +91 5263647852
            </li>
            <li className="text-sm text-[#bdbdbd] leading-relaxed">
              4th Floor, Vidyapati Building <br />
              Janjeerwala Square, Indore
            </li>
          </ul>
        </div>
      </div>

      {/* BRAND */}
      <div className="max-w-[1200px] mx-auto flex items-baseline text-[140px] font-semibold leading-none tracking-[-4px] text-white/20">
        <span>Quicbinary</span>
        <span className="text-[#0b5cff] ml-1.5">.</span>
      </div>
    </footer>
  );
}
