"use client";

import React, { useState } from "react";
import styles from "./Project.module.css";
import { IoClose } from "react-icons/io5";
import ProjectTeam from "./ProjectTeam";
import ProjectCover from "./ProjectCover";

export default function ProjectItem({ item }) {
  const [showTeam, setShowTeam] = useState(false);

  const openTeamList = () => {
    setShowTeam(true);
  };
  const closeTeamList = () => {
    setShowTeam(false);
  };

  return (
    <li className={styles.wrapItem}>
      <ProjectCover item={item} showTeam={openTeamList} />
      {/* <div className={styles.wrapTeamBtn}>
        <button type="button" onClick={openTeamList} className={styles.teamBtn}>
          Команда проєкту
        </button>
      </div> */}

      <div className={`${styles.wrapTeam} ${showTeam ? styles.show : ""}`}>
        <button
          type="button"
          onClick={closeTeamList}
          className={styles.closeBtn}
        >
          <IoClose className={styles.close} />
        </button>
        <ProjectTeam item={item} />
      </div>
    </li>
  );
}

// imageUrl
