import styles from "../../styles/home.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heading}>
          Turning <span className={styles.highlight}>Ideas</span> Into <br />
          <em>Scalable Digital Products</em>
        </h1>

        <p className={styles.subtext}>
          We design and develop high-performance web and mobile solutions built
          for growth.
        </p>

        <button className={styles.cta}>
          Start the Project <span>→</span>
        </button>
      </div>
    </section>
  );
}
