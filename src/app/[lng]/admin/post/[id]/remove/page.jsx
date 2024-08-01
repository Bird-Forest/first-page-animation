import React from "react";
import styles from "../../../_filesadmin/Admin.module.css";
import { deletePost, getPostById } from "@/src/app/services/posts";
import PostPreview from "../../_filesadminpost/PostPreview";
import BtnAction from "../../../_filesadmin/BtnAction";

export default async function RemovePostPage({ params: { lng, id } }) {
  const post = await getPostById({ id });

  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        <PostPreview item={post} />
        <BtnAction item={post} id={id} formAction={deletePost} lng={lng}>
          Видалити
        </BtnAction>
      </div>
    </div>
  );
}
