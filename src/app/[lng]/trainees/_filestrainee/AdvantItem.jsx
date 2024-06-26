import React from "react";
import styles from "./Advantages.module.css";
import Image from "next/image";

export default function AdvantItem({ item }) {
  return (
    <li className={styles.wrapItem}>
      <div className={styles.wrapImg}>
        <Image
          alt="Icons represent benefits"
          src={item.img}
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <p className={styles.text}>{item.text}</p>
    </li>
  );
}
