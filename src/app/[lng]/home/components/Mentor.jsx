"use client";

import React from "react";
import styles from "./Mentor.module.css";
import Image from "next/image";
import mentor from "../../../../image/mentor.jpg";

export default function Mentor() {
  return (
    <section className={styles.mentor}>
      <div className={styles.wrapMain}>
        <h2 className={styles.mentTitle}>Ментору</h2>
        <div className={styles.wrap}>
          <div className={styles.shadow}>
            <p className={styles.mentText}>
              Ментор - це колега на два рівні вищий за менторі, який слідкує за
              виконанням задач і допомагає порадою або роз`ясненням, коли
              учасник не впевнений в рішенні.
              <br />
              <div className={styles.empty} />
              Наші ментори - практики провідних ІТ-компаній України, які
              прагнуть підтримати новачків знаннями і розширити власні
              управлінські навички. <br />
              <div className={styles.empty} />
              На Baza Trainee Ukraine ментор направляє команду одразу з
              декількох осіб, спряючи їхньому професійному розвитку.
            </p>
          </div>
          <div className={styles.imgWrap}>
            <Image
              alt="section mentor"
              src={mentor}
              placeholder="blur"
              quality={100}
              fill
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapBtn}>
        <button className={styles.mentBtn}>Стати ментором</button>
      </div>
    </section>
  );
}
