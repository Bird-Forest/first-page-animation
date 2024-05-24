"use client";

import React from "react";
import styles from "./Partners.module.css";
import { partners } from "./data/partners";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { motion } from "framer-motion";

const titlelAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1 },
  },
};

const cardlAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 1 },
  }),
};

export default function Partners() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "200px", amount: 0.3, once: true }}
      className={styles.partners}
    >
      <motion.h3
        // custom={1}
        variants={titlelAnimation}
        className={styles.partnerTitle}
      >
        Партнери
      </motion.h3>
      <ul className={styles.partnersList}>
        {partners.map((item) => (
          <motion.li
            custom={item.id}
            variants={cardlAnimation}
            key={uuidv4()}
            className={styles.partnerItem}
          >
            <Image
              alt="section partners"
              src={item.path}
              width={360}
              height={180}
              quality={100}
              style={{ borderRadius: "10px" }}
              priority
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
