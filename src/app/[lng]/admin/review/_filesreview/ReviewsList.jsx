"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./Review.module.css";
import ReviewString from "./ReviewString";
import Loading from "../../../_Helper/Loading";

export default function ReviewsList({ reviews, lng }) {
  console.log(reviews);
  const [items, setItems] = useState(reviews);
  const { pending } = useFormStatus();
  return (
    <div className={styles.wrapFilterList}>
      <div className={styles.filter}>FILTER</div>
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
