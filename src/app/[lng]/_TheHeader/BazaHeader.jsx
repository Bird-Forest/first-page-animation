import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import { useTranslation } from "../../i18n/server";
import Menu from "./Menu";

export default async function BazaHeader({ lng }) {
  const { t } = await useTranslation(lng);
  const links = [
    { label: "Головна", href: `/${lng}/home` },
    { label: "Стажування", href: `/${lng}/trainees` },
    { label: "Проекти", href: `/${lng}/projects` },
    { label: "Блог", href: `/${lng}/blog` },
    { label: "Контакти", href: `/${lng}/contacts` },
  ];

  return (
    <header id="top" className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <HeaderLogo />
          <Menu links={links} lng={lng} />
          <AidButton />
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
