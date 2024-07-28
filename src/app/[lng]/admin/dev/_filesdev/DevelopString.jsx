"use client";

import React from "react";
import styles from "../_filesdev/Develop.module.css";
import { BsPerson, BsPersonGear } from "react-icons/bs";
import Link from "next/link";

export default function DevelopString({ item, lng }) {
  return (
    <li className={styles.wrapStrDev}>
      <dev className={styles.wrapDevName}>
        <p className={styles.devName}>{`${item.last + " " + item.first}`}</p>
      </dev>
      <button className={styles.itemBtn}>
        <BsPerson className={styles.iconBtn} />
      </button>

      <Link href={`/${lng}/admin/dev/${item._id}`} className={styles.itemBtn}>
        <BsPersonGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
