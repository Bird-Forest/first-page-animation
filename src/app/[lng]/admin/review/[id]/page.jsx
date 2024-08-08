import React from "react";
import ReviewForm from "../_filesreview/ReviewForm";
import styles from "../../_filesadmin/Admin.module.css";
import { getReviewById, updateReview } from "@/src/app/services/reviews";
import { revalidatePath } from "next/cache";

export default async function ReviewByIdPage({ params: { id, lng } }) {
  const data = await getReviewById({ id });
  revalidatePath(`/${lng}/admin/review/${id}`, "page");
  return (
    <div className={styles.wrapContent}>
      <ReviewForm review={data} formAction={updateReview} lng={lng} />
    </div>
  );
}
