import React from "react";
import styles from "../_filesblog/Blog.module.css";
import PostId from "../_filesblog/Postld";
import { getPostById } from "@/src/app/services/posts";
import { revalidatePath } from "next/cache";

export default async function PostPage({ params: { id, lng } }) {
  const post = await getPostById({ id });
  // console.log("POST", post);
  revalidatePath(`/${lng}/blog/${id}`, "page");
  return (
    <section className={styles.blog}>
      <h4 className={styles.titlePost}>{post.title}</h4>
      <PostId post={post} lng={lng} />
    </section>
  );
}
