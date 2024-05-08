import React from "react";
import styles from "./History.module.css";
import { VscCircleFilled } from "react-icons/vsc";
<VscCircleFilled />;

export default function History() {
  return (
    <section className={styles.history}>
      <div className={styles.wrapTitle}>
        <h2 className={styles.histTitle}>Історія проєкту</h2>
        <p className={styles.histText}>
          Наш проєкт розпочався у квітні 2023 року з метою підтримки та
          професійного розвитку джунів та світчерів до сфери ІТ. За рік ми
          досягли значних успіхів:{" "}
        </p>
      </div>
      <div className={styles.wrapInfo}>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Квітень 2023:</h4>
          <p className={styles.blockText}>Старт проєкту Baza Trainee Ukraine</p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Серпень 2023:</h4>
          <p className={styles.blockText}>
            Перша тисяча заявок від учасників загалом на 17 різноманітних
            проєктів, 8 менторів
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Листопад 2023:</h4>
          <p className={styles.blockText}>
            Чотири лендінги з військових зборів закумулювали понад 200 тис грн,
            більше 50 працевлаштованих джунів{" "}
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Грудень 2023:</h4>
          <p className={styles.blockText}>
            Кількість учасників зросла до 1700. Успішно завершено 35 проєктів.
          </p>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitle}>Березень 2024:</h4>
          <p className={styles.blockText}>
            Під час нашої роботи ми спостерігаємо ускладнення рівню проєктів —
            від простих лендінгів до повноцінних сайтів з складними внутрішніми
            блоками
          </p>
        </div>
      </div>
    </section>
  );
}
