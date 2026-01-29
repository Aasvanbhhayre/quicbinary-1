import styles from "../../styles/home.module.css";

const works = [
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "light",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "dark",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "dark",
  },
  {
    title: "FYDE",
    desc: "Visuals were curated to evoke a sense of avant-garde sophistication.",
    variant: "light",
  },
];

export default function OurWork() {
  return (
    <section className={styles.workSection}>
      {/* HEADER */}
      <div className={styles.workHeader}>
        <div>
          <span className={styles.sectionTag}>Our Works</span>
          <h2>Latest Works</h2>
        </div>

        <p>
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      {/* GRID */}
      <div className={styles.workGrid}>
        {works.map((item, index) => (
          <div key={index} className={styles.workCard}>
            <div
              className={`${styles.workImage} ${
                item.variant === "dark" ? styles.darkCard : styles.lightCard
              }`}
            >
              {/* Placeholder UI */}
              <div className={styles.mockUi}></div>
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      <button className={styles.viewAll}>
        View All <span>→</span>
      </button>
    </section>
  );
}
