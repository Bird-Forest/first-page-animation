import Link from "next/link";
import React from "react";
import styles from "./About.module.css";

export default function DocumentItem({ doc, lng }) {
  return (
    <li className={styles.wrapDoc}>
      <Link href={`/${lng}/about/${doc.slug}`} className={styles.link}>
        {doc.title}
      </Link>
    </li>
  );
}
//
