"use client";

export default function Contact() {
  return (
    <section className="bg-black px-6 py-[120px]">
      <div
        className="max-w-[1200px] mx-auto
                   grid grid-cols-2 gap-[60px]
                   border border-white/[0.08]
                   rounded-[24px]
                   p-[60px]"
      >
        {/* LEFT CONTENT */}
        <div>
          <span className="text-xs uppercase tracking-widest text-[#bdbdbd]">
            Contact
          </span>

          <h2 className="text-[40px] leading-[1.2] text-white mt-4 mb-10 font-normal">
            Let’s Talk About What You’re <br />
            Building And How We Can <br />
            Help.
          </h2>

          <div>
            <p className="mt-5 text-sm text-[#bdbdbd]">
              • Want to call us?
            </p>
            <span className="block mt-1.5 text-[15px] text-white">
              +91 58622 47845
            </span>

            <p className="mt-5 text-sm text-[#bdbdbd]">
              • Prefer the old way?
            </p>
            <span className="block mt-1.5 text-[15px] text-white">
              contact@quicbinary.com
            </span>
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
                       focus:border-[#0b5cff]"
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
                       focus:border-[#0b5cff]"
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
                       focus:border-[#0b5cff]"
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
                       focus:border-[#0b5cff]"
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
                       focus:border-[#0b5cff]"
          ></textarea>

          <button
            type="submit"
            className="mt-5
                       bg-[#0b5cff]
                       text-white
                       text-[15px]
                       py-[14px]
                       rounded-[12px]
                       transition-opacity
                       hover:opacity-90"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}
