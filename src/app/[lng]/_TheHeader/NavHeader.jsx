"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { delay, motion } from "framer-motion";
import { useTranslation } from "@/src/app/i18n/client";

export default function NavHeader({ lng }) {
  const { t } = useTranslation(lng, "header");
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
        <Link href={`/${lng}`} className={!page ? styles.active : styles.link}>
          {t("home")}
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 5, duration: 1 }}>
        <Link
          href={`/${lng}/trainees`}
          className={page === "trainees" ? styles.active : styles.link}
        >
          {t("trainees")}
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 4, duration: 1 }}>
        <Link
          href={`/${lng}/projects`}
          className={page === "projects" ? styles.active : styles.link}
        >
          {t("projects")}
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 3, duration: 1 }}>
        <Link
          href={`/${lng}/blog`}
          className={page === "blog" ? styles.active : styles.link}
        >
          {t("blog")}
        </Link>
      </motion.li>
      <motion.li variants={item} transition={{ delay: 2, duration: 1 }}>
        <Link
          href={`/${lng}/about`}
          className={page === "about" ? styles.active : styles.link}
        >
          {t("about")}
        </Link>
      </motion.li>
    </motion.ul>
  );
}
