"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../../public/baza/logo.svg";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function HeaderLogo() {
  return (
    <motion.div
      className={styles.logo}
      animate={{ rotate: 360 }}
      transition={{ delay: 1.1, duration: 1, repeat: 5 }}
    >
      <Image src={logo} alt="logo" width={60} height={60} priority />
    </motion.div>
  );
}
// repeatDelay: 1;
