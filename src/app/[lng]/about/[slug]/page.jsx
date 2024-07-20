import Link from "next/link";
import React from "react";
import styles from "../_filesabout/About.module.css";
import DocumentPDF from "../_filesabout/DocumentPDF";
import { documents } from "../_filesabout/data";

// export function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

export default async function DocumentPage({ params: { slug, lng } }) {
  const docs = documents.filter((doc) => doc.slug === slug);
  const doc = docs[0];

  return (
    <div className={styles.about}>
      <h3 className={styles.itemTitle}>{doc.title}</h3>
      <DocumentPDF doc={doc} />
      <Link href={`/${lng}/about`} className={styles.link}>
        Go back
      </Link>
    </div>
  );
}
