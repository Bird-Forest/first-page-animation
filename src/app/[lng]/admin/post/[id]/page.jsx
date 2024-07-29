import { getPostById, updatePost } from "@/src/app/services/posts";
import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import PostForm from "../_filesadminpost/PostForm";

export default async function PostByIdPage({ params: { id, lng } }) {
  const post = await getPostById({ id });
  return (
    <div className={styles.wrapContent}>
      <PostForm post={post} formAction={updatePost} lng={lng} />
    </div>
  );
}
