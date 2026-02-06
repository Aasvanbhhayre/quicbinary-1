"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-black px-4 ">
      {/* HEADER WITH LOGO */}
      <div className="w-full mb-[70px]"> </div>

      <div
        className="w-full
                   grid grid-cols-1 lg:grid-cols-2 gap-[60px]
                   border border-white/20
                   p-[40px] lg:p-[60px]"
      >
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
          {/* LOGO */}
          <Image src="/logo.png" alt="logo" width={18} height={18} />
          <span className="tracking-widest text-white uppercase text-2xl">
            Contact
          </span>
        </div>

          <h2 className="text-[40px] leading-[1.2] text-white mt-4 mb-10 font-normal">
            Let’s Talk About What You’re <br />
            Building And How We Can <br />
            Help.
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-3xl text-white">• Want to call us?</p>
              <span className="block mt-1.5 text-[20px] text-[#bdbdbd]">
                +91 58622 47845
              </span>
            </div>

            <div>
              <p className="text-3xl text-white">• Prefer the old way?</p>
              <span className="block mt-1.5 text-[20px] text-[#bdbdbd]">
                contact@quicbinary.com
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="flex flex-col gap-[18px]">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-white/[0.04]
                       border border-white/[0.08]
                       px-4 py-[14px]
                       rounded-[12px]
                       text-sm text-white
                       outline-none
                       placeholder:text-[#9e9e9e]
                       focus:border-[#0b5cff]
                       transition-colors duration-200"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-white/[0.04]
                       border border-white/[0.08]
                       px-4 py-[14px]
                       rounded-[12px]
                       text-sm text-white
                       outline-none
                       placeholder:text-[#9e9e9e]
                       focus:border-[#0b5cff]
                       transition-colors duration-200"
          />

          <input
            type="text"
            placeholder="Mobile number"
            className="bg-white/[0.04]
                       border border-white/[0.08]
                       px-4 py-[14px]
                       rounded-[12px]
                       text-sm text-white
                       outline-none
                       placeholder:text-[#9e9e9e]
                       focus:border-[#0b5cff]
                       transition-colors duration-200"
          />

          <input
            type="text"
            placeholder="City"
            className="bg-white/[0.04]
                       border border-white/[0.08]
                       px-4 py-[14px]
                       rounded-[12px]
                       text-sm text-white
                       outline-none
                       placeholder:text-[#9e9e9e]
                       focus:border-[#0b5cff]
                       transition-colors duration-200"
          />

          <textarea
            rows={4}
            placeholder="Message"
            className="bg-white/[0.04]
                       border border-white/[0.08]
                       px-4 py-[14px]
                       rounded-[12px]
                       text-sm text-white
                       outline-none
                       resize-none
                       placeholder:text-[#9e9e9e]
                       focus:border-[#0b5cff]
                       transition-colors duration-200"
          ></textarea>

          <button
            type="submit"
            className="mt-5
                       bg-[#0b5cff]
                       text-white
                       text-[15px]
                       py-[14px]
                       rounded-[12px]
                       transition-all duration-200
                       hover:opacity-90
                       hover:scale-[1.02]
                       active:scale-[0.98]
                       font-medium"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}