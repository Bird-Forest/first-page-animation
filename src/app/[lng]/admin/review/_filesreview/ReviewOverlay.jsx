import React from "react";
import styles from "./Review.module.css";
import ReviewItem from "../../../home/_components/ReviewItem";

export default function ReviewOverlay({ item }) {
  return (
    <div className={styles.wrapOverlay}>
      <ReviewItem item={item} />
    </div>
  );
}
