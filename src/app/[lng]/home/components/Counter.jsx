"use client";

import React from "react";
import styles from "./Counter.module.css";
import { MCount } from "./CountItem";
import { motion } from "framer-motion";

export default function Counter() {
  const countAnimation = {
    start: {
      x: 0,
    },
    middle: {
      x: 5,
      transition: { duration: 0.3, repeat: 6 },
    },
    end: {
      x: 0,
      transition: { duration: 0.3, repeat: 6 },
    },
  };

  return (
    <motion.section
      initial="start"
      animate="middle"
      whileInView="end"
      viewport={{ margin: "200px", amount: 0.3 }}
      className={styles.counter}
    >
      <motion.div className={styles.countWrap}>
        <MCount item={41} time={5} variants={countAnimation} />

        <h4 className={styles.countTitle}>активних проєктів</h4>
      </motion.div>
      <motion.div className={styles.countWrap} variants={countAnimation}>
        <MCount item={371} time={20} />

        <h4 className={styles.countTitle}>залучених учасників</h4>
      </motion.div>
      <motion.div className={styles.countWrap}>
        <MCount item={87} time={10} />

        <h4 className={styles.countTitle}>отримали роботу</h4>
      </motion.div>
    </motion.section>
  );
}
