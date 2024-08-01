import { createNewProject } from "@/src/app/services/projects";
import React from "react";
import ProjectForm from "../_adminproject/ProjectForm";
import styles from "../../_filesadmin/Admin.module.css";

export default async function ProjectCreatePage({ params: { lng } }) {
  return (
    <div className={styles.wrapContent}>
      <ProjectForm lng={lng} formAction={createNewProject} />
    </div>
  );
}
