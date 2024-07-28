"use client";

import React from "react";
import styles from "./Admin.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHouseUser, FaFolderPlus, FaFolderTree } from "react-icons/fa6";

export default function SettingPanelProd({ lng, title }) {
  const path = usePathname();
  const segments = path.split("/");
  const page = segments[3];

  return (
    <div className={styles.wrapPanelProd}>
      <Link href={`/${lng}/admin`} className={styles.linkPanel}>
        <FaHouseUser className={styles.iconPanel} />
      </Link>
      <h4 className={styles.titlePanel}>{title}</h4>
      <Link href={`/${lng}/admin/${page}`} className={styles.linkPanel}>
        <FaFolderTree className={styles.iconPanel} />
      </Link>
      <Link href={`/${lng}/admin/${page}/create`} className={styles.linkPanel}>
        <FaFolderPlus className={styles.iconPanel} />
      </Link>
    </div>
  );
}
