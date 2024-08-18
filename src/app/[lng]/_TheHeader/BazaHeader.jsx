import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import Menu from "./Menu";

export default async function BazaHeader({ lng }) {
  return (
    <header id="top" className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <HeaderLogo />
          <Menu lng={lng} />
          <AidButton lng={lng} />
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
