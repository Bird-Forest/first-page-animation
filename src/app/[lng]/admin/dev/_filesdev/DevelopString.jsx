"use client";

import React, { useState } from "react";
import styles from "../_filesdev/Develop.module.css";
import { BsPerson, BsPersonGear } from "react-icons/bs";
import Link from "next/link";
import Overlay from "../../../_Helper/Overlay";
import DevelopItem from "./DevelopItem";
import { createPortal } from "react-dom";

export default function DevelopString({ item, lng }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <li className={styles.wrapStrDev}>
      <dev className={styles.wrapDevName}>
        <p className={styles.devName}>{`${item.last + " " + item.first}`}</p>
      </dev>
      <button type="button" onClick={openModal} className={styles.itemBtn}>
        <BsPerson className={styles.iconBtn} />
      </button>
      {showModal &&
        createPortal(
          <Overlay
            closeModal={closeModal}
            content={<DevelopItem item={item} />}
          />,
          document.body
        )}
      <Link href={`/${lng}/admin/dev/${item._id}`} className={styles.itemBtn}>
        <BsPersonGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
