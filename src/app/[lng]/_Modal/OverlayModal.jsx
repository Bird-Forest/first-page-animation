"use client";

import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";

export default function OverlayModal({ closeModal, content }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [closeModal]);
  return (
    <div onClick={closeModal} className={styles.overlay}>
      {/* <div
        className={styles.wrapModalForm}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={closeModal} className={styles.closeBtn}>
          <IoClose className={styles.close} />
        </button>
        <h4 className={styles.titleModal}>{title}</h4> */}
      {content}
      {/* </div> */}
    </div>
  );
}
