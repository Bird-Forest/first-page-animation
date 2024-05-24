"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavFooter({ lng }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[2];

  return (
    <ul className={styles.wrapLink}>
      <li>
        <Link
          href={`/${lng}/home`}
          className={page === "home" ? styles.active : styles.link}
        >
          Головна
        </Link>
      </li>
      <li>
        <Link
          href={`/${lng}/trainees`}
          className={page === "trainees" ? styles.active : styles.link}
        >
          Стажування
        </Link>
      </li>
      <li>
        <Link
          href={`/${lng}/projects`}
          className={page === "projects" ? styles.active : styles.link}
        >
          Проекти
        </Link>
      </li>
      <li>
        <Link
          href={`/${lng}/blog`}
          className={page === "blog" ? styles.active : styles.link}
        >
          Блог
        </Link>
      </li>
      <li>
        <Link
          href={`/${lng}/contacts`}
          className={page === "contacts" ? styles.active : styles.link}
        >
          Контакти
        </Link>
      </li>
    </ul>
  );
}
