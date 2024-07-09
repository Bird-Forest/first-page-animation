import Link from "next/link";
import React from "react";
import styles from "./About.module.css";

export default function DocumentItem({ doc }) {
  return (
    <li className={styles.wrapDoc}>
      <Link href={`/about/${doc.slug}`} className={styles.link}>
        {doc.title}
      </Link>
    </li>
  );
}
