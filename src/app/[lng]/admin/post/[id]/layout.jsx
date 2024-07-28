import React from "react";
import PostNav from "../_filesadminpost/PostNav";
import styles from "../../_filesadmin/Admin.module.css";
import ItemNavigation from "../../_filesadmin/ItemNavigation";

export default function DynamicPostLayout({ children, params: { lng, id } }) {
  return (
    <div className={styles.wrapLayout}>
      <div className={styles.wrapNavPage}>
        <ItemNavigation lng={lng} id={id} />
        {/* <PostNav lng={lng} id={id} /> */}
      </div>
      {children}
    </div>
  );
}
