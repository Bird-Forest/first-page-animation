"use client";

import React from "react";
import styles from "./Helper.module.css";
import Image from "next/image";
import logo from "../../../../public/baza/logoblack.svg";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className={styles.wrapLoading}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, type: "just" }}
        className={styles.wrapLogo}
      >
        <Image src={logo} alt="logo" width={200} height={200} priority />
      </motion.div>
    </div>
  );
}
