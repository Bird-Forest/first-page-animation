"use client";

import React, { useState } from "react";
import styles from "./Mentor.module.css";
import Image from "next/image";
import ellipse from "../../../../../public/images/mentor/ellipse-svg.svg";
import mentorMob from "../../../../../public/images/mentor/female-1w.webp";
import mentorDeck from "../../../../../public/images/mentor/female-2w.webp";
import OverlayModal from "../../_Modal/OverlayModal";
import { createPortal } from "react-dom";
import ModalMentor from "../../_Modal/ModalMentor";
import { useTranslation } from "@/app/i18n/client";

export default function Mentor({ lng }) {
  const { t } = useTranslation(lng);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.mentor}>
      <h2 className={styles.mentTitle}>{t("mentor_title")}</h2>
      <div className={styles.wrapMentor}>
        <div className={styles.wrap}>
          <div className={styles.imgWrap}>
            <Image
              alt="section mentor"
              src={ellipse}
              quality={100}
              fill={true}
              priority
            />
            <Image
              alt="section for mentor"
              src={mentorMob}
              className={styles.imgMob}
              quality={80}
              fill={true}
              style={{ padding: "40px" }}
              priority
            />
            <Image
              alt="section for mentor"
              src={mentorDeck}
              className={styles.imgDeck}
              quality={100}
              width={428}
              height={480}
              priority
            />
          </div>
          <div className={styles.shadow}>
            <p className={styles.mentText}>
              {t("mentor_text1")}
              <br />
              <span className={styles.empty} />
              {t("mentor_text2")}
              <br />
              <span className={styles.empty} />
              {t("mentor_text3")}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.wrapBtn}>
        <button onClick={openModal} className={styles.mentBtn}>
          {t("mentor_btn")}
        </button>
        {showModal &&
          createPortal(
            <OverlayModal
              closeModal={closeModal}
              content={<ModalMentor closeModal={closeModal} />}
            />,
            document.body
          )}
      </div>
    </section>
  );
}
