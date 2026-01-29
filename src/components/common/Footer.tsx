import styles from "../../styles/home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* TOP LINKS */}
      <div className={styles.footerTop}>
        <div>
          <h4>Studio</h4>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4>Socials</h4>
          <ul>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <h4>Trust And Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4>Contact info</h4>
          <ul>
            <li>hi@quicbinary.com</li>
            <li>+91 5263647852</li>
            <li>
              4th Floor, Vidyapati Building <br />
              Janjeerwala Square, Indore
            </li>
          </ul>
        </div>
      </div>

      {/* BRAND */}
      <div className={styles.footerBrand}>
        <span>Quicbinary</span>
        <span className={styles.dot}>.</span>
      </div>
    </footer>
  );
}
