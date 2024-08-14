"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { uploadImage } from "@/src/app/services/projects";

export default function ProjectImg({ getFileName, lng }) {
  const [fileImg, setFileImg] = useState(null);

  const handleChange = (evt) => {
    // evt.preventDefault();
    // console.log(evt.target.files[0]);
    const newFile = evt.target.files[0];
    setFileImg(newFile);
    // console.log(newFile);
    const fileName = newFile.name;
    console.log(fileName);
    getFileName(fileName);
  };
  console.log(fileImg);

  // const handleUpload = async () => {
  //   // if (!fileImg) {
  //   //   alert("select a file");
  //   //   return;
  //   // }
  //   const formData = new FormData();
  //   // const file = fileImg;
  //   // formData.append("file", file);

  //   await uploadImage(formData);
  //   // console.log(message);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fileImg) {
      alert("Please select a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", fileImg);

      const response = await fetch(
        "http://localhost:3000/public/images/projects/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("File uploaded successfully:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className={styles.wraper}>
      <form onSubmit={handleSubmit} className={styles.wrapUpload}>
        <label htmlFor="image" className={styles.labelBtn}>
          Обрати фон для проєкту
          <input
            accept="image/*, .png, .jpg, .webp,"
            type="file"
            name="image"
            // id="image"
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
