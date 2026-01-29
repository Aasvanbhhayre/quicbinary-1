import styles from "../../styles/home.module.css";

export default function Services() {
  return (
    <section className={styles.servicesSection}>
      {/* HEADER */}
      <div className={styles.servicesHeader}>
        <span className={styles.sectionTag}>Services</span>
        <h2>What We Offer</h2>
        <p>
          We craft digital experiences from idea to launch — blending strategy,
          design, and engineering to build products that perform.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className={styles.servicesGrid}>
        {/* SERVICE 1 */}
        <div className={styles.serviceRow}>
          <div className={styles.serviceImages}>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.icon}>{"</>"}</span>
            <h3>WEB DEVELOPMENT</h3>
            <p>Web Apps, SaaS Platforms, Dashboards, CMS</p>
            <button className={styles.knowMore}>
              Know more <span>→</span>
            </button>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className={styles.serviceRowReverse}>
          <div className={styles.serviceCard}>
            <span className={styles.icon}>💡</span>
            <h3>PRODUCT DEVELOPMENT</h3>
            <p>Web Apps, SaaS Platforms, Dashboards, CMS</p>
            <button className={styles.knowMore}>
              Know more <span>→</span>
            </button>
          </div>

          <div className={styles.serviceImages}>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
          </div>
        </div>

        {/* SERVICE 1 */}
        <div className={styles.serviceRow}>
          <div className={styles.serviceImages}>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
          </div>

          <div className={styles.serviceCard}>
            <span className={styles.icon}>{"</>"}</span>
            <h3>WEB DEVELOPMENT</h3>
            <p>Web Apps, SaaS Platforms, Dashboards, CMS</p>
            <button className={styles.knowMore}>
              Know more <span>→</span>
            </button>
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className={styles.serviceRowReverse}>
          <div className={styles.serviceCard}>
            <span className={styles.icon}>💡</span>
            <h3>PRODUCT DEVELOPMENT</h3>
            <p>Web Apps, SaaS Platforms, Dashboards, CMS</p>
            <button className={styles.knowMore}>
              Know more <span>→</span>
            </button>
          </div>

          <div className={styles.serviceImages}>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
            <div className={styles.imgBox}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
