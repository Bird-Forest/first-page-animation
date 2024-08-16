import React from "react";
import styles from "./_filesproject/Project.module.css";
import Projects from "./_filesproject/Projects";
import { getProjects } from "../../services/projects";

export default async function ProjectsPage({ params: { lng } }) {
  const data = await getProjects();

  return (
    <section className={styles.project}>
      <Projects items={data} lng={lng} />
    </section>
  );
}
