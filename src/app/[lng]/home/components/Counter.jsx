"use client";

import React from "react";
import styles from "./Counter.module.css";
import { MCount } from "./CountItem";
import { motion } from "framer-motion";

export default function Counter() {
  const countAnimation = {
    start: {
      color: "rgb(252, 252, 252)",
    },
    end: {
      color: "rgb(219, 151, 197)",
      transition: { duration: 0.3, repeat: 6 },
    },
  };

  return (
    <motion.section
      initial="start"
      whileInView="end"
      viewport={{ margin: "200px", amount: 0.3 }}
      className={styles.counter}
    >
      <motion.ul className={styles.wrapList}>
        <motion.li className={styles.countWrap}>
          <MCount item={41} time={5} variants={countAnimation} />

          <h4 className={styles.countTitle}>активних проєктів</h4>
        </motion.li>
        <motion.li className={styles.countWrap} variants={countAnimation}>
          <MCount item={371} time={20} />

          <h4 className={styles.countTitle}>залучених учасників</h4>
        </motion.li>
        <motion.li className={styles.countWrap}>
          <MCount item={87} time={10} />

          <h4 className={styles.countTitle}>отримали роботу</h4>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}
