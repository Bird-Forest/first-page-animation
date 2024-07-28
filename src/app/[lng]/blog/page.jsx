import React from "react";
import styles from "./_filesblog/Blog.module.css";
import Posts from "./_filesblog/Posts";
import { getPosts } from "../../services/posts";
import { revalidatePath } from "next/cache";

export default async function BlogPage({ params: { lng } }) {
  const data = await getPosts();
  revalidatePath(`/${lng}/blog`, "page");
  return (
    <section className={styles.blog}>
      <Posts posts={data} lng={lng} />
    </section>
  );
}
