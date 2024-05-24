import React from "react";
import styles from "./Footer.module.css";
import FooterLogo from "./FooterLogo";
import NavFooter from "./NavFooter";
import Documents from "./Documents";
import Contacts from "./Contacts";

export default function BazaFooter({ lng }) {
  return (
    <footer className={styles.bottom}>
      <div className={styles.wrapper}>
        <FooterLogo />
        <NavFooter lng={lng} />
        <Documents />
        <Contacts />
      </div>
      <p className={styles.text}>
        Розробка Baza Trainee Ukraine 2024 © Усі права захищені
      </p>
    </footer>
  );
}
