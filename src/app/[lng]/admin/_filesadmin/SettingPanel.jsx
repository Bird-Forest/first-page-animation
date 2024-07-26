"use client";

import React from "react";
import styles from "./Admin.module.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHouseUser, FaFolderPlus, FaFolderTree } from "react-icons/fa6";
import { revalidatePath, revalidateTag } from "next/cache";

export default function SettingPanel({ lng, title }) {
  // const route = useRouter();
  const path = usePathname();
  const segments = path.split("/");
  const page = segments[3];

  return (
    <div className={styles.wrapPanel}>
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
    // <div className={styles.wrapPanel}>
    //   <button
    //     onClick={() => route.push(`/${lng}/admin`)}
    //     className={styles.btnHome}
    //   >
    //     <FaHouseUser className={styles.iconPanel} />
    //   </button>
    //   <h4 className={styles.titlePanel}>{title}</h4>
    //   <Link href={`/${lng}/admin/${page}/list`} className={styles.linkPanel}>
    //     <FaFolderTree className={styles.iconPanel} />
    //   </Link>
    //   <Link href={`/${lng}/admin/${page}/create`} className={styles.linkPanel}>
    //     <FaFolderPlus className={styles.iconPanel} />
    //   </Link>
    // </div>
  );
}
