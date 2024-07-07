import React from "react";
// import projects from "./data/projects.json";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./Project.module.css";
import { projects } from "./data/projects";
// import clientPromise from "@/src/lib/mongodb";
// import { getAllProjects } from "@/src/app/services/projects";

// export const getServerSideProps = async () => {
//   try {
//     const client = await clientPromise;
//     const db = client.db("baza");
//     const projects = await db.collection("projects");

//     return {
//       props: { projects: JSON.parse(JSON.stringify(projects)) },
//     };
//   } catch (e) {
//     console.error(e);
//     return { props: { projects: [] } };
//   }
// };

export default async function Projects() {
  return (
    <ul className={styles.wrapList}>
      {projects.map((item) => (
        <ProjectItem key={uuidv4()} item={item} />
      ))}
    </ul>
  );
}
