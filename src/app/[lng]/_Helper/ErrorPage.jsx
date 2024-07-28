"use client";

import React, { useEffect } from "react";
import styles from "./Helper.module.css";

import { FaQuestion, FaRegFaceAngry } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import MainButton from "./MainButton";

export default function ErrorPage({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapError}>
      <div className={styles.errorTitle}>
        <h2>Ми працюємо над усуненням проблем!</h2>
      </div>
      <div className={styles.errorWrapIcon}>
        <FaCogs className={styles.errorIcon} />
      </div>
      <div className={styles.wrapBtn}>
        <MainButton
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </MainButton>
      </div>
    </div>
  );
}
