"use client";

import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

export default function ReviewItem({ item }) {
  return (
    <div className={styles.wrapItem}>
      <div className={styles.wrapProfile}>
        <div className={styles.wrapInfo}>
          <p className={styles.textName}>{item.name}</p>
          <p className={styles.text}>{item.special}</p>
          <p className={styles.text}>{item.date}</p>
        </div>
        <div className={styles.wrapFoto}>
          <div className={styles.wrapImg}>
            <Image
              alt="section participants"
              src={item.foto}
              width={174}
              height={174}
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
      <p className={styles.review}>{item.review}</p>
    </div>
  );
}
