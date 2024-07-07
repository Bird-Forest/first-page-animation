import React from "react";
// import { getDictionary } from "../dictionaries";
import { languages } from "../../i18n/settings";
import styles from "./_filesblog/Blog.module.css";
import Posts from "./_filesblog/Posts";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function BlogPage({ params: { lng } }) {
  // const dict = await getDictionary(lang);
  // return <div>{dict.page.wellcome}</div>;
  return (
    <section className={styles.blog}>
      <h1 className={styles.blogTitle}>Blog</h1>
      <Posts />
    </section>
  );
}
