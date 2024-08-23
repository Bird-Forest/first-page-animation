import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import { revalidatePath } from "next/cache";
import MentorList from "./_filesmentor/MentorList";
import { getMentors } from "@/src/app/services/mentors";

export default async function ListOfMentorsPage({ params: { lng } }) {
  const data = await getMentors();
  revalidatePath(`/${lng}/admin/mentor`, "page");
  return (
    <section className={styles.wrapContent}>
      <MentorList lng={lng} mentors={data} />
    </section>
  );
}
