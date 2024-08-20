import Link from "next/link";
import React from "react";
import styles from "./About.module.css";

export default function DocumentLink({ lng }) {
  return (
    <div className={styles.docList}>
      <div className={styles.wrapDoc}>
        <Link href={`/${lng}/about/policy`} className={styles.link}>
          Політика конфіденційності
        </Link>
      </div>
      <div className={styles.wrapDoc}>
        <Link href={`/${lng}/about/term`} className={styles.link}>
          Політика користування сайтом
        </Link>
      </div>
    </div>
  );
}
//
