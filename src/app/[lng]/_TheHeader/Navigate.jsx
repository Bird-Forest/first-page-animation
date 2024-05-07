"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function Navigate({ links }) {
  const pathname = usePathname();
  const arrVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 2,
        duration: 2,
      },
    }),
    hidden: {
      opacity: 0,
      x: -1200,
    },
  };

  return (
    <ul className={styles.navigate}>
      {links.map((link, i) => {
        const isActive = pathname === link.href;
        return (
          <motion.li
            key={uuidv4()}
            variants={arrVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <Link
              href={link.href}
              className={isActive ? styles.active : styles.link}
            >
              {link.label}
            </Link>
          </motion.li>
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
