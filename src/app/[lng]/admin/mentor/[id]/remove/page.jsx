import React from "react";
import styles from "../../../_filesadmin/Admin.module.css";
import BtnAction from "../../../_filesadmin/BtnAction";
import MentorItem from "../../_filesmentor/MentorItem";
import { deleteMentor, getMentorById } from "@/src/app/services/mentors";

export default async function RemoveMentorPage({ params: { lng, id } }) {
  const data = await getMentorById({ id });
  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        <MentorItem item={data} />
        <BtnAction item={data} id={id} formAction={deleteMentor} lng={lng}>
          Видалити
        </BtnAction>
      </div>
    </div>
  );
}
