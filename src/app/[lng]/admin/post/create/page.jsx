import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import PostForm from "../_filesadminpost/PostForm";
import { createNewPost } from "@/src/app/services/posts";

export default function CreatePostPage({ params: { lng } }) {
  return (
    <div className={styles.wrapContent}>
      <PostForm lng={lng} formAction={createNewPost} />
    </div>
  );
}
