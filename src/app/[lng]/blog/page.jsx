import React from "react";
// import { getDictionary } from "../dictionaries";
import { languages } from "../../i18n/settings";
import styles from "../page.module.css";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function BlogPage({ params: { lng } }) {
  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <div className={styles.center}>
      <h1>wellcom</h1>
    </div>
  );
}
