import ReviewItem from "../../../../home/_components/ReviewItem";
import { deleteReview, getReviewById } from "@/src/app/services/reviews";
import React from "react";
import BtnAction from "../../../_filesadmin/BtnAction";
import styles from "../../../_filesadmin/Admin.module.css";
import ReviewOverlay from "../../_filesreview/ReviewOverlay";

export default async function RemoveReviewPage({ params: { lng, id } }) {
  const data = await getReviewById({ id });

  return (
    <div className={styles.wrapContent}>
      <div className={styles.wrapRemoveItem}>
        <ReviewOverlay item={data} />
        <BtnAction item={data} id={id} formAction={deleteReview} lng={lng}>
          Видалити
        </BtnAction>
      </div>
    </div>
  );
}
