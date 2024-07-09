import Link from "next/link";
import React from "react";
import styles from "../_filesabout/About.module.css";

const doc = {
  id: "1",
  name: "policy",
  slug: "policy",
  title: "Політика конфіденційності",
  path: "/public/documents/policy.pdf",
};

export default async function DocumentPage({ params: { slug } }) {
  return (
    <div className={styles.about}>
      <h3 className={styles.itemTitle}>{doc.title}</h3>
      <Link href="/about" className={styles.link}>
        Go back
      </Link>
    </div>
  );
}
