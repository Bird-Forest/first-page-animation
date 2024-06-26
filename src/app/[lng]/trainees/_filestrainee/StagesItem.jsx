import React from "react";
import styles from "./Stages.module.css";
import Image from "next/image";
import { FiCheckSquare } from "react-icons/fi";

export default function StagesItem({ item }) {
  return (
    <li className={`${styles.wrapItem} ${item.bg}`}>
      <div className={styles.wrapTitle}>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <div className={styles.wrapImg}>
          <Image
            alt="Baza Trainee entry stage icon"
            src={item.img}
            width={40}
            height={40}
            quality={100}
          />
        </div>
      </div>
      <div className={styles.wrapInfo}>
        <div className={styles.wrapText}>
          <div className={styles.wrapIcon}>
            <FiCheckSquare className={styles.icon} />
          </div>
          <p className={styles.itemText}>{item.text1}</p>
        </div>
        <div className={styles.wrapText}>
          <div className={styles.wrapIcon}>
            <FiCheckSquare className={styles.icon} />
          </div>
          <p className={styles.itemText}>{item.text2}</p>
        </div>
        <div className={styles.wrapText}>
          <div className={styles.wrapIcon}>
            <FiCheckSquare className={styles.icon} />
          </div>
          <p className={styles.itemText}>{item.text3}</p>
        </div>
      </div>
    </li>
  );
}
