"use client";

import React, { useState } from "react";
import styles from "./Questions.module.css";
import { v4 as uuidv4 } from "uuid";
// import questions from "./data/questions";
import QuestionItem from "./QuestionItem";
import { createPortal } from "react-dom";
import OverlayModal from "../../_Modal/OverlayModal";
import ModalDonate from "../../_Modal/ModalDonate";
import { useTranslation } from "@/app/i18n/client";
import { questions } from "./data/questions";
import MainButton from "../../_Helper/MainButton";

export default function Questions({ lng }) {
  const { t } = useTranslation(lng);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <section className={styles.question}>
      <h2 className={styles.questTitle}>FAQ</h2>
      <ul className={styles.wrapQuestions}>
        {questions.map((item) => {
          return <QuestionItem key={uuidv4()} item={item} lng={lng} />;
        })}
      </ul>
      <MainButton onClick={openModal}>{t("quest_btn")}</MainButton>
      {showModal &&
        createPortal(
          <OverlayModal
            closeModal={closeModal}
            content={<ModalDonate closeModal={closeModal} />}
          />,
          document.body
        )}
    </section>
  );
}
