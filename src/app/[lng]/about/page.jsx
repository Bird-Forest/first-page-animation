import React from "react";
import styles from "./_filesabout/About.module.css";
import AboutUs from "./_filesabout/AboutUs";
import Documents from "./_filesabout/Documents";

export const metadata = {
  title: "Baza About us",
  description:
    "The Baza Trainee Ukraine initiative as an educational and training platform arises in response to a public demand that arose in Ukraine in 2022-2023 in the field of employment in the field of information technologies and is a website that unites, as users, two social groups.",
};

export default function AboutPage({ params: { lng } }) {
  return (
    <section className={styles.about}>
      <AboutUs lng={lng} />
      <Documents lng={lng} />
    </section>
  );
}
