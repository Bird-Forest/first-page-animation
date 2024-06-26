"use client";

import React, { useState } from "react";
import styles from "./Speciality.module.css";
import { specialities } from "./data/specialities";
import { v4 as uuidv4 } from "uuid";
import SpecialityItem from "./SpecialityItem";
import OverlayModal from "../../_Modal/OverlayModal";
import { createPortal } from "react-dom";
import MainButton from "../../_Helper/MainButton";
import { useTranslation } from "@/src/app/i18n/client";
import RulesParticipant from "./RulesParticipant";

export default function Speciality({ lng }) {
  const { t } = useTranslation(lng, "trainees");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.speciality}>
      <h2 className={styles.specialTitle}>{t("special_title")}</h2>
      <ul className={styles.wrapList}>
        {specialities.map((item) => (
          <SpecialityItem key={uuidv4()} item={item} lng={lng} />
        ))}
      </ul>
      <MainButton type="button" onClick={openModal}>
        {t("special_btn")}
      </MainButton>
      {showModal &&
        createPortal(
          <OverlayModal
            closeModal={closeModal}
            content={<RulesParticipant closeModal={closeModal} />}
          />,
          document.body
        )}
    </section>
  );
}
