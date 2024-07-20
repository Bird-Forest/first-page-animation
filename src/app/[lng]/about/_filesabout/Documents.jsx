import React from "react";
import styles from "./About.module.css";
import { documents } from "./data";
import { v4 as uuidv4 } from "uuid";
import DocumentItem from "./DocumentItem";

export default function Documents({ lng }) {
  return (
    <div className={styles.docsWrap}>
      <ul className={styles.docList}>
        {documents.map((doc) => (
          <DocumentItem key={uuidv4()} doc={doc} lng={lng} />
        ))}
      </ul>
    </div>
  );
}
