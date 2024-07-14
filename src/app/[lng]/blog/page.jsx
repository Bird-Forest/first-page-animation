import React from "react";
import { languages } from "../../i18n/settings";
import styles from "./_filesblog/Blog.module.css";
import Posts from "./_filesblog/Posts";
import { getPosts } from "../../services/posts";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function BlogPage({ params: { lng } }) {
  const data = await getPosts();
  // console.log("BLOG", data);
  return (
    <section className={styles.blog}>
      <Posts posts={data} />
    </section>
  );
}
