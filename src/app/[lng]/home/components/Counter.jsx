"use client";

import React from "react";
import styles from "./Counter.module.css";
import { FaPlus } from "react-icons/fa6";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Counter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  // const a = useMotionValue(0);
  // const b = useMotionValue(0);
  //  const c = useMotionValue(0);

  //  whileInView={{ opacity: 1 }}

  //   animate(x, 200, { duration: 0.5 });

  useEffect(() => {
    const animation = animate(count, 41, { duration: 10 });

    return animation.stop;
  }, [count]);
  return (
    <section className={styles.counter}>
      <div className={styles.countWrap}>
        <div className={styles.number}>
          <motion.div className={styles.item}>{rounded}</motion.div>
          <FaPlus className={styles.icon} />
        </div>
        <h4 className={styles.countTitle}>активних проєктів</h4>
      </div>
      <div className={styles.countWrap}>
        <div className={styles.number}>
          <span className={styles.item}>371</span>
          <FaPlus className={styles.icon} />
        </div>
        <h4 className={styles.countTitle}>залучених учасників</h4>
      </div>
      <div className={styles.countWrap}>
        <div className={styles.number}>
          <span className={styles.item}>87</span>
          <FaPlus className={styles.icon} />
        </div>
        <h4 className={styles.countTitle}>працевлаштовано</h4>
      </div>
    </section>
  );
}
