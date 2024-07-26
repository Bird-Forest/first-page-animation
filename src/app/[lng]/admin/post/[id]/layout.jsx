import React from "react";
import PostNav from "../_filesadminpost/PostNav";
import styles from "../../_filesadmin/Admin.module.css";

export default function DynamicPostLayout({ children, params: { lng, id } }) {
  return (
    <div className={styles.wrapLayout}>
      <div className={styles.wrapNavPage}>
        <PostNav lng={lng} id={id} />
      </div>
      {children}
    </div>
  );
}
