"use client";

import React from "react";
import styles from "./Structure.module.css";
import Image from "next/image";
import logo from "../../../../image/logo.svg";
import skill from "../../../../image/skill.svg";
import educate from "../../../../image/educate.svg";
import { delay, motion } from "framer-motion";

const itemAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 2, duration: 1 },
  }),
};

export default function Structure() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3 }}
      className={styles.structure}
    >
      <motion.h2
        variants={itemAnimation}
        custom={1}
        className={styles.structTitle}
      >
        Наша структура
      </motion.h2>
      <div className={styles.structWrap}>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            cuctom={2}
            className={styles.imgWrap}
          >
            <Image
              alt="logo baza trainee"
              src={logo}
              width={120}
              height={120}
              quality={100}
              priority
            />
          </motion.div>
          <motion.div
            variants={itemAnimation}
            custom={3}
            className={styles.itemInfo}
          >
            <h4 className={styles.itemTitle}>BAZA TRAINEE UKRAINE</h4>
            <p className={styles.itemText}>
              Громадський проєкт для джуніорів і світчерів ІТ, який побудований
              на створенні цифрових проєктів для соціальної сфери України
            </p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={2}
            className={styles.imgWrap}
          >
            <Image
              alt="logo baza skill"
              src={skill}
              width={296}
              height={120}
              quality={100}
              priority
            />
          </motion.div>
          <motion.div
            variants={itemAnimation}
            cuctom={3}
            className={styles.itemInfo}
          >
            <h4 className={styles.itemTitle}>BAZA SKILL</h4>
            <p className={styles.itemText}>
              Власна рекрутингова агенція для наших випускників. База даних
              перевірених джунів з досвідом командної розробки
            </p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={4}
            className={styles.imgWrap}
          >
            <Image
              alt="logo baza educat"
              src={educate}
              width={296}
              height={120}
              quality={100}
              priority
            />
          </motion.div>
          <motion.div
            variants={itemAnimation}
            cuctom={5}
            className={styles.itemInfo}
          >
            <h4 className={styles.itemTitle}>BAZA EDUCAT</h4>
            <p className={styles.itemText}>
              Учбові курси різних рівнів складності для розробників, де навчають
              спільній роботі і командній розробці. Додай софт скіли до
              технічних знань і отримай додаткову підтримку на ринку праці
            </p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={4}
            className={styles.imgWrap}
          >
            <Image
              alt="logo baza poligon"
              src={logo}
              width={120}
              height={120}
              quality={100}
              priority
            />
          </motion.div>
          <motion.div
            variants={itemAnimation}
            custom={5}
            className={styles.itemInfo}
          >
            <h4 className={styles.itemTitle}>BAZA POLIGON</h4>
            <p className={styles.itemText}>
              Веб агенція для малого і середнього бізнесу. Створені в 2023 в
              Україні і для України.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
