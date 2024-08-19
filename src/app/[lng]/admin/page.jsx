import React from "react";
import styles from "./_filesadmin/Admin.module.css";
import SectionNavigation from "./_filesadmin/SectionNavigation";
import BtnOut from "./_filesadmin/BtnOut";

export default async function AdminPage({ params: { lng } }) {
  return (
    <section className={styles.admin}>
      <SectionNavigation lng={lng} />
      <BtnOut lng={lng} />
    </section>
  );
}
