import React from "react";
import Speciality from "./_filestrainee/Speciality";
import Stages from "./_filestrainee/Stages";
import Advantages from "./_filestrainee/Advantages";
import styles from "../page.module.css";

export default async function TraineesPage({ params: { lng } }) {
  return (
    <div className={styles.wrapPage}>
      <Speciality lng={lng} />
      <Stages lng={lng} />
      <Advantages lng={lng} />
    </div>
  );
}
