"use client";

import React from "react";
import styles from "./Speciality.module.css";
import { specialities } from "./data/specialities";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { MSpecialityItem } from "./SpecialityItem";

const pressAnimation = {
  start: {
    opacity: 0,
  },
  end: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 1, duration: 2 },
  }),
};

export default function Speciality() {
  return (
    <motion.section
      initial="start"
      whileInView="end"
      viewport={{ margin: "-150px", amount: 0.05, once: true }}
      className={styles.speciality}
    >
      <h2 className={styles.specialTitle}>Запрошуємо до участі</h2>
      <motion.ul className={styles.wrapList}>
        {specialities.map((item) => (
          <MSpecialityItem
            variants={pressAnimation}
            custom={item.id}
            key={uuidv4()}
            item={item}
          />
        ))}
      </motion.ul>
    </motion.section>
  );
}
