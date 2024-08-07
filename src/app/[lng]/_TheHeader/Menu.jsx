"use client";

import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import styles from "./Header.module.css";
import NavHeader from "./NavHeader";

export default function Menu({ lng }) {
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
          zIndex: isMenu ? "2" : "-1",
          top: isMenu ? "80px" : "0",
        }}
      >
        <NavHeader lng={lng} />
      </div>
    </div>
  );
}
