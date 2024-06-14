"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { forwardRef } from "react";
import { FaPlus } from "react-icons/fa6";
import styles from "./Counter.module.css";

export const Count = forwardRef(function Count({ item, time }, ref) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const onCounter = () => {
    const animation = animate(count, item, { duration: time });
    return animation.stop;
  };

  return (
    <motion.div ref={ref} className={styles.wrapAmount} onClick={onCounter}>
      <motion.div className={styles.amount}>{rounded}</motion.div>
      <FaPlus className={styles.plus} />
    </motion.div>
  );
});
export const MCount = motion(Count);
