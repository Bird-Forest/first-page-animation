import React from "react";
import styles from "./Admin.module.css";

export default function BtnSave({ children }) {
  return (
    <div className={styles.wrapBtnForm}>
      <button type="submit" className={styles.btnForm}>
        {children}
      </button>
    </div>
  );
}
