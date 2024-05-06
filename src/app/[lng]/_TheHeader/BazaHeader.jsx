import React from "react";
import styles from "./Header.module.css";
import Navigate from "./Navigate";
import BazaLogo from "./BazaLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import { useTranslation } from "../../i18n/server";

export default async function BazaHeader({ lng }) {
  const { t } = await useTranslation(lng);

  const navLink = [
    { label: `${t("home")}`, href: `/${lng}` },
    { label: `${t("trainees")}`, href: `/${lng}/trainees` },
    { label: `${t("projects")}`, href: `/${lng}/projects` },
    { label: `${t("blog")}`, href: `/${lng}/blog` },
    { label: `${t("contacts")}`, href: `/${lng}/contacts` },
  ];

  return (
    <div className={styles.topbg}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <BazaLogo />
          <Navigate links={navLink} />
          <AidButton />
          <LanguageBtn lng={lng} />
        </div>
      </header>
    </div>
  );
}
