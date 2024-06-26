"use client";

import React, { useState } from "react";
import styles from "./Speciality.module.css";
import Image from "next/image";
import { TbDots } from "react-icons/tb";

export default function SpecialityItem({ item }) {
  const [more, setMore] = useState(false);

  return (
    <li className={styles.wrapItem}>
      <div className={styles.wrapImg}>
        <Image
          alt="Picture with the name of the specialty"
          src={item.img}
          width={376}
          height={168}
          quality={100}
          style={{
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          priority
        />
      </div>
      <div className={`${styles.wrapInfo} ${more ? styles.show : ""}`}>
        <p className={styles.itemText}>{item.text1}</p>
        <p className={styles.itemText}>{item.text2}</p>
      </div>
      <button className={styles.wrapIcon} onClick={() => setMore(!more)}>
        <TbDots className={styles.icon} />
      </button>
    </li>
  );
}
