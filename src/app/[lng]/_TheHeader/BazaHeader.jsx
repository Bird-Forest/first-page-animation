import React from "react";
import styles from "./Header.module.css";
import Navigate from "./Navigate";
import BazaLogo from "./BazaLogo";
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

  // const navLink = [
  //   { label: `${t("home")}`, href: `/${lng}` },
  //   { label: `${t("trainees")}`, href: `/${lng}/trainees` },
  //   { label: `${t("projects")}`, href: `/${lng}/projects` },
  //   { label: `${t("blog")}`, href: `/${lng}/blog` },
  //   { label: `${t("contacts")}`, href: `/${lng}/contacts` },
  // ];

  return (
    <header className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <BazaLogo />
          <Menu links={links} lng={lng} />
          <AidButton />
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
