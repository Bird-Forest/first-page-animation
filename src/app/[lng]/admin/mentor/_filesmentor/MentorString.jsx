"use client";

import React, { useState } from "react";
import styles from "./MentorAdm.module.css";
import Overlay from "../../../_Helper/Overlay";
import MentorItem from "./MentorItem";
import Link from "next/link";
import { BsPerson, BsPersonGear } from "react-icons/bs";
import { createPortal } from "react-dom";

export default function MentorString({ item, lng }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <li className={styles.wrapStrMent}>
      <dev className={styles.wrapMentName}>
        <p className={styles.mentName}>{`${item.last + " " + item.first}`}</p>
      </dev>
      <button type="button" onClick={openModal} className={styles.itemBtn}>
        <BsPerson className={styles.iconBtn} />
      </button>
      {showModal &&
        createPortal(
          <Overlay
            closeModal={closeModal}
            content={<MentorItem item={item} />}
          />,
          document.body
        )}
      <Link
        href={`/${lng}/admin/mentor/${item._id}`}
        className={styles.itemBtn}
      >
        <BsPersonGear className={styles.iconBtn} />
      </Link>
    </li>
  );
}
