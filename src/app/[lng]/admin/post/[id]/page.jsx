import { getPostById } from "@/src/app/services/posts";
import React from "react";
import PostEdit from "../_filesadminpost/PostEdit";
import styles from "../../_filesadmin/Admin.module.css";

export default async function PostByIdPage({ params: { id, lng } }) {
  const post = await getPostById({ id });
  return (
    <div className={styles.wrapContent}>
      <PostEdit post={post} lng={lng} />
    </div>
  );
}
