"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { ExitAdmin } from "./ExitAdmin";

export default function NavAdmin({ lng }) {
  const pathname = usePathname();
  // console.log(pathname);
  const segments = pathname.split("/");
  // console.log(segments);
  const page = segments[2];
  // console.log(page);

  return (
    <div className={styles.wrapAdmin}>
      <Link
        href={`/${lng}/admin`}
        className={page === "admin" ? styles.active : styles.link}
      >
        Admin
      </Link>
      <ExitAdmin lng={lng} />
    </div>
  );
}
