import styles from "../../styles/home.module.css";

const steps = [
  {
    title: "Discover",
    desc: "We understand your goals, users, and business requirements to define a clear product vision.",
    step: 1,
  },
  {
    title: "Strategy",
    desc: "We plan the right approach, technology stack, and roadmap for long-term scalability.",
    step: 2,
  },
  {
    title: "Design",
    desc: "We create intuitive, user-focused interfaces with wireframes and high-fidelity UI designs.",
    step: 3,
  },
  {
    title: "Development",
    desc: "We build fast, secure, and scalable web or mobile solutions using clean code practices.",
    step: 4,
  },
  {
    title: "Testing",
    desc: "We thoroughly test for performance, usability, and security to ensure a flawless experience.",
    step: 5,
  },
];

export default function Process() {
  return (
    <section className={styles.processSection}>
      {/* HEADER */}
      <div className={styles.processHeader}>
        <span className={styles.sectionTag}>Process</span>
        <h2>How We Work</h2>
      </div>

      {/* TIMELINE */}
      <div className={styles.timeline}>
        <div className={styles.timelineLine}></div>

        {steps.map((item) => (
          <div key={item.step} className={styles.timelineItem}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className={styles.stepCircle}>{item.step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
