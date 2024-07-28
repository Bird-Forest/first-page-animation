"use client";

import React from "react";
import styles from "../_filesdev/Develop.module.css";
import {
  BsGear,
  BsPersonBoundingBox,
  BsPerson,
  BsPersonGear,
} from "react-icons/bs";
import Link from "next/link";

export default function DevelopString({ item, lng }) {
  return (
    <li className={styles.wrapStrDev}>
      <dev className={styles.wrapDevName}>
        <p className={styles.devName}>{`${item.last + " " + item.first}`}</p>
      </dev>
      <button className={styles.itemBtn}>
        {/* <BsPersonBoundingBox className={styles.iconBtn} /> */}
        <BsPerson className={styles.iconBtn} />
      </button>

      <Link href={`/${lng}/admin/dev/${item._id}`} className={styles.itemBtn}>
        {/* <BsGear className={styles.iconBtn} /> */}
        <BsPersonGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
