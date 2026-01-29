"use client";

import styles from "../../styles/home.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.contactLeft}>
          <span className={styles.sectionTag}>Contact</span>

          <h2>
            Let’s Talk About What You’re <br />
            Building And How We Can <br />
            Help.
          </h2>

          <div className={styles.contactInfo}>
            <p>• Want to call us?</p>
            <span>+91 58622 47845</span>

            <p>• Prefer the old way?</p>
            <span>contact@quicbinary.com</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Mobile number" />
          <input type="text" placeholder="City" />
          <textarea placeholder="Message" rows={4}></textarea>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
}
