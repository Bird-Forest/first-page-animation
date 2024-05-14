"use client";

import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import styles from "./Header.module.css";
import Navigate from "./Navigate";

export default function Menu({ links, lng }) {
  const [isMenu, setIsMenu] = useState(false);

  const onMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className={styles.wrapMenu}>
      <button type="button" onClick={onMenu} className={styles.menuBtn}>
        <TfiMenu className={styles.iconMenu} />
      </button>
      <div
        className={styles.wrapNav}
        style={{
          zIndex: isMenu ? "2" : "0",
        }}
      >
        <Navigate links={links} lng={lng} />
      </div>
    </div>
  );
}
