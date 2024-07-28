import {
  getDeveloperById,
  updateDeveloper,
} from "@/src/app/services/developers";
import React from "react";
import DeveloperEdit from "../_filesdev/DeveloperEdit";
import styles from "../../_filesadmin/Admin.module.css";
import ModalTrainee from "../../../_Modal/ModalTrainee";

export default async function EditDeveloperPage({ params: { lng, id } }) {
  const data = await getDeveloperById({ id });
  // console.log(data);
  return (
    <div className={styles.wrapContent}>
      {/* <DeveloperEdit item={data} lng={lng} /> */}
      <div className={styles.wrapForm}>
        <ModalTrainee formAction={updateDeveloper} item={data} lng={lng} />
      </div>
    </div>
  );
}
