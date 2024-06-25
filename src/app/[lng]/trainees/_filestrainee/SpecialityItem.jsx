"use client";

import React from "react";
import styles from "./Speciality.module.css";
import Image from "next/image";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const imgAnimation = {
  start: {
    opacity: 1,
    perspective: 0,
    rotateY: 0,
  },
  end: (custom) => ({
    opacity: 0,
    perspective: "380px",
    rotateY: 180,
    transition: { duration: 2, delay: custom * 3 },
  }),
};
const textAnimation = {
  start: {
    opacity: 0,
    perspective: "380px",
    rotateY: 180,
  },
  end: (custom) => ({
    opacity: 1,
    perspective: 0,
    rotateY: 0,
    transition: { duration: 2, delay: custom * 3 },
  }),
};

const SpecialityItem = forwardRef(function SpecialityItem({ item }, ref) {
  return (
    <li ref={ref} className={styles.wrapItem}>
      <motion.div
        custom={item.id}
        variants={imgAnimation}
        className={styles.wrapFront}
      >
        <div className={styles.wrapImg}>
          <Image
            alt={item.title}
            src={item.img}
            width={384}
            height={274}
            quality={100}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
            priority
          />
        </div>
        <div className={styles.wrapTitle}>
          <h4 className={styles.itemTitle}>{item.title}</h4>
          <TbArrowBigRightLines className={styles.icon} />
        </div>
      </motion.div>
      <motion.div
        custom={item.id}
        variants={textAnimation}
        className={styles.wrapBack}
      >
        <TbArrowBigLeftLines className={styles.icon} />
        <div className={styles.wrapInfo}>
          <p className={styles.itemText}>{item.text1}</p>
          <p className={styles.itemText}>{item.text2}</p>
        </div>
      </motion.div>
    </li>
  );
});
export const MSpecialityItem = motion(SpecialityItem);
