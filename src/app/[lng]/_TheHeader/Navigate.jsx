"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function Navigate({ links }) {
  const pathname = usePathname();

  return (
    <ul className={styles.navigate}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <li key={uuidv4()}>
            <Link
              href={link.href}
              className={isActive ? styles.active : styles.link}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// import { TiThMenu } from "react-icons/ti"; <TiThMenu />;

{
  /* <Link href="/" className={styles.link}>
        Головна
      </Link>
      <Link href="/trainees" className={styles.link}>
        Стажування
      </Link>
      <Link href="/projects" className={styles.link}>
        Проєкти
      </Link>
      <Link href="/blog" className={styles.link}>
        Блог
      </Link>
      <Link href="/contacts" className={styles.link}>
        Контакти
      </Link> */
}
