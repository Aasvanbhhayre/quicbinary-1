import styles from "../../styles/home.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutTop}>
        {/* LEFT CONTENT */}
        <div className={styles.aboutText}>
          <span className={styles.sectionTag}>About Us</span>

          <h2>
            Trusted By Startups And Businesses <br />
            To Build Future-Ready Digital Solutions.
          </h2>

          <p>
            We combine strategy, design, and technology to build scalable
            digital products for growing businesses.
          </p>

          <button className={styles.secondaryBtn}>
            More About Us <span>→</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.aboutImage}>
          <Image
            src="/images/Rectangle1290.png"
            alt="About Us"
            width={520}
            height={380}
            className={styles.image}
          />
        </div>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>100%</h3>
          <p>Focus On Solutions</p>
        </div>

        <div className={styles.statCard}>
          <h3>8+</h3>
          <p>Team Experience</p>
        </div>

        <div className={styles.statCard}>
          <h3>23+</h3>
          <p>Countries Served</p>
        </div>

        <div className={styles.statCard}>
          <h3>80+</h3>
          <p>Projects Delivered</p>
        </div>

        <div className={styles.statCard}>
          <h3>13+</h3>
          <p>Industry Verticals</p>
        </div>

        <div className={styles.statCard}>
          <h3>47+</h3>
          <p>Development Staff</p>
        </div>
      </div>
    </section>
  );
}
