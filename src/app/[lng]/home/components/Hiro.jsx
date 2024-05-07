import React from "react";
import Image from "next/image";
import styles from "./Hiro.module.css";
import { v4 as uuidv4 } from "uuid";
// import { motion } from "framer-motion";
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

export default function Hiro() {
  // const arrVariants = {
  //   visible: (i) => ({
  //     opacity: 1,
  //     transition: {
  //       delay: i * 2,
  //       duration: 2,
  //     },
  //   }),
  //   hidden: {
  //     opacity: 0,
  //   },
  // };

  return (
    <section className={styles.hiroSection}>
      <ul>
        {pictures.map((el, i) => {
          return (
            <li
              key={uuidv4()}
              // variants={arrVariants}
              // initial="hidden"
              // animate="visible"
              // custom={i}
              className={styles.bgWrap}
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
            </li>
          );
        })}
      </ul>
      <div className={styles.hiroWrap}>
        <h1 className={styles.hiroTitle}>Baza Trainee Ukraine</h1>
        <p className={styles.hiroText}>
          Громадська організація,яка має на меті отримання першого досвіду
          роботи тими, хто починає свій шлях в ІТ
        </p>
      </div>
    </section>
  );
}
