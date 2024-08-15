import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import MentorForm from "../_filesmentor/MentorForm";
import { getMentorById, updateMentor } from "@/src/app/services/mentors";

export default async function EditMentorPage({ params: { lng, id } }) {
  const data = await getMentorById({ id });
  return (
    <div className={styles.wrapContent}>
      <MentorForm item={data} lng={lng} formAction={updateMentor} />
    </div>
  );
}
