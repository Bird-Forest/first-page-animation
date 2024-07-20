import Image from "next/image";
import React from "react";
import blog from "@/public/baza/blog.png";
import styles from "./Blog.module.css";
import Link from "next/link";

export default function PostItem({ item, lng }) {
  return (
    <li className={styles.wrapItem}>
      <div className={styles.wrapElem}>
        <div className={styles.wrapImg}>
          <Image
            alt="logo baza trainee"
            src={blog}
            width={100}
            height={100}
            quality={80}
          />
        </div>
        <div className={styles.wrapInfo}>
          <p className={styles.itemDate}>{item.date}</p>
          <h4 className={styles.itemTitle}>{item.title}</h4>
        </div>
      </div>
      <div className={styles.wrapText}>
        <p className={styles.itemText}>{item.text1}</p>
      </div>
      <div className={styles.wrapBtn}>
        <Link href={`/${lng}/blog/${item._id}`} className={styles.itemBtn}>
          читати більше ...
        </Link>
      </div>
    </li>
  );
}
