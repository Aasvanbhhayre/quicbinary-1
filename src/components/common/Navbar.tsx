"use client";

import Link from "next/link";
import styles from "../../styles/common.module.css";


export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Quicbinary
        </Link>

        {/* NAV LINKS */}
        <nav className={styles.navLinks}>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/say-hello" className={styles.cta}>
            Say Hello
          </Link>
        </nav>
      </div>
    </header>
  );
}
