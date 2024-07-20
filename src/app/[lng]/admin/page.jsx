import React from "react";
// import { auth } from "@/src/config/auth";
import NavSections from "./_filesadmin/NavSections";
import styles from "./_filesadmin/Admin.module.css";

export default async function AdminPage({ params: { lng } }) {
  // const session = await auth();
  // if (!session) return <div>Not authenticated</div>;
  // console.log("Admin page");
  return (
    <section className={styles.admin}>
      {/* <h2>I am admin</h2> */}
      <NavSections lng={lng} />
    </section>
  );
}
