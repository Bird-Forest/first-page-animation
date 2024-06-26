"use client";

import React, { useState } from "react";
import styles from "./Speciality.module.css";
import { specialities } from "./data/specialities";
import { v4 as uuidv4 } from "uuid";
import SpecialityItem from "./SpecialityItem";
import OverlayModal from "../../_Modal/OverlayModal";
import ModalTrainee from "../../_Modal/ModalTrainee";
import { useTranslation } from "@/app/i18n/client";
import { createPortal } from "react-dom";
import MainButton from "../../_Helper/MainButton";

export default function Speciality() {
  // const { t } = useTranslation(lng);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <section className={styles.speciality}>
      <h2 className={styles.specialTitle}>Запрошуємо до участі</h2>
      <ul className={styles.wrapList}>
        {specialities.map((item) => (
          <SpecialityItem key={uuidv4()} item={item} />
        ))}
      </ul>
      <MainButton onClick={openModal}>Save</MainButton>

      {/* {showModal &&
        createPortal(
          <OverlayModal
            closeModal={closeModal}
            content={<ModalTrainee closeModal={closeModal} />}
          />,
          document.body
        )} */}
    </section>
  );
}
