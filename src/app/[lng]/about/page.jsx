import React from "react";
import styles from "./_filesabout/About.module.css";
import AboutUs from "./_filesabout/AboutUs";
import Documents from "./_filesabout/Documents";
// import Link from "next/link";

export default async function AboutPage({ params: { lng } }) {
  return (
    <section className={styles.about}>
      <AboutUs lng={lng} />
      <Documents lng={lng} />
      {/* <Link href={`/${lng}/auth`} className={styles.aboutTitle}>
        Enter admin
      </Link> */}
    </section>
  );
}
