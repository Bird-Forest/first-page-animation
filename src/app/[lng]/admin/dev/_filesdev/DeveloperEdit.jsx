"use client";

import Link from "next/link";
import React from "react";
import styles from "./Develop.module.css";
import { updateDeveloper } from "@/src/app/services/developers";
import ModalTrainee from "../../../_Modal/ModalTrainee";

export default function DeveloperEdit({ item, lng }) {
  console.log(item);
  //  const [state, formAction] = useFormState(updateDeveloper, initialState);
  const id = item._id;
  // const editDeveloper = updateDeveloper.bind(null, id);
  console.log(id);

  // console.log(item);

  return (
    <div>
      <ModalTrainee formAction={updateDeveloper} item={item} lng={lng} />
    </div>

    // <div className={styles.wrapCardDev}>
    //   <form action={updateDeveloper} className={styles.cardDev}>
    //     <label htmlFor="first" className={styles.wrapInput}>
    //       First name
    //       <input
    //         type="text"
    //         name="first"
    //         id="first"
    //         defaultValue={!item ? null : item.first}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <label htmlFor="last" className={styles.wrapInput}>
    //       Last name
    //       <input
    //         type="text"
    //         name="last"
    //         id="last"
    //         defaultValue={!item ? null : item.last}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <label htmlFor="speciality" className={styles.wrapInput}>
    //       Speciality
    //       <input
    //         type="text"
    //         name="speciality"
    //         id="speciality"
    //         defaultValue={!item ? null : item.speciality}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <label htmlFor="email" className={styles.wrapInput}>
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         defaultValue={!item ? null : item.email}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <label htmlFor="nick" className={styles.wrapInput}>
    //       Discord nick
    //       <input
    //         type="text"
    //         name="nick"
    //         id="nick"
    //         defaultValue={!item ? null : item.nick}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <label htmlFor="link" className={styles.wrapInput}>
    //       Linkendin link
    //       <input
    //         type="text"
    //         name="link"
    //         id="link"
    //         defaultValue={!item ? null : item.link}
    //         className={styles.inputText}
    //       />
    //     </label>
    //     <div className={styles.wrapBtnForm}>
    //       <button type="submit" className={styles.btnSave}>
    //         Опублікувати
    //       </button>
    //     </div>
    //     <div className={styles.wrapBtnForm}>
    //       <Link href={`/${lng}/admin/dev`} className={styles.editLink}>
    //         Перейти до списку розробників
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}
