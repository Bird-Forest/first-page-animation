"use client";

import React, { useState } from "react";
import styles from "./Advantages.module.css";
import AdvantItem from "./AdvantItem";
import { v4 as uuidv4 } from "uuid";
import OverlayModal from "../../_Modal/OverlayModal";
import ModalTrainee from "../../_Modal/ModalTrainee";
import { createPortal } from "react-dom";
import { advantages } from "./data/advantages";
import MainButton from "../../_Helper/MainButton";
import { useTranslation } from "@/src/app/i18n/client";
import { createDeveloper } from "@/src/app/services/developers";

export default function Advantages({ lng }) {
  const { t } = useTranslation(lng, "trainees");
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.advant}>
      <h2 className={styles.advantTitle}>{t("advant_title")}</h2>
      <ul className={styles.wrapList}>
        {advantages.map((item) => (
          <AdvantItem key={uuidv4()} item={item} lng={lng} />
        ))}
      </ul>
      <MainButton type="button" onClick={openModal}>
        {t("advant_btn")}
      </MainButton>
      {showModal &&
        createPortal(
          <OverlayModal
            title={t("trainee_title")}
            closeModal={closeModal}
            content={<ModalTrainee formAction={createDeveloper} lng={lng} />}
          />,
          document.body
        )}
    </section>
  );
}
