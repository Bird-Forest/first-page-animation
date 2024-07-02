import React from "react";
// import projects from "./data/projects.json";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./Project.module.css";
import { projects } from "./data/projects";

export default function Projects() {
  return (
    <ul className={styles.wrapList}>
      {projects.map((item) => (
        <ProjectItem key={uuidv4()} item={item} />
      ))}
    </ul>
  );
}
