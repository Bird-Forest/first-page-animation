"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import hiro1 from "../../../../../public/images/hero/hiro-1.jpg";
import hiro2 from "../../../../../public/images/hero/hiro-2.jpg";
import hiro3 from "../../../../../public/images/hero/hiro-3.jpg";
import hiro4 from "../../../../../public/images/hero/hiro-4.jpg";
import hiro5 from "../../../../../public/images/hero/hiro-5.jpg";

const pictures = [
  { path: hiro1 },
  { path: hiro2 },
  { path: hiro3 },
  { path: hiro4 },
  { path: hiro5 },
];

export default function Hero() {
  const imgVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 3,
        duration: 3,
      },
    }),
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
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
        <div className={styles.hiroBlur}>
          <div className={styles.hiroWrap}>
            <h1 className={styles.hiroTitle}>Baza Trainee Ukraine</h1>
            <p className={styles.hiroText}>
              Громадська організація,яка має на меті отримання першого досвіду
              роботи тими, хто починає свій шлях в ІТ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
