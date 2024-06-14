"use client";

import React from "react";
import { IoClose } from "react-icons/io5";
import styles from "./Modal.module.css";

export default function MentorModal({ closeModal }) {
  return (
    <div className={styles.wrapModal} onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <h4 className={styles.titleModal}>
        Реєстрація ментора на Baza Trainee Ukraine
      </h4>
      <form className={styles.modalForm}></form>
    </div>
  );
}
