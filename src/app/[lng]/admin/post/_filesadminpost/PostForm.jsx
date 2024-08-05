"use client";

import React, { useState } from "react";
import styles from "./Post.module.css";
import { formatISO } from "date-fns";
import PostPreview from "./PostPreview";
import BtnSave from "../../_filesadmin/BtnSave";
import BtnAction from "../../_filesadmin/BtnAction";

export default function PostForm({ post, lng, formAction }) {
  const [item, setItem] = useState({});

  const id = !post ? null : post._id;
  const date = !post ? formatISO(new Date()) : post.date;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newItem = {
      date: date,
      title: formData.get("title"),
      text1: formData.get("text1"),
      text2: formData.get("text2"),
      url: formData.get("url"),
    };
    setItem(newItem);
  };
  return (
    <div className={styles.wrapAdmPost}>
      <form onSubmit={handleSubmit} className={styles.wrapForm}>
        <label htmlFor="title" className={styles.wrapInput}>
          Додати заголовок
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
          Додати зображення як https:// URL
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
        <BtnSave>Зберегти</BtnSave>
        {/* <div className={styles.wrapBtnForm}>
          <button type="submit" className={styles.btnForm}>
            Зберегти
          </button>
        </div> */}
      </form>
      <div className={styles.wrapPreview}>
        {!item ? (
          <p className={styles.messPreview}>Попередній перегляд</p>
        ) : (
          <PostPreview item={item} />
        )}
      </div>
      <BtnAction item={item} lng={lng} id={id} formAction={formAction}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
