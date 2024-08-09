"use client";

import React, { useState } from "react";
import BtnSave from "../../_filesadmin/BtnSave";
import BtnAction from "../../_filesadmin/BtnAction";
import styles from "./Review.module.css";
import { BsEmojiAngry, BsEmojiSmile } from "react-icons/bs";
import ReviewOverlay from "./ReviewOverlay";

export default function ReviewForm({ review, lng, formAction }) {
  const [item, setItem] = useState(review);
  const [status, setStatus] = useState(review.status);
  const id = review._id;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const newItem = {
      createdAt: review.createdAt,
      name: formData.get("name"),
      foto: formData.get("foto"),
      link: formData.get("link"),
      message: formData.get("message"),
      status: status,
    };
    setItem(newItem);
  };

  return (
    <div className={styles.wrapAdmRev}>
      <form onSubmit={handleSubmit} className={styles.wrapForm}>
        <label htmlFor="name" className={styles.wrapInput}>
          Iм’я
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={item.name}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="foto" className={styles.wrapInput}>
          Посилання на фото в LinkedIn
          <input
            type="url"
            name="foto"
            id="foto"
            defaultValue={item.foto}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="link" className={styles.wrapInput}>
          Посилання на сторінку в LinkedIn
          <input
            type="url"
            name="link"
            id="link"
            defaultValue={item.link}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="message" className={styles.wrapInput}>
          Повідомлення
          <textarea
            name="message"
            id="message"
            defaultValue={item.message}
            className={styles.inputText}
          ></textarea>
        </label>
        <div className={styles.wrapStatus}>
          <label htmlFor="status" className={styles.wrapInput}>
            Статус
            <input
              type="text"
              name="status"
              id="status"
              value={status}
              className={styles.inputText}
            />
          </label>
          <button
            type="button"
            onClick={() => setStatus(!status)}
            className={styles.btnStatus}
          >
            {!status ? (
              <BsEmojiAngry className={styles.iconAngry} />
            ) : (
              <BsEmojiSmile className={styles.iconSmile} />
            )}
          </button>
        </div>
        <BtnSave>Зберегти</BtnSave>
      </form>
      {!item ? null : <ReviewOverlay item={item} />}
      <BtnAction item={item} lng={lng} id={id} formAction={formAction}>
        Опублікувати
      </BtnAction>
    </div>
  );
}
