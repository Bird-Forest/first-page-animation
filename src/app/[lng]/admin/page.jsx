import React from "react";
import { auth } from "@/src/config/auth";
import styles from "./_filesadmin/Admin.module.css";
import SectionNavigation from "./_filesadmin/SectionNavigation";

export default async function AdminPage({ params: { lng } }) {
  const session = await auth();
  // if (!session) return <div>Not authenticated</div>;

  return (
    <section className={styles.admin}>
      <SectionNavigation lng={lng} />
    </section>
  );
}
