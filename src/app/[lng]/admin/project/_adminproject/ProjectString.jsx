import React from "react";
import { BsGear } from "react-icons/bs";
import Link from "next/link";
import styles from "./ProjectAdm.module.css";
import { FaCircle } from "react-icons/fa";

export default function ProjectString({ item, lng }) {
  const state = item.status;
  return (
    <li className={styles.wrapStrProject}>
      <div className={styles.wrapTitle}>
        <FaCircle className={styles.statusIcon} style={{ fill: state.color }} />
        <p className={styles.itemTitle}>{item.name}</p>
      </div>
      <Link
        href={`/${lng}/admin/project/${item._id}`}
        className={styles.filterBtn}
      >
        <BsGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
