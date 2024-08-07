import React from "react";
import ReviewForm from "../_filesreview/ReviewForm";
import styles from "../../_filesadmin/Admin.module.css";
import { getReviewById, updateReview } from "@/src/app/services/reviews";

export default async function ReviewByIdPage({ params: { id, lng } }) {
  const data = await getReviewById({ id });
  return (
    <div className={styles.wrapContent}>
      <ReviewForm review={data} formAction={updateReview} lng={lng} />
    </div>
  );
}
