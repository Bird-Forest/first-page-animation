"use client";

import React from "react";
import styles from "../_filesadminpost/Post.module.css";
import { updatePost } from "@/src/app/services/posts";
import Link from "next/link";

export default function PostEdit({ post, lng }) {
  const id = post._id;
  const editPost = updatePost.bind(null, id);

  return (
    <div className={styles.wrapCreatePost}>
      <form action={editPost} className={styles.wrapForm}>
        <label htmlFor="title" className={styles.wrapInput}>
          Заголовок
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={!post ? null : post.title}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="text1" className={styles.wrapInput}>
          Перша частина тексту
          <textarea
            name="text1"
            id="text1"
            defaultValue={!post ? null : post.text1}
            className={styles.inputText}
          ></textarea>
        </label>
        <label htmlFor="url" className={styles.wrapInput}>
          Зображення як https:// URL
          <input
            type="url"
            name="url"
            id="url"
            defaultValue={!post ? null : post.url}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="text2" className={styles.wrapInput}>
          Друга частина тексту
          <textarea
            name="text2"
            id="text2"
            defaultValue={!post ? null : post.text2}
            className={styles.inputText}
          ></textarea>
        </label>
        <div className={styles.wrapBtnForm}>
          <button type="submit" className={styles.btnSave}>
            Опублікувати
          </button>
        </div>
        <div className={styles.wrapBtnForm}>
          <Link href={`/${lng}/blog/${id}`} className={styles.editLink}>
            Перейти на сторінку поста
          </Link>
        </div>
        <div className={styles.wrapBtnForm}>
          <Link href={`/${lng}/admin/post`} className={styles.editLink}>
            Перейти до списку постів
          </Link>
        </div>
      </form>
    </div>
  );
}
