import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import PostCreate from "../_filesadminpost/PostCreate";

export default async function CreatePostPage({ params: { lng } }) {
  return (
    <div className={styles.wrapContent}>
      <PostCreate lng={lng} />
    </div>
  );
}
