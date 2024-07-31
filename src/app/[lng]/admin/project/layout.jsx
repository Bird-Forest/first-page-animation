// "use client";

import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import SettingPanelProd from "../_filesadmin/SettingPanelProd";

export default function ProjectLayout({ children, params: { lng } }) {
  const title = "Projects";

  return (
    <section className={styles.wrapPage}>
      <div className={styles.wrapNavPage}>
        <SettingPanelProd lng={lng} title={title} />
      </div>
      {children}
    </section>
  );
}
