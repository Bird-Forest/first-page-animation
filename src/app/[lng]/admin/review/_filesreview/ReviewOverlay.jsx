import React from "react";
import styles from "./Review.module.css";
import Image from "next/image";
import { format } from "date-fns";

export default function ReviewOverlay({ item }) {
  const date = format(new Date(item.createdAt), "yyyy-MM-dd");
  return (
    <div className={styles.wrapOverlay}>
      <div className={styles.wrapItem}>
        <div className={styles.wrapProfile}>
          <div className={styles.wrapImg}>
            <Image
              alt="section participants"
              src={item.foto}
              width={174}
              height={174}
              quality={100}
              style={{ borderRadius: "12px" }}
              priority
            />
          </div>
          <div className={styles.wrapInfo}>
            <p className={styles.textName}>{item.name}</p>
            <p className={styles.text}>{date}</p>
            <a
              href={item.link}
              className={styles.linkIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Сторінка LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.wrapReview}>
          <p>{item.message}</p>
        </div>
      </div>
    </div>
  );
}
