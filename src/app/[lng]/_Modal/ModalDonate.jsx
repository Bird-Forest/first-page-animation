"use client";

import React, { useState } from "react";
import styles from "./Modal.module.css";
import { IoClose } from "react-icons/io5";
import hrn from "../../../../public/images/modal/hrn.svg";
import Image from "next/image";

export default function ModalDonate({ closeModal }) {
  const [sum, setSum] = useState(0);

  const chooseSum = (evt) => {
    setSum(evt.currentTarget.value);
  };

  const onPayment = (evt) => {
    evt.preventDefault();

    console.log("Submit");
  };
  return (
    <div className={styles.wrapModal} onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <IoClose className={styles.close} />
      </button>
      <form onSubmit={onPayment} className={styles.modalDonate}>
        <h4 className={styles.title}>Сума поповнення</h4>
        <div className={styles.wrapSum}>
          <input
            autocomplete="off"
            name="sum"
            value={sum}
            onChange={chooseSum}
            className={styles.sum}
          />
          <div className={styles.hrn}>
            <Image alt="гриивня" src={hrn} quality={100} fill priority />
          </div>
        </div>
        <div className={styles.wrapBtn}>
          <button
            type="button"
            onClick={() => setSum(100)}
            className={styles.btnSum}
          >
            +100 грн
          </button>
          <button
            type="button"
            onClick={() => setSum(200)}
            className={styles.btnSum}
          >
            +200 грн
          </button>
          <button
            type="button"
            onClick={() => setSum(500)}
            className={styles.btnSum}
          >
            +500 грн
          </button>
          <button onClick={() => setSum(0)} className={styles.btnSum}>
            +інша сума
          </button>
        </div>
        <button
          type="submit"
          disabled={sum < 100 ? true : false}
          className={
            sum < 100
              ? styles.btnPay + " " + styles.disabled
              : styles.btnPay + " " + styles.active
          }
        >
          Підтримати
        </button>
      </form>
    </div>
  );
}
