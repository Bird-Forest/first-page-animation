import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import SettingPanel from "../_filesadmin/SettingPanel";

export default function DevelopersLayout({ children, params: { lng } }) {
  const title = "Developers";

  return (
    <section className={styles.wrapPage}>
      <div className={styles.wrapNavPage}>
        <SettingPanel lng={lng} title={title} />
      </div>
      {children}
    </section>
  );
}
