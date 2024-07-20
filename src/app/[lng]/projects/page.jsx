import React from "react";
// import { languages } from "../../i18n/settings";
import styles from "./_filesproject/Project.module.css";
import Projects from "./_filesproject/Projects";
import { getProjects } from "../../services/projects";

// export function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

export default async function ProjectsPage({ params: { lng } }) {
  const data = await getProjects();
  // console.log("ARR", data);

  return (
    <section className={styles.project}>
      <Projects items={data} />
    </section>
  );
}
