"use client";

import React, { useEffect } from "react";
import styles from "./Helper.module.css";

export default function NotifCopy({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <div className={styles.wrapNotif}>
      <p className={styles.textNotif}>{message}</p>
    </div>
  );
}
