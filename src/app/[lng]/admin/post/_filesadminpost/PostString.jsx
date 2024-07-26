"use client";

import React from "react";
import styles from "./Post.module.css";
import { format } from "date-fns";
import { BsGear } from "react-icons/bs";
import Link from "next/link";

export default function PostString({ item, lng }) {
  const date = format(new Date(item.date), "yyyy-MM-dd");

  return (
    <li className={styles.wrapStrPost}>
      <div className={styles.itemDate}>{date}</div>
      <div className={styles.wrapTitle}>
        <p className={styles.itemTitle}>{item.title}</p>
      </div>
      <Link href={`/${lng}/admin/post/${item._id}`} className={styles.itemBtn}>
        <BsGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
