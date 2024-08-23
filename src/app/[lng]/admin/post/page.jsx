import React from "react";
import { getPosts } from "@/src/app/services/posts";
import PostList from "./_filesadminpost/PostList";
import styles from "../_filesadmin/Admin.module.css";
import { revalidatePath } from "next/cache";

export default async function ListPostsPage({ params: { lng } }) {
  const data = await getPosts();
  revalidatePath(`/${lng}/admin/post`, "page");
  return (
    <section className={styles.wrapContent}>
      <PostList posts={data} lng={lng} />
    </section>
  );
}
