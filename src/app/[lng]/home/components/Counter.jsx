"use client";

import React from "react";
import styles from "./Counter.module.css";
import { MCount } from "./CountItem";
import { motion } from "framer-motion";
import { MdAdsClick } from "react-icons/md";

export default function Counter() {
  const itemAnimation = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 0,
      transition: { delay: 10, duration: 1 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3, once: true }}
      className={styles.counter}
    >
      <motion.ul className={styles.wrapList}>
        <motion.li className={styles.wrapItem}>
          <div className={styles.wrapTotal}>
            <MCount item={41} time={5} />
            <motion.div variants={itemAnimation} className={styles.wrapClick}>
              <MdAdsClick className={styles.click} />
            </motion.div>
          </div>
          <h4 className={styles.countTitle}>активних проєктів</h4>
        </motion.li>
        <motion.li className={styles.wrapItem}>
          <div className={styles.wrapTotal}>
            <MCount item={371} time={15} />
            <motion.div variants={itemAnimation} className={styles.wrapClick}>
              <MdAdsClick className={styles.click} />
            </motion.div>
          </div>
          <h4 className={styles.countTitle}>залучених учасників</h4>
        </motion.li>
        <motion.li className={styles.wrapItem}>
          <div className={styles.wrapTotal}>
            <MCount item={87} time={10} />
            <motion.div variants={itemAnimation} className={styles.wrapClick}>
              <MdAdsClick className={styles.click} />
            </motion.div>
          </div>
          <h4 className={styles.countTitle}>отримали роботу</h4>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}
