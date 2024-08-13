import React from "react";
// import BtnAction from "../../../_filesadmin/BtnAction";
import styles from "../../../_filesadmin/Admin.module.css";
// import ProjectItem from "../../../../projects/_filesproject/ProjectItem";
// import { deleteProject, getProjectById } from "@/src/app/services/projects";
import { getProjectById } from "@/src/app/services/projects";
// import ProjectImg from "../../_adminproject/ProjectImg";
import ProjectFile from "../../_adminproject/ProjectFile";
import ProjectImg from "../../_adminproject/ProjectImg";
import ProjectCover from "../../_adminproject/ProjectCover1";
// import ProjectFile from "../../_adminproject/ProjectFile";

export default async function RemoveProjectPage({ params: { lng, id } }) {
  const data = await getProjectById({ id });
  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        {/* <ProjectFile /> */}
        <ProjectImg />

        {/* <ProjectItem item={data} /> */}
        {/* <BtnAction item={data} id={id} formAction={deleteProject} lng={lng}>
          Видалити
        </BtnAction> */}
      </div>
    </div>
  );
}
