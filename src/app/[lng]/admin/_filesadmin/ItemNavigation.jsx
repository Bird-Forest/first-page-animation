"use client";

import Link from "next/link";
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import styles from "./Admin.module.css";
import { usePathname } from "next/navigation";

export default function ItemNavigation({ lng, id }) {
  console.log("ItemNavigation", id);
  const pathname = usePathname();
  const segments = pathname.split("/");
  console.log(segments);
  const page = segments[3];
  const path = segments[5];
  return (
    <div className={styles.wrapNavIdItem}>
      <Link
        href={`/${lng}/admin/${page}/${id}`}
        className={path !== "remove" ? styles.linkNavIdAct : styles.linkNavId}
      >
        <BsPencilSquare
          className={path !== "remove" ? styles.iconNavIdAct : styles.iconNavId}
        />
      </Link>
      <Link
        href={`/${lng}/admin/${page}/${id}/remove`}
        className={path === "remove" ? styles.linkNavIdAct : styles.linkNavId}
      >
        <BsTrash
          className={path === "remove" ? styles.iconNavIdAct : styles.iconNavId}
        />
      </Link>
    </div>
  );
}
