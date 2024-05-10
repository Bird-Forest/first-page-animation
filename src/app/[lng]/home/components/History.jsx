"use client";

import React from "react";
import styles from "./History.module.css";
import { motion } from "framer-motion";

const leftAnimation = {
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

const rightAnimation = {
  hidden: {
    x: 1000,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};

const lineAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { duration: 2.5, delay: custom * 2.5 },
  }),
};

export default function History() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3 }}
      className={styles.history}
    >
      <div className={styles.wrapTitle}>
        <motion.h2
          variants={leftAnimation}
          custom={1}
          className={styles.histTitle}
        >
          Історія проєкту
        </motion.h2>
        <motion.p
          variants={rightAnimation}
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
          <motion.h4
            variants={leftAnimation}
            custom={3}
            className={styles.titleLeft}
          >
            Квітень 2023:
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={4}
            className={styles.textLeft}
          >
            Старт проєкту Baza Trainee Ukraine
          </motion.p>
        </div>
        <div className={`${styles.wrapLine} itemS`}>
          <div className={styles.icon} />
          <motion.div
            variants={lineAnimation}
            custom={1}
            className={styles.line}
          />
        </div>
        <div className={styles.empty}></div>

        <div className={styles.empty}></div>
        <div className={`${styles.wrapLine} itemT`}>
          <div className={styles.icon} />
          <motion.div
            variants={lineAnimation}
            custom={2}
            className={styles.line}
          />
        </div>
        <div className={`${styles.block} itemB`}>
          <motion.h4
            variants={rightAnimation}
            custom={5}
            className={styles.titleRight}
          >
            Серпень 2023:
          </motion.h4>
          <motion.p
            variants={rightAnimation}
            custom={6}
            className={styles.textRight}
          >
            Перша тисяча заявок від учасників загалом на 17 різноманітних
            проєктів, 8 менторів
          </motion.p>
        </div>

        <div className={`${styles.block} itemC`}>
          <motion.h4
            variants={leftAnimation}
            custom={7}
            className={styles.titleLeft}
          >
            Листопад 2023:
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={8}
            className={styles.textLeft}
          >
            Чотири лендінги з військових зборів закумулювали понад 200 тис грн,
            більше 50 працевлаштованих джунів
          </motion.p>
        </div>
        <div className={`${styles.wrapLine} itemR`}>
          <div className={styles.icon} />
          <motion.div
            variants={lineAnimation}
            custom={3}
            className={styles.line}
          />
        </div>
        <div className={styles.empty}></div>

        <div className={styles.empty}></div>
        <div className={`${styles.wrapLine} itemX`}>
          <div className={styles.icon} />
          <motion.div
            variants={lineAnimation}
            custom={4}
            className={styles.line}
          />
        </div>
        <div className={`${styles.block} itemD`}>
          <motion.h4
            variants={rightAnimation}
            custom={9}
            className={styles.titleRight}
          >
            Грудень 2023:
          </motion.h4>
          <motion.p
            variants={rightAnimation}
            custom={10}
            className={styles.textRight}
          >
            Кількість учасників зросла до 1700. Успішно завершено 35 проєктів.
          </motion.p>
        </div>

        <div className={`${styles.block} itemF`}>
          <motion.h4
            variants={leftAnimation}
            custom={11}
            className={styles.titleLeft}
          >
            Березень 2024:
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={12}
            className={styles.textLeft}
          >
            Під час нашої роботи ми спостерігаємо ускладнення рівню проєктів —
            від простих лендінгів до повноцінних сайтів
          </motion.p>
        </div>
        <div className={`${styles.wrapLine} itemY`}>
          <div className={styles.icon} />
        </div>
        <div className={styles.empty}></div>
      </div>
    </motion.section>
  );
}
