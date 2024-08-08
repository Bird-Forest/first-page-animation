"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Review.module.css";
import ReviewString from "./ReviewString";
import Loading from "../../../_Helper/Loading";
import {
  BsSortNumericDown,
  BsSortNumericDownAlt,
  BsXCircleFill,
  BsFillCircleFill,
  BsSearch,
} from "react-icons/bs";
import {
  getReviewByName,
  getReviewsFalse,
  getReviewSortBy19,
  getReviewSortBy91,
  getReviewsTrue,
} from "@/src/app/services/reviews";

export default function ReviewsList({ reviews, lng }) {
  const [items, setItems] = useState(reviews);
  const [word, setWord] = useState("");
  const { pending } = useFormStatus();

  const onClear = () => {
    setItems(reviews);
    setWord(" ");
  };

  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.wrapFilter}>
        <div className={styles.wrapFilterSearch}>
          <input
            autoFocus
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="пошук ..."
            className={styles.inputSearch}
          />
          <button
            type="button"
            onClick={async () => {
              const sortName = await getReviewByName(word);
              setItems(sortName);
            }}
            className={styles.revBtn}
          >
            <BsSearch className={styles.iconSetting} />
          </button>
        </div>
        <div className={styles.wrapFilterBtn}>
          <button
            type="button"
            onClick={async () => {
              const sort19 = await getReviewSortBy19();
              setItems(sort19);
            }}
            className={styles.revBtn}
          >
            <BsSortNumericDown className={styles.iconSetting} />
          </button>
          <button
            type="button"
            onClick={async () => {
              const sort91 = await getReviewSortBy91();
              setItems(sort91);
            }}
            className={styles.revBtn}
          >
            <BsSortNumericDownAlt className={styles.iconSetting} />
          </button>
          <button
            type="button"
            onClick={async () => {
              const sortFalse = await getReviewsFalse();
              setItems(sortFalse);
            }}
            className={styles.revBtn}
          >
            <BsFillCircleFill
              className={styles.revIvonStatus}
              style={{ fill: "#ff1744" }}
            />
          </button>
          <button
            type="button"
            onClick={async () => {
              const sortTrue = await getReviewsTrue();
              setItems(sortTrue);
            }}
            className={styles.revBtn}
          >
            <BsFillCircleFill
              className={styles.revIvonStatus}
              style={{ fill: "#099e56" }}
            />
          </button>
          <button type="button" onClick={onClear} className={styles.revBtn}>
            <BsXCircleFill className={styles.iconSetting} />
          </button>
        </div>
      </div>
      <ul className={styles.wrapList}>
        {pending ? (
          <Loading />
        ) : (
          items.map((item) => (
            <ReviewString key={uuidv4()} item={item} lng={lng} />
          ))
        )}
      </ul>
    </div>
  );
}
