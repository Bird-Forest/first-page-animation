import React from "react";

import MainButton from "../../_Helper/MainButton";
import styles from "./About.module.css";

export default function FormReview() {
  return (
    <div className={styles.wrapReview}>
      <h2 className={styles.itemTitle}>
        Якщо Ви були або є нашим учасником, залиште будь ласка відгук
      </h2>
      <div className={styles.wrapForm}>
        <MainButton>Відправити</MainButton>
      </div>
    </div>
  );
}
