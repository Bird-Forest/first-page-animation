import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import SettingPanelUser from "../_filesadmin/SettingPanelUser";

export default function DevelopersLayout({ children, params: { lng } }) {
  const title = "Developers";

  return (
    <section className={styles.wrapPage}>
      <div className={styles.wrapNavPage}>
        <SettingPanelUser lng={lng} title={title} />
      </div>
      {children}
    </section>
  );
}
