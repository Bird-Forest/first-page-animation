import React from "react";
import { auth } from "@/src/config/auth";
import styles from "./_filesadmin/Admin.module.css";
import SectionNavigation from "./_filesadmin/SectionNavigation";
import { redirect } from "next/navigation";
import { Providers } from "../_Helper/Providers";

export default async function AdminPage({ params: { lng } }) {
  const session = await auth();

  if (session === null) redirect(`/${lng}/home`);
  return (
    <Providers>
      <section className={styles.admin}>
        <SectionNavigation lng={lng} />
      </section>
    </Providers>
  );
}
