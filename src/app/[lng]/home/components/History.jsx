"use client";

import React from "react";
import styles from "./History.module.css";
import { motion } from "framer-motion";
import { VscCircleFilled } from "react-icons/vsc";
<VscCircleFilled />;

const boxAnimation = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};

export default function History() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className={styles.history}
    >
      <div className={styles.wrapTitle}>
        <motion.h2
          variants={boxAnimation}
          custom={1}
          className={styles.histTitle}
        >
          Історія проєкту
        </motion.h2>
        <motion.p
          variants={boxAnimation}
          custom={2}
          className={styles.histText}
        >
          Наш проєкт розпочався у квітні 2023 року з метою підтримки та
          професійного розвитку джунів та світчерів до сфери ІТ. За рік ми
          досягли значних успіхів:
        </motion.p>
      </div>
      <div className={styles.wrapInfo}>
        <div className={`${styles.block} itemA`}>
          <h4 className={styles.titleLeft}>Квітень 2023:</h4>
          <p className={styles.textLeft}>Старт проєкту Baza Trainee Ukraine</p>
        </div>
        <div className={`${styles.wrapLine} itemS`}>
          <div className={styles.icon} />
          <div className={styles.line} />
        </div>
        <div className={styles.empty}></div>

        <div className={styles.empty}></div>
        <div className={`${styles.wrapLine} itemT`}>
          <div className={styles.icon} />
          <div className={styles.line} />
        </div>
        <div className={`${styles.block} itemB`}>
          <h4 className={styles.titleRight}>Серпень 2023:</h4>
          <p className={styles.textRight}>
            Перша тисяча заявок від учасників загалом на 17 різноманітних
            проєктів, 8 менторів
          </p>
        </div>

        <div className={`${styles.block} itemC`}>
          <h4 className={styles.titleLeft}>Листопад 2023:</h4>
          <p className={styles.textLeft}>
            Чотири лендінги з військових зборів закумулювали понад 200 тис грн,
            більше 50 працевлаштованих джунів
          </p>
        </div>
        <div className={`${styles.wrapLine} itemR`}>
          <div className={styles.icon} />
          <div className={styles.line} />
        </div>
        <div className={styles.empty}></div>

        <div className={styles.empty}></div>
        <div className={`${styles.wrapLine} itemX`}>
          <div className={styles.icon} />
          <div className={styles.line} />
        </div>
        <div className={`${styles.block} itemD`}>
          <h4 className={styles.titleRight}>Грудень 2023:</h4>
          <p className={styles.textRight}>
            Кількість учасників зросла до 1700. Успішно завершено 35 проєктів.
          </p>
        </div>

        <div className={`${styles.block} itemF`}>
          <h4 className={styles.titleLeft}>Березень 2024:</h4>
          <p className={styles.textLeft}>
            Під час нашої роботи ми спостерігаємо ускладнення рівню проєктів —
            від простих лендінгів до повноцінних сайтів з складними внутрішніми
            блоками
          </p>
        </div>
        <div className={`${styles.wrapLine} itemY`}>
          <div className={styles.icon} />
        </div>
        <div className={styles.empty}></div>
      </div>
    </motion.section>
  );
}
