"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../image/logo.svg";
import styles from "./Header.module.css";
import { motion } from "framer-motion";

export default function BazaLogo() {
  return (
    <motion.div
      className={styles.logo}
      animate={{ rotate: 360 }}
      transition={{ delay: 3, duration: 2, repeat: 5 }}
    >
      <Image src={logo} alt="logo" width={60} height={60} priority />
    </motion.div>
  );
}
// repeatDelay: 1;
