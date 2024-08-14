"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { uploadImage } from "@/src/app/services/projects";

export default function ProjectImg({ getFileName }) {
  const [fileImg, setFileImg] = useState(null);
  const handleChange = (evt) => {
    // evt.preventDefault();
    // console.log(evt.target.files[0]);
    const newFile = evt.target.files[0];
    setFileImg(newFile);
    console.log(newFile);
  };
  console.log(fileImg);
  const handleUpload = async () => {
    if (!fileImg) {
      alert("select a file");
      return;
    }
    const formData = new FormData();
    const file = fileImg;
    formData.append("file", file);
    const fileName = fileImg.name;
    console.log(fileName);
    const message = await uploadImage(formData);
    console.log(message);
  };

  return (
    <div className={styles.wraper}>
      <form onSubmit={handleUpload} className={styles.wrapUpload}>
        <label htmlFor="image" className={styles.labelBtn}>
          Обрати фон для проєкту
          <input
            accept="image/*, .png, .jpg, .webp,"
            type="file"
            name="image"
            id="image"
            // onChange={getFileName}
            onChange={handleChange}
            className={styles.inputBtn}
            // multiple
          />
        </label>
        <button type="submit" className={styles.uploadBtn}>
          Upload
        </button>
      </form>
    </div>
  );
}
