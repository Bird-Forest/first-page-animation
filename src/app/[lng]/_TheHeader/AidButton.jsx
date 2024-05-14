"use client";

import React from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function AidButton() {
  const btnVariants = {
    hidden: {
      x: -1200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.button
      className={styles.button}
      initial={"hidden"}
      animate={"visible"}
      transition={{ delay: 2.5, duration: 2 }}
      variants={btnVariants}
    >
      Підтримати проєкт
    </motion.button>
  );
}
