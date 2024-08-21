import React from "react";
import styles from "../../../_filesadmin/Admin.module.css";
import ProjectJoinTeam from "../../_adminproject/ProjectJoinTeam";
import { getProjectById } from "@/src/app/services/projects";

export default async function PickTeamPage({ params: { lng, id } }) {
  const data = await getProjectById({ id });

  return (
    <div className={styles.wrapContent}>
      <ProjectJoinTeam data={data} lng={lng} />
    </div>
  );
}
