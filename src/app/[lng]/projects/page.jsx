import React from "react";
import { languages } from "../../i18n/settings";
import styles from "../page.module.css";
import Error from "../home/error";
// import { getDictionary } from "../dictionaries";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function ProjectsPage({ params: { lng } }) {
  return (
    <div className={styles.center}>
      <Error />
    </div>
  );
}
