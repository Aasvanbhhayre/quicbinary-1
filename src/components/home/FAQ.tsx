"use client";

import { useState } from "react";
import styles from "../../styles/home.module.css";

const faqs = [
  {
    question: "What’s your typical process for a new project?",
    answer:
      "Our process starts with discovery and strategy, followed by design, development, testing, and final deployment. We maintain transparency and collaboration at every step.",
  },
  {
    question: "What’s your typical process for a new project?",
    answer:
      "We align business goals with technical execution to ensure scalable and future-ready digital solutions.",
  },
  {
    question: "What’s your typical process for a new project?",
    answer:
      "Yes, we provide continuous support, optimization, and maintenance after project delivery.",
  },
  {
    question: "What’s your typical process for a new project?",
    answer:
      "Project timelines depend on scope and complexity, but we always deliver within agreed milestones.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      {/* HEADER */}
      <div className={styles.faqHeader}>
        <span className={styles.sectionTag}>FAQs</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      {/* FAQ LIST */}
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.activeFaq : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faqQuestion}>
              <span className={styles.faqNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4>{faq.question}</h4>
              <span className={styles.faqIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
