import React from "react";
import styles from "./_filesproject/Project.module.css";
import Projects from "./_filesproject/Projects";
import { getProjects } from "../../services/projects";

export const metadata = {
  title: "Baza Projects",
  description:
    "During our work, we observe an increase in project complexity from simple landing pages to full-fledged websites",
};

export default async function ProjectsPage({ params: { lng } }) {
  const data = await getProjects();

  return (
    <section className={styles.project}>
      <Projects items={data} lng={lng} />
    </section>
  );
}
