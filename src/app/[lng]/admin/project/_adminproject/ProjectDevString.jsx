"use client";

import React from "react";
import { BsPersonPlusFill, BsPersonDashFill } from "react-icons/bs";
import styles from "./ProjectAdm.module.css";

export default function ProjectDevString({ dev, idx, field }) {
  console.log(dev);
  return (
    <li className={styles.wrapStrDev}>
      <dev className={styles.wrapDevName}>
        <p className={styles.devName}>{`${item.last + " " + item.first}`}</p>
      </dev>
      <button className={styles.itemBtn}>
        <BsPersonPlusFill className={styles.iconBtn} />
      </button>
      <button className={styles.itemBtn}>
        <BsPersonDashFill className={styles.iconBtn} />
      </button>
    </li>
  );
}
