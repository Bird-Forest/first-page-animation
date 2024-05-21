"use client";

import React from "react";
import styles from "./Press.module.css";
import presslist from "./data/presslist.json";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { MPressItem } from "./PressItem";

const pressAnimation = {
  start: {
    opacity: 0,
  },
  end: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 2, duration: 2 },
  }),
};

export default function Press() {
  return (
    <motion.section
      initial="start"
      whileInView="end"
      viewport={{ margin: "-150px", amount: 0.05, once: true }}
      className={styles.press}
    >
      <h2 className={styles.pressTitle}>Преса про нас</h2>
      <motion.ul className={styles.pressList}>
        {presslist.map((item, idx) => (
          <MPressItem
            variants={pressAnimation}
            custom={idx}
            key={uuidv4()}
            item={item}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
