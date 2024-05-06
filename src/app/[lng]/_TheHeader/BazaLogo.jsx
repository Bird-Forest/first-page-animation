import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../image/logo.svg";
import styles from "./Header.module.css";

export default function BazaLogo() {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt="logo" width={60} height={60} priority />
    </div>
  );
}
