import React from "react";
import { languages } from "../../i18n/settings";
import styles from "./_filesproject/Project.module.css";
import Projects from "./_filesproject/Projects";
// import getAll from "../../services/database";
// import getAll from "../../services/projects";
// import { getAllProjects } from "../../services/projects";
// import { getDictionary } from "../dictionaries";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// async function getProjects() {
//   const res = await fetch("https://localhost:3000/app/[lng]/projects");
//   const projects = await res.json();
//   console.log(projects);
//   return projects;
// }

export default async function ProjectsPage({ params: { lng } }) {
  // const projects = getAll();
  // console.log(projects);
  // const projects = getAllProjects();

  // const recentProjects = await getAll();
  // console.log(recentProjects);

  // const projects = await getAllProjects();
  // console.log(projects);
  return (
    <section className={styles.project}>
      <h2 className={styles.projectTitle}>Проєкти</h2>
      <Projects />
    </section>
  );
}
