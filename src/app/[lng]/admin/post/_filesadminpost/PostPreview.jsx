import Image from "next/image";
import React from "react";
import styles from "./Post.module.css";
import { format, formatISO } from "date-fns";

export default function PostPreview({ item }) {
  // { item.date === ' ' ? formatISO(new Date()) : format(item.date, "yyyy-MM-dd") };
  console.log(item.date);
  return (
    <div className={styles.wrapNewPost}>
      <div className={styles.wrapTitleNP}>
        <p className={styles.dateNewPost}>
          {!item.date ? formatISO(new Date()) : format(item.date, "yyyy-MM-dd")}
        </p>
        <h4 className={styles.titleNewPost}>{item.title}</h4>
      </div>
      <p className={styles.textNewPost}>{item.text1}</p>
      <div className={styles.imgNewPost}>
        <Image alt="any picture" src={item.url} fill quality={80} />
      </div>
      <p className={styles.textNewPost}>{item.text2}</p>
    </div>
  );
}
