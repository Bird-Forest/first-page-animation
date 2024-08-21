import React from "react";
import Speciality from "./_filestrainee/Speciality";
import Stages from "./_filestrainee/Stages";
import Advantages from "./_filestrainee/Advantages";
import styles from "../page.module.css";

export const metadata = {
  title: "Baza Trainee",
  description:
    "Train the participant based on the technologies they currently possess and facilitate their employment. When creating a project, apply the technologies that the participant wants to develop, there is no retraining. To provide the customer with a high-quality digital product.",
};

export default async function TraineesPage({ params: { lng } }) {
  return (
    <div className={styles.wrapPage}>
      <Speciality lng={lng} />
      <Stages lng={lng} />
      <Advantages lng={lng} />
    </div>
  );
}
