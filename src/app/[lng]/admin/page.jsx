import React from "react";
import { auth } from "@/src/config/auth";
import styles from "./_filesadmin/Admin.module.css";
import SectionNavigation from "./_filesadmin/SectionNavigation";
import { redirect } from "next/navigation";
import BtnOut from "./_filesadmin/BtnOut";

export default async function AdminPage({ params: { lng } }) {
  // const session = await auth();

  // console.log("SESSION", session);

  // if (session === null) redirect(`/${lng}/auth`);
  return (
    <section className={styles.admin}>
      <SectionNavigation lng={lng} />
      <BtnOut lng={lng} />
    </section>
  );
}
