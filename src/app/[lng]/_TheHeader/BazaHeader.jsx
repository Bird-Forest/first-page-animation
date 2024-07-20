import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import Menu from "./Menu";
import { auth } from "@/src/config/auth";
import Link from "next/link";
import NavAdmin from "./NavAdmin";
import { ExitAdmin } from "./ExitAdmin";

export default async function BazaHeader({ lng }) {
  // const session = await auth();
  // console.log(session);
  // const links = [
  //   { label: "Головна", href: `/${lng}/home` },
  //   { label: "Стажування", href: `/${lng}/trainees` },
  //   { label: "Проєкти", href: `/${lng}/projects` },
  //   { label: "Блог", href: `/${lng}/blog` },
  //   { label: "Про нас", href: `/${lng}/about` },
  // ];

  return (
    <header id="top" className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <HeaderLogo />
          <Menu lng={lng} />
          {/* <ExitAdmin /> */}
          {/* <NavAdmin /> */}
          {/* {session ? <NavAdmin /> : <AidButton />} */}
          <AidButton lng={lng} />
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
