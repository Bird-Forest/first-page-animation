import React from "react";
import BtnAction from "../../../_filesadmin/BtnAction";
import styles from "../../../_filesadmin/Admin.module.css";
import ProjectItem from "../../../../projects/_filesproject/ProjectItem";
import { deleteProject, getProjectById } from "@/src/app/services/projects";

export default async function RemoveProjectPage({ params: { lng, id } }) {
  const data = await getProjectById({ id });
  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        <ProjectItem item={data} />
        <BtnAction item={data} id={id} formAction={deleteProject} lng={lng}>
          Видалити
        </BtnAction>
      </div>
    </div>
  );
}
