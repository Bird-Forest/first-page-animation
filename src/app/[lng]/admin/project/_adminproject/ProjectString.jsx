"use client";

import React, { useState } from "react";
import { BsGear } from "react-icons/bs";
import Link from "next/link";
import styles from "./ProjectAdm.module.css";
import { FaCircle } from "react-icons/fa";
import { createPortal } from "react-dom";
import Overlay from "../../../_Helper/Overlay";
import ProjectItem from "../../../projects/_filesproject/ProjectItem";

export default function ProjectString({ item, lng }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const state = item.status;
  return (
    <li className={styles.wrapStrProject}>
      <button type="button" onClick={openModal} className={styles.filterBtn}>
        <FaCircle className={styles.statusIcon} style={{ fill: state.color }} />
      </button>
      <div className={styles.wrapTitle}>
        <p className={styles.itemTitle}>{item.name}</p>
      </div>
      <Link
        href={`/${lng}/admin/project/${item._id}`}
        className={styles.filterBtn}
      >
        <BsGear className={styles.iconBtn} />
      </Link>
      {showModal &&
        createPortal(
          <Overlay
            closeModal={closeModal}
            content={<ProjectItem item={item} />}
          />,
          document.body
        )}
    </li>
  );
}
