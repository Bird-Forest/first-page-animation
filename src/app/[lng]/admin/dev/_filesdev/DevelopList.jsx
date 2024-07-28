"use client";

import React from "react";
import Loading from "../../../_Helper/Loading";
import DevelopString from "./DevelopString";
import { v4 as uuidv4 } from "uuid";
import styles from "./Develop.module.css";
import { useFormStatus } from "react-dom";
import { BsPersonCheck, BsPersonX, BsPeople } from "react-icons/bs";

export default function DevelopList({ lng, devs }) {
  const { pending } = useFormStatus();
  return (
    <dev className={styles.wrapFilterList}>
      <div className={styles.filter}>
        <div className={styles.wrapSearch}>
          <input
            className={styles.inputSearch}
            placeholder="пошук за спеціальніст’ю"
          />
          <button className={styles.filterBtn}>
            <BsPeople className={styles.iconBtn} />
          </button>
          <button className={styles.filterBtn}>
            <BsPersonX className={styles.iconBtn} />
          </button>
        </div>
        <div className={styles.wrapSearch}>
          <input
            className={styles.inputSearch}
            placeholder="пошук за прізвищем"
          />
          <button className={styles.filterBtn}>
            <BsPersonCheck className={styles.iconBtn} />
          </button>
          <button className={styles.filterBtn}>
            <BsPersonX className={styles.iconBtn} />
          </button>
        </div>
      </div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          devs.map((item) => (
            <DevelopString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </dev>
  );
}
