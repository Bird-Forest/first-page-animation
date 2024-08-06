import {
  getDeveloperById,
  updateDeveloper,
} from "@/src/app/services/developers";
import React from "react";
import DeveloperEdit from "../_filesdev/DeveloperEdit";
import styles from "../../_filesadmin/Admin.module.css";
import { getProjects } from "@/src/app/services/projects";

export default async function EditDeveloperPage({ params: { lng, id } }) {
  const data = await getDeveloperById({ id });
  const projects = await getProjects();

  return (
    <div className={styles.wrapContent}>
      <DeveloperEdit
        item={data}
        lng={lng}
        projects={projects}
        formAction={updateDeveloper}
      />
    </div>
  );
}
