import React from "react";
import styles from "./Footer.module.css";
import FooterLogo from "./FooterLogo";
import Contacts from "./Contacts";

export default function BazaFooter({ lng }) {
  return (
    <footer className={styles.bottom}>
      <div className={styles.wrapper}>
        {/* <FooterLogo /> */}
        <Contacts />

        <p className={styles.rull}>
          Розробка Baza Trainee Ukraine 2024 © Усі права захищені
        </p>
      </div>
    </footer>
  );
}
