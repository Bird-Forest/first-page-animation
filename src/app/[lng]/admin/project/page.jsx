import { createProject, getProjects } from "@/src/app/services/projects";
import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import { revalidatePath } from "next/cache";
import ProjectList from "./_adminproject/ProjectList";

export default async function ListProjectsPage({ params: { lng } }) {
  // const date = await createProject();
  const data = await getProjects();
  // console.log(data);
  revalidatePath(`/${lng}/admin/project`, "page");
  return (
    <div className={styles.wrapContent}>
      <ProjectList projects={data} lng={lng} />
    </div>
  );
}
