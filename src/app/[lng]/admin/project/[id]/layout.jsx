"use client";

import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPencilSquare, BsTrash, BsPeople } from "react-icons/bs";

export default function DynamicProjectLayout({
  children,
  params: { lng, id },
}) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[3];
  const path = segments[5];
  return (
    <div className={styles.wrapLayout}>
      <div className={styles.wrapNavPage}>
        <div className={styles.wrapNavIdItem}>
          <Link
            href={`/${lng}/admin/${page}/${id}`}
            className={
              path !== "remove" && path !== "team"
                ? styles.linkNavIdAct
                : styles.linkNavId
            }
          >
            <BsPencilSquare
              className={
                path !== "remove" && path !== "team"
                  ? styles.iconNavIdAct
                  : styles.iconNavId
              }
            />
          </Link>
          <Link
            href={`/${lng}/admin/${page}/${id}/team`}
            className={path === "team" ? styles.linkNavIdAct : styles.linkNavId}
          >
            <BsPeople
              className={
                path === "team" ? styles.iconNavIdAct : styles.iconNavId
              }
            />
          </Link>
          <Link
            href={`/${lng}/admin/${page}/${id}/remove`}
            className={
              path === "remove" ? styles.linkNavIdAct : styles.linkNavId
            }
          >
            <BsTrash
              className={
                path === "remove" ? styles.iconNavIdAct : styles.iconNavId
              }
            />
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
