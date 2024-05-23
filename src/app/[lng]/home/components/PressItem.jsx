"use client";

import React from "react";
import styles from "./Press.module.css";
import Image from "next/image";
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

export const PressItem = forwardRef(function PressItem({ item }, ref) {
  return (
    <li ref={ref} className={styles.pressItem}>
      <motion.div
        custom={item.id}
        variants={imgAnimation}
        className={styles.front}
      >
        <div className={styles.imgWrap}>
          <Image
            alt="logo baza trainee"
            src={item.img}
            width={376}
            height={244}
            quality={100}
            style={{
              borderRadius: "10px",
            }}
            priority
          />
        </div>
      </motion.div>
      <motion.div
        custom={item.id}
        variants={textAnimation}
        className={styles.back}
      >
        <div className={styles.infoWrap}>
          <h4 className={styles.title}>{item.title}</h4>
          <p className={styles.text}>{item.text}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Читати матеріал
          </a>
        </div>
      </motion.div>
    </li>
  );
});
export const MPressItem = motion(PressItem);
