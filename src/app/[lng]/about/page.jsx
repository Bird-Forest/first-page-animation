import React from "react";
import { languages } from "../../i18n/settings";
import styles from "./_filesabout/About.module.css";
import AboutUs from "./_filesabout/AboutUs";
import Documents from "./_filesabout/Documents";

// import { TfiWrite } from "react-icons/tfi";
// import Image from "next/image";
// import blog from "@/public/baza/blog.png";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function AboutPage({ params: { lng } }) {
  return (
    <section className={styles.about}>
      {/* <h2 className={styles.aboutTitle}>Про нас</h2> */}
      <AboutUs />
      <Documents />
    </section>
  );
}
