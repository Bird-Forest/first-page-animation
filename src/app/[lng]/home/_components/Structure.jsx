"use client";

import React from "react";
import styles from "./Structure.module.css";
import Image from "next/image";
import logo from "../../../../../public/baza/logo.svg";
import skill from "../../../../../public/baza/skill.svg";
import educate from "../../../../../public/baza/educate.svg";
import { delay, motion } from "framer-motion";
import { useTranslation } from "@/app/i18n/client";

const itemAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 1, duration: 1 },
  }),
};

export default function Structure({ lng }) {
  const { t } = useTranslation(lng);
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3, once: true }}
      className={styles.structure}
    >
      <motion.h2
        variants={itemAnimation}
        custom={1}
        className={styles.structTitle}
      >
        {t("struct_title")}
      </motion.h2>
      <div className={styles.structWrap}>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={3}
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
          <motion.div className={styles.itemInfo}>
            <motion.h4
              variants={itemAnimation}
              custom={4}
              className={styles.itemTitle}
            >
              BAZA TRAINEE UKRAINE
            </motion.h4>
            <motion.p
              variants={itemAnimation}
              custom={5}
              className={styles.itemText}
            >
              {t("struct_text1")}
              {/* Громадський проєкт для джуніорів і світчерів ІТ, який побудований
              на створенні цифрових проєктів для соціальної сфери України */}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={6}
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
          <motion.div className={styles.itemInfo}>
            <motion.h4
              variants={itemAnimation}
              custom={7}
              className={styles.itemTitle}
            >
              BAZA SKILL
            </motion.h4>
            <motion.p
              variants={itemAnimation}
              custom={8}
              className={styles.itemText}
            >
              {t("struct_text2")}
              {/* Власна рекрутингова агенція для наших випускників. База даних
              перевірених джунів з досвідом командної розробки */}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={9}
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
          <motion.div className={styles.itemInfo}>
            <motion.h4
              variants={itemAnimation}
              custom={10}
              className={styles.itemTitle}
            >
              BAZA EDUCAT
            </motion.h4>
            <motion.p
              variants={itemAnimation}
              custom={11}
              className={styles.itemText}
            >
              {t("struct_text3")}
              {/* Учбові курси різних рівнів складності для розробників, де навчають
              спільній роботі і командній розробці. Додай софт скіли до
              технічних знань і отримай додаткову підтримку на ринку праці */}
            </motion.p>
          </motion.div>
        </div>
        <div className={styles.wrapItem}>
          <motion.div
            variants={itemAnimation}
            custom={12}
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
          <motion.div className={styles.itemInfo}>
            <motion.h4
              variants={itemAnimation}
              custom={13}
              className={styles.itemTitle}
            >
              BAZA POLIGON
            </motion.h4>
            <motion.p
              variants={itemAnimation}
              custom={14}
              className={styles.itemText}
            >
              {t("struct_text4")}
              {/* Веб агенція для малого і середнього бізнесу. Створені в 2023 в
              Україні і для України. */}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
