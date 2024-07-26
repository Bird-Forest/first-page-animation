"use client";

import React from "react";
import styles from "../_filesadminpost/Post.module.css";
import PostPreview from "./PostPreview";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { deletePost } from "@/src/app/services/posts";
import Spinner from "../../../_Helper/Spinner";
import Link from "next/link";

const initialState = {
  message: "",
};

export default function PostRemove({ lng, item }) {
  const [state, formAction] = useFormState(deletePost, initialState);
  const id = item._id;
  const { pending } = useFormStatus();

  return (
    <div className={styles.wrapRemov}>
      <PostPreview item={item} />
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="post" value={item} />
        <div className={styles.wrapBtnForm}>
          <button type="submit" className={styles.btnSave}>
            {pending ? <Spinner /> : " Видалити"}
          </button>
        </div>
        <div className={styles.wrapMess}>
          <p aria-live="polite" className={styles.textMess} role="status">
            {state?.message}
          </p>
        </div>
      </form>
      <div className={styles.wrapBtnForm}>
        <Link href={`/${lng}/admin/post`} className={styles.editLink}>
          Перейти до списку постів
        </Link>
      </div>
    </div>
  );
}
