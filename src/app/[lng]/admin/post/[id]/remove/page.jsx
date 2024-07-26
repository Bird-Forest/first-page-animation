import React from "react";
import styles from "../../../_filesadmin/Admin.module.css";
import { getPostById } from "@/src/app/services/posts";
import PostRemove from "../../_filesadminpost/PostRemove";

export default async function RemovePostPage({ params: { lng, id } }) {
  const post = await getPostById({ id });

  return (
    <div className={styles.wrapContent}>
      <PostRemove lng={lng} item={post} />
    </div>
  );
}
