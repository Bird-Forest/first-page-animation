import Image from "next/image";
import React from "react";
import styles from "./Post.module.css";
// import { format, formatISO } from "date-fns";

export default function PostPreview({ item }) {
  const dateNow = new Date();
  const date = !item.date ? dateNow.toISOString() : item.date.slice(0, 10);

  console.log(item);
  return (
    <div className={styles.wrapPostNP}>
      <div className={styles.wrapTitleNP}>
        <p className={styles.dateNP}>{date}</p>
        <h4 className={styles.titleNP}>{item.title}</h4>
      </div>
      <p className={styles.textNP}>{item.text1}</p>
      <div className={styles.imgNP}>
        <Image alt="any picture" src={item.url} fill quality={80} />
      </div>
      <p className={styles.textNP}>{item.text2}</p>
    </div>
  );
}
