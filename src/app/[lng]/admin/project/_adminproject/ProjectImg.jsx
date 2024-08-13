"use client";

import React, { useState } from "react";
import styles from "./ProjectAdm.module.css";
import { uploadImage } from "@/src/app/services/projects";

export default function ProjectImg() {
  return (
    <form action={uploadImage} className={styles.wrapUpload}>
      <label htmlFor="image">Audio file:</label>
      <input
        accept="image/*, .png, .jpg, .webp,"
        type="file"
        name="image"
        className={styles.wrapInput}
        // multiple
      />
      <button type="submit" className={styles.filterBtn}>
        Upload
      </button>
    </form>
  );
}

//   async function handleUpload(formData: FormData) {
//     "use server";
//     const audioFile = formData.get("audio") as File;

//     const buffer = await audioFile.arrayBuffer();
//     const audioBuffer = Buffer.from(buffer);

//     await fs.writeFile(audioFile.name, audioBuffer);
//   }
