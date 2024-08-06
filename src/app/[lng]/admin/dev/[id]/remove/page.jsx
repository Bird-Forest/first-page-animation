import React from "react";
import DevelopItem from "../../_filesdev/DevelopItem";
import styles from "../../../_filesadmin/Admin.module.css";
import {
  deleteDeveloper,
  getDeveloperById,
} from "@/src/app/services/developers";
import BtnAction from "../../../_filesadmin/BtnAction";

export default async function RemoveDeveloperPage({ params: { lng, id } }) {
  const data = await getDeveloperById({ id });
  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        <DevelopItem item={data} />
        <BtnAction item={data} id={id} formAction={deleteDeveloper} lng={lng}>
          Видалити
        </BtnAction>
      </div>
    </div>
  );
}
