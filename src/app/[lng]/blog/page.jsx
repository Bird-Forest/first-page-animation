import React from "react";
import styles from "./_filesblog/Blog.module.css";
import Posts from "./_filesblog/Posts";
import { getPosts } from "../../services/posts";

export const metadata = {
  title: "Baza Blog",
  description:
    "We share information about our achievements and monitor changes in the IT field.",
};

export default async function BlogPage({ params: { lng } }) {
  const data = await getPosts();

  return (
    <section className={styles.blog}>
      <Posts posts={data} lng={lng} />
    </section>
  );
}
