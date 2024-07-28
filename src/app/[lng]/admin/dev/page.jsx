import React from "react";
import DevelopList from "./_filesdev/DevelopList";
import styles from "../_filesadmin/Admin.module.css";
import { getDevelopers } from "@/src/app/services/developers";
import { revalidatePath } from "next/cache";

export default async function ListDevelopersPage({ params: { lng } }) {
  const data = await getDevelopers();
  revalidatePath(`/${lng}/admin/dev`, "page");

  return (
    <div className={styles.wrapContent}>
      <DevelopList lng={lng} devs={data} />
    </div>
  );
}
