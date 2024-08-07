"use client";

import React, { useEffect } from "react";
import styles from "./Helper.module.css";

export default function Overlay({ closeModal, content }) {
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
      <div onClick={(e) => e.stopPropagation()}>{content}</div>
    </div>
  );
}
