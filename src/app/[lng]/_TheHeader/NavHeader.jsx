"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { delay, motion } from "framer-motion";

export default function NavHeader({ lng }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[2];

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -1200 },
  };

  return (
    <motion.ul
      className={styles.navigate}
      initial="hidden"
      animate="visible"
      variants={list}
      viewport={{ once: true }}
    >
      <motion.li variants={item} transition={{ delay: 6, duration: 1 }}>
        <Link
          href={`/${lng}/home`}
          className={page === "home" ? styles.active : styles.link}
        >
          Головна
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 5, duration: 1 }}>
        <Link
          href={`/${lng}/trainees`}
          className={page === "trainees" ? styles.active : styles.link}
        >
          Стажування
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 4, duration: 1 }}>
        <Link
          href={`/${lng}/projects`}
          className={page === "projects" ? styles.active : styles.link}
        >
          Проєкти
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 3, duration: 1 }}>
        <Link
          href={`/${lng}/blog`}
          className={page === "blog" ? styles.active : styles.link}
        >
          Блог
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 2, duration: 1 }}>
        <Link
          href={`/${lng}/about`}
          className={page === "about" ? styles.active : styles.link}
        >
          Про нас
        </Link>
      </motion.li>
    </motion.ul>
  );
}
