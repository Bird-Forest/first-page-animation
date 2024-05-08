"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import hiro1 from "../../../../image/hiro-1.jpg";
import hiro2 from "../../../../image/hiro-2.jpg";
import hiro3 from "../../../../image/hiro-3.jpg";
import hiro4 from "../../../../image/hiro-4.jpg";
import hiro5 from "../../../../image/hiro-5.jpg";

const pictures = [
  { path: hiro1 },
  { path: hiro2 },
  { path: hiro3 },
  { path: hiro4 },
  { path: hiro5 },
];

export default function Hero() {
  const blurVariants = {
    start: {
      backdropFilter: "blur(2px)",
    },
    end: {
      backdropFilter: [
        "blur(2px)",
        "blur(1px)",
        "blur(1px)",
        "blur(1px)",
        "blur(1px)",
        "blur(1px)",
        "blur(1px)",
        "blur(1px)",
        "blur(2px)",
      ],
    },
  };

  const imgVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 10,
        duration: 5,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section className={styles.hero}>
      <ul className={styles.bgWrap}>
        {pictures.map((el, i) => {
          return (
            <motion.li
              key={uuidv4()}
              variants={imgVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <Image
                alt="section hero"
                src={el.path}
                placeholder="blur"
                quality={100}
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                }}
                priority
              />
            </motion.li>
          );
        })}
      </ul>
      <motion.div
        className={styles.hiroBlur}
        initial={"start"}
        animate={"end"}
        transition={{ delay: 5, duration: 10, repeat: 4 }}
        variants={blurVariants}
      >
        <div className={styles.hiroWrap}>
          <h1 className={styles.hiroTitle}>Baza Trainee Ukraine</h1>
          <p className={styles.hiroText}>
            Громадська організація,яка має на меті отримання першого досвіду
            роботи тими, хто починає свій шлях в ІТ
          </p>
        </div>
      </motion.div>
    </section>
  );
}
