"use client";

import React, { useEffect } from "react";
import styles from "./Helper.module.css";

export default function NotifMess({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

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
