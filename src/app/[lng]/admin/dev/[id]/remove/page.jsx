import React from "react";
import DevelopItem from "../../_filesdev/DevelopItem";
import styles from "../../../_filesadmin/Admin.module.css";
import { getDeveloperById } from "@/src/app/services/developers";

export default async function RemoveDeveloperPage({ params: { lng, id } }) {
  const data = await getDeveloperById({ id });
  // console.log("DATA", data);
  return (
    <div className={styles.wrapContent}>
      {/* <div className={styles.wrapForm}> */}
      <DevelopItem item={data} />
      {/* </div> */}
    </div>
  );
}
