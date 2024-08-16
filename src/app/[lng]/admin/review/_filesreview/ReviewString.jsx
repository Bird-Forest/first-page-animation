"use client";

import React, { useState } from "react";
import styles from "./Review.module.css";
// import { format } from "date-fns";
import { BsPerson, BsGear, BsCircleFill } from "react-icons/bs";
import Link from "next/link";
import Overlay from "../../../_Helper/Overlay";
import { createPortal } from "react-dom";
import ReviewOverlay from "./ReviewOverlay";

export default function ReviewString({ item, lng }) {
  const [showModal, setShowModal] = useState(false);
  // const date = format(new Date(item.createdAt), "yyyy-MM-dd");
  // const dateNow = new Date();
  const date = item.createdAt.slice(0, 10);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <li className={styles.wrapStrReview}>
      <div className={styles.reviewDate}>{date}</div>
      <div className={styles.wrapRevName}>
        <BsCircleFill
          className={styles.revIvonStatus}
          style={
            item.status === false ? { fill: "#ff1744" } : { fill: "#099e56" }
          }
        />
        <p className={styles.revName}>{item.name}</p>
      </div>
      <button type="button" onClick={openModal} className={styles.revBtn}>
        <BsPerson className={styles.iconSetting} />
      </button>
      {showModal &&
        createPortal(
          <Overlay
            closeModal={closeModal}
            content={<ReviewOverlay item={item} />}
          />,
          document.body
        )}

      <Link href={`/${lng}/admin/review/${item._id}`} className={styles.revBtn}>
        <BsGear className={styles.iconSetting} />
      </Link>
    </li>
  );
}
