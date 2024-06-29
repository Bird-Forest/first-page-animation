import React from "react";
import Image from "next/image";
import logo from "../../../../public/baza/logo.svg";
import styles from "./Footer.module.css";

export default function FooterLogo() {
  return (
    <div className={styles.wrapImg}>
      <Image src={logo} alt="logo" width={60} height={60} priority />
    </div>
  );
}
