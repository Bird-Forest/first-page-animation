"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { pictures } from "./data/hero";

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
