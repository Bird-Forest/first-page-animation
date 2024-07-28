"use client";

import React from "react";
import styles from "../_filesadmin/Admin.module.css";
import SettingPanelProd from "../_filesadmin/SettingPanelProd";

export default function PostsLayout({ children, params: { lng } }) {
  const title = "Posts";

  return (
    <section className={styles.wrapPage}>
      <div className={styles.wrapNavPage}>
        <SettingPanelProd lng={lng} title={title} />
      </div>
      {children}
    </section>
  );
}
