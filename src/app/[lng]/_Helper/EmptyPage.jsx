import React from "react";
import styles from "./Helper.module.css";

export default function EmptyPage() {
  return (
    <div className={styles.wrapEmpty}>
      <h2 className={styles.emptyTitle}>На жаль, нічого не знайдено</h2>
    </div>
  );
}
