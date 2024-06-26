import React from "react";
import styles from "./Helper.module.css";

export default function MainButton({ children, ...props }) {
  return (
    <div className={styles.wrapBtn}>
      <button className={styles.mainBtn}>{children}</button>
    </div>
  );
}
