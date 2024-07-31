// "use client";

import Link from "next/link";
import React from "react";
import styles from "./Develop.module.css";
import { updateDeveloper } from "@/src/app/services/developers";

export default function DeveloperEdit({ item, lng }) {
  const id = item._id;
  // const editDeveloper = updateDeveloper.bind(null, id);
  // console.log(item);

  return (
    <div className={styles.wrapItem}>
      <form action={updateDeveloper} className={styles.wrapForm}>
        <label htmlFor="first" className={styles.wrapInput}>
          First name
          <input
            type="text"
            name="first"
            id="first"
            defaultValue={item.first}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="last" className={styles.wrapInput}>
          Last name
          <input
            type="text"
            name="last"
            id="last"
            defaultValue={item.last}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="speciality" className={styles.wrapInput}>
          Speciality
          <input
            type="text"
            name="speciality"
            id="speciality"
            defaultValue={item.speciality}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="email" className={styles.wrapInput}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            defaultValue={item.email}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="nick" className={styles.wrapInput}>
          Discord nick
          <input
            type="text"
            name="nick"
            id="nick"
            defaultValue={item.nick}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="link" className={styles.wrapInput}>
          Linkendin link
          <input
            type="text"
            name="link"
            id="link"
            defaultValue={item.link}
            className={styles.inputText}
          />
        </label>
        <label htmlFor="projects" className={styles.wrapInput}>
          Projects
          <input
            type="text"
            name="projects"
            id="projects"
            defaultValue={item.projects}
            className={styles.inputText}
          />
        </label>

        <div className={styles.wrapBtnForm}>
          <button type="submit" className={styles.btnSave}>
            Опублікувати
          </button>
        </div>
        <div className={styles.wrapBtnForm}>
          <Link href={`/${lng}/admin/dev`} className={styles.editLink}>
            Перейти до списку розробників
          </Link>
        </div>
      </form>
    </div>
  );
}
