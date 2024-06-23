"use client";

import React from "react";
import styles from "./History.module.css";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

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
    transition: { duration: 2.5, delay: custom * 2 },
  }),
};

export default function History({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3, once: true }}
      className={styles.history}
    >
      <div className={styles.wrapTitle}>
        <motion.h2
          variants={leftAnimation}
          custom={1}
          className={styles.histTitle}
        >
          {t("history_title")}
        </motion.h2>
        <motion.p
          variants={rightAnimation}
          custom={2}
          className={styles.histText}
        >
          {t("history_subtitle")}
        </motion.p>
      </div>
      <div className={styles.wrapInfo}>
        <div className={`${styles.block} itemA`}>
          <motion.h4
            variants={leftAnimation}
            custom={3}
            className={styles.titleLeft}
          >
            {t("history_date1")}
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={4}
            className={styles.textLeft}
          >
            {t("history_text1")}
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
            {t("history_date2")}
          </motion.h4>
          <motion.p
            variants={rightAnimation}
            custom={6}
            className={styles.textRight}
          >
            {t("history_text2")}
          </motion.p>
        </div>

        <div className={`${styles.block} itemC`}>
          <motion.h4
            variants={leftAnimation}
            custom={7}
            className={styles.titleLeft}
          >
            {t("history_date3")}
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={8}
            className={styles.textLeft}
          >
            {t("history_text3")}
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
            {t("history_date4")}
          </motion.h4>
          <motion.p
            variants={rightAnimation}
            custom={10}
            className={styles.textRight}
          >
            {t("history_text4")}
          </motion.p>
        </div>

        <div className={`${styles.block} itemF`}>
          <motion.h4
            variants={leftAnimation}
            custom={11}
            className={styles.titleLeft}
          >
            {t("history_date5")}
          </motion.h4>
          <motion.p
            variants={leftAnimation}
            custom={12}
            className={styles.textLeft}
          >
            {t("history_text5")}
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
