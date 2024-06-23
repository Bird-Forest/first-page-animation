"use client";

import React from "react";
import styles from "./Press.module.css";
import { presslist } from "./data/presslist";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { PressItem } from "./PressItem";
import { useTranslation } from "@/app/i18n/client";

const pressAnimation = {
  start: {
    opacity: 0,
  },
  end: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 1, duration: 2 },
  }),
};

export default function Press({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <motion.section
      initial="start"
      whileInView="end"
      viewport={{ margin: "-150px", amount: 0.05, once: true }}
      className={styles.press}
    >
      <h2 className={styles.pressTitle}>{t("press_title")}</h2>
      <motion.ul className={styles.pressList}>
        {presslist.map((item) => (
          <PressItem
            variants={pressAnimation}
            custom={item.id}
            key={uuidv4()}
            item={item}
            lng={lng}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
