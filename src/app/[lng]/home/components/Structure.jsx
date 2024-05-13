"use client";

import React from "react";
import styles from "./Structure.module.css";
import Image from "next/image";
import logo from "../../../../image/logo.svg";
import skill from "../../../../image/skill.svg";
import educate from "../../../../image/educate.svg";

export default function Structure() {
  return (
    <section className={styles.structure}>
      <h2 className={styles.structTitle}>Наша структура</h2>
      <div className={styles.structWrap}>
        <div className={styles.wrapItem}>
          <div className={styles.imgWrap}>
            <Image
              alt="logo baza trainee"
              src={logo}
              width={120}
              height={120}
              //   placeholder="blur"
              quality={100}
              priority
            />
          </div>
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>BAZA TRAINEE UKRAINE</h4>
            <p className={styles.itemText}>
              Громадський проєкт для джуніорів і світчерів ІТ, який побудований
              на створенні цифрових проєктів для соціальної сфери України
            </p>
          </div>
        </div>
        <div className={styles.wrapItem}>
          <div className={styles.imgWrap}>
            <Image
              alt="logo baza skill"
              src={skill}
              width={296}
              height={120}
              //   placeholder="blur"
              quality={100}
              //   fill
              //   style={{
              //     objectFit: "cover",
              //   }}
              priority
            />
          </div>
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>BAZA SKILL</h4>
            <p className={styles.itemText}>
              Власна рекрутингова агенція для наших випускників. База даних
              перевірених джунів з досвідом командної розробки
            </p>
          </div>
        </div>
        <div className={styles.wrapItem}>
          <div className={styles.imgWrap}>
            <Image
              alt="logo baza educat"
              src={educate}
              width={296}
              height={120}
              //   placeholder="blur"
              quality={100}
              //   fill
              style={{
                stroke: "rgb(226, 185, 213)",
              }}
              priority
            />
          </div>
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>BAZA EDUCAT</h4>
            <p className={styles.itemText}>
              Учбові курси різних рівнів складності для розробників, де навчають
              спільній роботі і командній розробці. Додай софт скіли до
              технічних знань і отримай додаткову підтримку на ринку праці
            </p>
          </div>
        </div>
        <div className={styles.wrapItem}>
          <div className={styles.imgWrap}>
            <Image
              alt="logo baza poligon"
              src={logo}
              width={120}
              height={120}
              //   placeholder="blur"
              quality={100}
              //   fill
              //   style={{
              //     objectFit: "cover",
              //   }}
              priority
            />
          </div>
          <div className={styles.itemInfo}>
            <h4 className={styles.itemTitle}>BAZA POLIGON</h4>
            <p className={styles.itemText}>
              Веб агенція для малого і середнього бізнесу. Створені в 2023 в
              Україні і для України.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
