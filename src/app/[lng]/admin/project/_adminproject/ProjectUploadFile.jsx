"use client";

import { uploadAnyFile } from "@/src/app/services/upload";
import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { BsBoxArrowUp } from "react-icons/bs";

export default function ProjectUploadFile({ getFileName }) {
  const [fileImg, setFileImg] = useState(null);

  const handleChange = (evt) => {
    const newFile = evt.target.files[0];
    setFileImg(newFile);
    const fileName = newFile.name;

    getFileName(`/${fileName}`);
  };
  console.log(fileImg);
  return (
    <div className={styles.wraper}>
      <form action={uploadAnyFile} className={styles.wrapUpload}>
        <label htmlFor="upfile" className={styles.labelBtn}>
          Обрати фон для проєкту
          <input
            accept="image/*, .png, .jpg, .webp,"
            type="file"
            name="upfile"
            onChange={handleChange}
            className={styles.inputBtn}
          />
        </label>
        <button type="submit" className={styles.uploadBtn}>
          <BsBoxArrowUp className={styles.iconBtn} />
        </button>
      </form>
    </div>
  );
}
