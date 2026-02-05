"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/home.module.css";

/* ================= DATA ================= */

const WORK_ROWS = [
  {
    left: {
      src: "/rectangle4.png",
      title: "FYDE",
      desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    },
    right: {
      src: "/rectangle3.png",
      title: "FYDE",
      desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    },
  },
  {
    left: {
      src: "/workImg3.png",
      title: "FYDE",
      desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    },
    right: {
      src: "/image2.png",
      title: "FYDE",
      desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    },
  },
];

/* ================= PAGE ================= */

export default function OurWork() {
  return (
    <section className={styles.workSection}>
      <div className={styles.workHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.tagRow}>
            <Image src="/logo.png" alt="logo" width={18} height={18} />
            <span className={styles.sectionTag}>Our Works</span>
          </div>
          <h2>Latest Works</h2>
        </div>

        <p className={styles.headerDesc}>
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      <div className={styles.workRows}>
        {WORK_ROWS.map((row, index) => (
          <WorkRow key={index} left={row.left} right={row.right} />
        ))}
      </div>

      <div className={styles.viewAllWrap}>
        <ViewAllButton />
      </div>
    </section>
  );
}

/* ================= WORK ROW ================= */

function WorkRow({
  left,
  right,
}: {
  left: { src: string; title: string; desc: string };
  right: { src: string; title: string; desc: string };
}) {
  const [hover, setHover] = useState<"left" | "right" | null>(null);

  return (
    <div className={styles.workRow}>
      {/* LEFT CARD */}
      <div
        onMouseEnter={() => setHover("left")}
        onMouseLeave={() => setHover(null)}
        className={`${styles.workImageBox} flex flex-col border border-gray-700 bg-black ${
          hover === "right" ? styles.shrink : styles.expand
        }`}
      >
        {/* IMAGE */}
        <div className="relative h-[520px] rounded-[24px] bg-black overflow-hidden flex items-center justify-center">
          <Image
            src={left.src}
            alt={left.title}
            fill
            className="object-contain transition-all duration-700"
          />
        </div>

        <div className="mt-5 px-3 pb-4">
          <h3 className="text-xl font-medium">{left.title}</h3>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            {left.desc}
          </p>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div
        onMouseEnter={() => setHover("right")}
        onMouseLeave={() => setHover(null)}
        className={`${styles.workImageBox} flex flex-col border border-gray-700 bg-black ${
          hover === "left" ? styles.shrink : styles.expand
        }`}
      >
        <div className="relative h-[520px] rounded-[24px] bg-black overflow-hidden flex items-center justify-center">
          <Image
            src={right.src}
            alt={right.title}
            fill
            className="object-contain transition-all duration-700"
          />
        </div>

        <div className="mt-5 px-3 pb-4">
          <h3 className="text-xl font-medium">{right.title}</h3>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">
            {right.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= VIEW ALL BUTTON ================= */

function ViewAllButton() {
  return (
    <button className={styles.viewAllBtn}>
      <span className={styles.textWrap}>
        <span className={styles.text}>View All</span>
        <span className={styles.textHover}>View All</span>
      </span>

      <span className={styles.arrowWrap}>
        <span className={styles.arrow}>→</span>
      </span>
    </button>
  );
}
