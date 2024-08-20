"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Questions.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "@/src/app/i18n/client";

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const wordVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function QuestionItem({ item, lng }) {
  const { t } = useTranslation(lng);
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  // let sentence = item.text;
  // let words = sentence.split(" ");

  return (
    <li className={styles.wrapItem}>
      <button
        type="button"
        name={item.id}
        onClick={toggleAccordion}
        className={styles.wrapTitle}
      >
        {t(item.title)}
        {isOpen ? (
          <FaMinus className={styles.icon} />
        ) : (
          <FaPlus className={styles.icon} />
        )}
      </button>
      {isOpen && (
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          className={styles.wrapText}
        >
          {t(item.text)
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={styles.text}
              >
                {word}
              </motion.span>
            ))}
        </motion.div>
      )}
    </li>
  );
}
