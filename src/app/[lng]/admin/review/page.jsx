import React from "react";
import ReviewsList from "./_filesreview/ReviewsList";
import { getReviews } from "@/src/app/services/reviews";
import { revalidatePath } from "next/cache";
import styles from "../_filesadmin/Admin.module.css";

export default async function ListOfReviewsPage({ params: { lng } }) {
  const data = await getReviews();
  revalidatePath(`/${lng}/admin/review`, "page");
  return (
    <div className={styles.wrapContent}>
      <ReviewsList reviews={data} lng={lng} />
    </div>
  );
}
