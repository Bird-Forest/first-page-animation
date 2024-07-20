"use client";

import React, { useEffect } from "react";
import styles from "../../page.module.css";

import { FaQuestion, FaRegFaceAngry } from "react-icons/fa6";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapError}>
      <h2 className={styles.errorTitle}>Something went wrong!</h2>
      <div className={styles.wrapQuest}>
        <FaQuestion className={styles.errorQuest} />
        <FaQuestion className={styles.errorQuest} />
        <FaQuestion className={styles.errorQuest} />
      </div>
      <div className={styles.wrapIcon}>
        <FaRegFaceAngry className={styles.errorIcon} />
      </div>
      <div className={styles.wrapBtn}>
        <button
          className={styles.mainBtn}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
