"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Questions.module.css";

export default function QuestionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  // const [indx, setIndx] = useState(null);

  // const handleChange = (evt) => {
  //   console.log(evt.currentTarget.name);
  //   let id = evt.currentTarget.name;
  //   // setIsShow(!isShow);
  //   if (id === indx) {
  //     setIndx(null);
  //   } else {
  //     setIndx(id);
  //   }
  // };
  return (
    <li className={styles.wrapItem}>
      <button
        type="button"
        name={item.id}
        onClick={toggleAccordion}
        className={styles.wrapTitle}
      >
        {item.title}
        {isOpen ? (
          <FaMinus className={styles.icon} />
        ) : (
          <FaPlus className={styles.icon} />
        )}
      </button>
      {isOpen && <p className={styles.wrapText}>{item.text}</p>}
    </li>
  );
}
