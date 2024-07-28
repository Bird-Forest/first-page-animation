import React from "react";
import styles from "../../_filesadmin/Admin.module.css";
import ItemNavigation from "../../_filesadmin/ItemNavigation";

export default function DynamicDeveloperLayout({
  children,
  params: { lng, id },
}) {
  return (
    <div className={styles.wrapLayout}>
      <div className={styles.wrapNavPage}>
        <ItemNavigation lng={lng} id={id} />
      </div>
      {children}
    </div>
  );
}
