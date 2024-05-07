"use client";

import Image from "next/image";
import Link from "next/link";
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
      transition={{ delay: 3, duration: 1.5 }}
      variants={btnVariants}
    >
      Hello
    </motion.button>
  );
}
