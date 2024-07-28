import React from "react";
import styles from "./Footer.module.css";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import FooterLogo from "./FooterLogo";

export default function Contacts() {
  return (
    <div className={styles.wrapContact}>
      <FooterLogo />
      <div className={styles.contacts}>
        <div className={styles.wrapItem}>
          <BsTelephone className={styles.icon} />
          <a className={styles.text} href="tel:+380636286630">
            +380 63 628 6630
          </a>
        </div>
        <div className={styles.wrapItem}>
          <BsTelephone className={styles.icon} />
          <a className={styles.text} href="tel:+380675681788">
            +380 67 568 1788
          </a>
        </div>
      </div>
      <div className={styles.wrapEmail}>
        <BsEnvelope className={styles.icon} />
        <a className={styles.text} href="mailto:info@baza-trainee.tech">
          info@baza-trainee.tech
        </a>
      </div>
      <div className={styles.wrapNetwork}>
        <a
          href="https://www.linkedin.com/company/baza-trainee-ukraine/"
          className={styles.wrapSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={styles.socIcon} />
        </a>
        <a
          href="https://www.facebook.com/BazaIT/"
          className={styles.wrapSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className={styles.socIcon} />
        </a>
        <a
          href="https://t.me/+CBXkAJlsCy83ZDYy"
          className={styles.wrapSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className={styles.socIcon} />
        </a>
      </div>
    </div>
  );
}

// const lind = "https://www.linkedin.com/company/baza-trainee-ukraine/";
// const fase = "https://www.facebook.com/BazaIT/";
// const telg = "https://t.me/+CBXkAJlsCy83ZDYy";
