"use client";

import Image from "next/image";
import { useState } from "react";

/* ================= MAIN SECTION ================= */

export default function Services() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      {/* ===== TOP HEADER ===== */}
      <div className="max-w-[1400px] mx-auto mb-32">
        <div className="flex items-center gap-3 mb-6">
          <Image src="/logo.png" alt="Services icon" width={18} height={18} />
          <span className="text-sm tracking-widest text-gray-300">
            Services
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-medium mb-6">What We Offer</h2>

        <p className="text-gray-400 max-w-3xl text-lg">
          We Craft Digital Experiences From Idea To Launch — Blending Strategy,
          Design, And Engineering To Build Products That Performs.
        </p>
      </div>

      {/* ===== SERVICES ===== */}
      <div className="space-y-32">
        <ServiceRow
          icon="/icon1.png"
          title={
            <>
              WEB
              <br />
              DEVELOPMENT
            </>
          }
          description="Building scalable, secure & high-performance websites."
        />

        <ServiceRow
          reverse
          icon="/icon2.png"
          title={
            <>
              CUSTOM SOFTWARE
              <br />
              DEVELOPMENT
            </>
          }
          description="Tailored software solutions built for business automation."
        />

        <ServiceRow
          icon="/icon3.png"
          title={
            <>
              MOBILE &<br />
              CLOUD
            </>
          }
          description="Cloud-native mobile apps with seamless scalability."
        />

        <ServiceRow
          reverse
          icon="/icon4.png"
          title={
            <>
              SAAS, CRM,
              <br />
              ERP
            </>
          }
          description="Enterprise-grade platforms for operations and growth."
        />

        <ServiceRow
          icon="/icon5.png"
          title={
            <>
              DIGITAL
              <br />
              MARKETING
            </>
          }
          description="SEO, paid ads & growth strategies that convert users."
        />
      </div>
    </section>
  );
}

/* ================= SERVICE ROW ================= */

function ServiceRow({
  title,
  description,
  icon,
  reverse = false,
}: {
  title: React.ReactNode;
  description: string;
  icon: string;
  reverse?: boolean;
}) {
  const [imageHover, setImageHover] = useState(false);

  return (
    <div
      className={`max-w-[1400px] mx-auto h-[520px] flex gap-10
        ${reverse ? "flex-row-reverse" : ""}`}
    >
      {/* IMAGE GROUP */}
      <div
        className={`flex h-full gap-6 transition-all duration-700 ease-in-out
          ${imageHover ? "flex-[6]" : "flex-[4]"}`}
      >
        <ImageBox src="/image1.png" setHover={setImageHover} />
        <ImageBox src="/image2.png" setHover={setImageHover} />
        <ImageBox src="/image3.png" setHover={setImageHover} />
      </div>

      {/* SERVICE CARD */}
      <div
        className={`h-full transition-all duration-700 ease-in-out
          ${imageHover ? "flex-[4]" : "flex-[6]"}
          border border-white/20
          bg-gradient-to-br from-black to-neutral-900
          rounded-[28px]
          p-12 flex flex-col`}
      >
        {/* CONTENT (LOCKED – NO JUMP) */}
        <div className="flex flex-col gap-6">
          {/* ICON */}
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
            <Image src={icon} alt="Service icon" width={28} height={28} />
          </div>

          {/* FIXED TITLE — NO JUMP, NO CUT */}
          <div className="min-h-[150px]">
            <h3
              className="
      text-5xl md:text-6xl
      font-medium
      leading-tight
      whitespace-pre-line
      w-max
      max-w-full
    "
            >
              {title}
            </h3>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-xl max-w-md">{description}</p>
        </div>

        {/* BUTTON ALWAYS AT BOTTOM */}
        <div className="mt-auto">
          <KnowMoreButton />
        </div>
      </div>
    </div>
  );
}

/* ================= IMAGE BOX ================= */

function ImageBox({
  src,
  setHover,
}: {
  src: string;
  setHover: (v: boolean) => void;
}) {
  const [selfHover, setSelfHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
        setSelfHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
        setSelfHover(false);
      }}
      className={`relative h-full overflow-hidden rounded-[28px]
        transition-all duration-700 ease-in-out
        ${selfHover ? "flex-[4]" : "flex-1"}`}
    >
      <Image
        src={src}
        alt="Service image"
        fill
        className="object-cover transition-transform duration-700 hover:scale-110"
      />

      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
    </div>
  );
}

/* ================= KNOW MORE BUTTON ================= */

function KnowMoreButton() {
  return (
    <div className="w-fit">
      <button
        className="group inline-flex items-center gap-3
          px-5 py-2
          rounded-full
          border border-neutral-500
          overflow-hidden
          bg-transparent"
      >
        {/* TEXT */}
        <span className="relative block w-[90px] h-5 overflow-hidden">
          <span
            className="absolute inset-0 flex items-center
            transition-transform duration-500
            group-hover:translate-x-full"
          >
            Know more
          </span>

          <span
            className="absolute inset-0 flex items-center
            -translate-x-full
            transition-transform duration-500
            group-hover:translate-x-0"
          >
            Know more
          </span>
        </span>

        {/* ARROW */}
        <span
          className="relative w-7 h-7 rounded-full bg-white
            flex items-center justify-center overflow-hidden shrink-0"
        >
          <span
            className="absolute inset-0 flex items-center justify-center
            text-black transition-transform duration-500
            group-hover:translate-x-full"
          >
            →
          </span>

          <span
            className="absolute inset-0 flex items-center justify-center
            text-black -translate-x-full transition-transform duration-500
            group-hover:translate-x-0"
          >
            →
          </span>
        </span>
      </button>
    </div>
  );
}
