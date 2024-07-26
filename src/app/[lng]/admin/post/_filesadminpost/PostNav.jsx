"use client";

import Link from "next/link";
import React from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import styles from "../_filesadminpost/Post.module.css";
import { usePathname } from "next/navigation";

export default function PostNav({ lng, id }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const path = segments[5];
  return (
    <div className={styles.wrapNavIdPost}>
      <Link
        href={`/${lng}/admin/post/${id}`}
        className={path !== "remove" ? styles.linkNavIdAct : styles.linkNavId}
      >
        <BsPencilSquare
          className={path !== "remove" ? styles.iconNavIdAct : styles.iconNavId}
        />
      </Link>
      <Link
        href={`/${lng}/admin/post/${id}/remove`}
        className={path === "remove" ? styles.linkNavIdAct : styles.linkNavId}
      >
        <BsTrash
          className={path === "remove" ? styles.iconNavIdAct : styles.iconNavId}
        />
      </Link>
    </div>
  );
}
