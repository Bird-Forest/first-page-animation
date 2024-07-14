import React from "react";
import styles from "../_filesblog/Blog.module.css";
import PostId from "../_filesblog/Postld";
import { getPostById } from "@/src/app/services/posts";

export default async function PostPage({ params }) {
  // console.log("ID", params);
  const { id } = params;
  // console.log("PARAM ID", id);
  const post = await getPostById({ id });
  // console.log("POST", post);
  return (
    <section className={styles.blog}>
      <h4 className={styles.titlePost}>{post.title}</h4>
      <PostId post={post} />
    </section>
  );
}
