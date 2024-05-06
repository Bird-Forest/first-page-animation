import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
// import { getDictionary } from "../dictionaries";

export default async function AidButton() {
  // const dict = await getDictionary(lang);
  return <button className={styles.button}>Hello</button>;
}
