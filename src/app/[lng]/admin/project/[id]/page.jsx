import { getProjectById, updateProject } from "@/src/app/services/projects";
import React from "react";
import ProjectForm from "../_adminproject/ProjectForm";
import styles from "../../_filesadmin/Admin.module.css";

export default async function ProjectDyIdPage({ params: { lng, id } }) {
  const date = await getProjectById({ id });
  revalidatePath(`/${lng}/admin/project/${id}`, "page");
  return (
    <div className={styles.wrapContent}>
      <ProjectForm project={date} lng={lng} formAction={updateProject} />
    </div>
  );
}
