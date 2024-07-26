"use client";

import React, { useState } from "react";
import styles from "./Post.module.css";
import PostPreview from "./PostPreview";
import { formatISO } from "date-fns";
import { redirect } from "next/navigation";
import { createNewPost } from "@/src/app/services/posts";

export default function PostCreate({ lng }) {
  const [item, setItem] = useState({});

  const dateISO = formatISO(new Date());

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newItem = {
      date: dateISO,
      title: formData.get("title"),
      text1: formData.get("text1"),
      text2: formData.get("text2"),
      url: formData.get("url"),
    };
    setItem(newItem);
  };
  return (
    <div className={styles.wrapCreatePost}>
      <form onSubmit={handleSubmit} className={styles.wrapForm}>
        <label htmlFor="title" className={styles.wrapInput}>
          Додати заголовок
          <input
            type="text"
            name="title"
            id="title"
            className={styles.inputText}
          />
        </label>
        <label htmlFor="text1" className={styles.wrapInput}>
          Перша частина тексту
          <textarea
            name="text1"
            id="text1"
            className={styles.inputText}
          ></textarea>
        </label>
        <label htmlFor="url" className={styles.wrapInput}>
          Додати зображення як https:// URL
          <input type="url" name="url" id="url" className={styles.inputText} />
        </label>
        <label htmlFor="text2" className={styles.wrapInput}>
          Друга частина тексту
          <textarea
            name="text2"
            id="text2"
            className={styles.inputText}
          ></textarea>
        </label>
        <div className={styles.wrapBtnForm}>
          <button type="submit" className={styles.btnSave}>
            Зберегти
          </button>
        </div>
      </form>
      <div>
        <PostPreview item={item} />
      </div>
      <div className={styles.wrapBtnForm}>
        <form
          action={async () => {
            await createNewPost(item);
            redirect(`/${lng}/blog`);
          }}
        >
          <button type="submit" className={styles.btnSave}>
            Опублікувати
          </button>
        </form>
      </div>
    </div>
  );
}
