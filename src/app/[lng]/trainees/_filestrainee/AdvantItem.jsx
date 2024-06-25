import React from "react";
import styles from "./Advantages.module.css";
import Image from "next/image";

export default function AdvantItem({ item }) {
  return (
    <li className={styles.wrapItem}>
      <div className={styles.wrapImg}>
        <Image alt="icon" src={item.img} width={96} height={96} quality={100} />
      </div>
      <p className={styles.text}>{item.text}</p>
    </li>
  );
}
