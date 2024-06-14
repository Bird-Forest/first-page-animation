"use client";

import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import logo from "../../../../public/baza/logoblack.svg";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className={styles.wrapLoading}>
      <motion.div animate={{ rotate: 360 }} className={styles.wrapLogo}>
        <Image src={logo} alt="logo" width={120} height={120} priority />
      </motion.div>
    </div>
  );
}
