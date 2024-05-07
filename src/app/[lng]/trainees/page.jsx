import React from "react";
import { useTranslation } from "../../i18n/server";
import { languages } from "../../i18n/settings";
import styles from "../page.module.css";

// import { getDictionary } from "../dictionaries";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function TraineesPage({ params: { lng } }) {
  const { t } = await useTranslation(lng, "trainees");
  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <div className={styles.center}>
      <h1>{t("wellcom")}</h1>
    </div>
  );
}
