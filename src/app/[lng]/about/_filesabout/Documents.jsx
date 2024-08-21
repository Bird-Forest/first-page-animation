import React from "react";
import styles from "./About.module.css";
import DocumentLink from "./DocumentLink";

export default function Documents({ lng }) {
  return (
    <div className={styles.docsWrap}>
      <DocumentLink lng={lng} />
    </div>
  );
}
