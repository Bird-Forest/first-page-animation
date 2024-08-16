import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import Menu from "./Menu";
import { auth } from "@/src/config/auth";
import NavAdmin from "./NavAdmin";

export default async function BazaHeader({ lng }) {
  const session = await auth();
  console.log("SESSION", session);

  return (
    <header id="top" className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <HeaderLogo />
          <Menu lng={lng} />
          {session === null ? <AidButton lng={lng} /> : <NavAdmin lng={lng} />}
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
