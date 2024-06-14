"use client";

import React, { useState } from "react";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import OverlayModal from "../_Modal/OverlayModal";
import ModalDonate from "../_Modal/ModalDonate";
import { createPortal } from "react-dom";

export default function AidButton() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const btnVariants = {
    hidden: {
      x: -1200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <motion.button
        className={styles.button}
        initial={"hidden"}
        animate={"visible"}
        transition={{ delay: 2.5, duration: 2 }}
        variants={btnVariants}
        onClick={openModal}
      >
        Підтримати проєкт
      </motion.button>
      {showModal &&
        createPortal(
          <OverlayModal
            closeModal={closeModal}
            content={<ModalDonate closeModal={closeModal} />}
          />,
          document.body
        )}
    </>
  );
}
