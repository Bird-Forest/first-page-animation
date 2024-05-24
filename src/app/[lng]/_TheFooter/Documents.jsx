import React from "react";
import styles from "./Footer.module.css";

export default function Documents() {
  return (
    <div className={styles.wrapDoc}>
      <a>Політика конфіденційності</a>
      <a>Політика користування сайтом</a>
      <p>Статут</p>
      <p>Звітність</p>
    </div>
  );
}
