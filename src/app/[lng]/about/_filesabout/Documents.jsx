import React from "react";
import styles from "./About.module.css";
import DocumentLink from "./DocumentLink";
// import { documents } from "./data";
// import { v4 as uuidv4 } from "uuid";
// import DocumentItem from "./DocumentItem";

export default function Documents({ lng }) {
  return (
    <div className={styles.docsWrap}>
      <DocumentLink lng={lng} />
      {/* <ul className={styles.docList}>
        {documents.map((doc) => (
          <DocumentItem key={uuidv4()} doc={doc} lng={lng} />
        ))}
      </ul> */}
    </div>
  );
}
