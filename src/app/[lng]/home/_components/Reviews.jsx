"use client";

import React from "react";
import styles from "./Reviews.module.css";
import { v4 as uuidv4 } from "uuid";
// import { reviews } from "./data/reviews";
import ReviewItem from "./ReviewItem";
import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useTranslation } from "@/src/app/i18n/client";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Reviews({ reviews, lng }) {
  const { t } = useTranslation(lng);
  const [[page, direction], setPage] = useState([0, 0]);
  const item = wrap(0, reviews.length, page);
  const totalPage = reviews.length;
  const itemId = Number(item + 1);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section className={styles.reviews}>
      <h3 className={styles.reviewTitle}>{t("review_title")}</h3>

      <motion.div
        key={page}
        item={reviews[item + 1]}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
        className={styles.wrapList}
      >
        <AnimatePresence key={uuidv4()} initial={false} custom={direction}>
          <ReviewItem item={reviews[item]} />
        </AnimatePresence>
      </motion.div>
      <div className={styles.pagination}>
        <button className={styles.prev} onClick={() => paginate(-1)}>
          <SlArrowLeft className={styles.arrow} />
        </button>
        <div className={styles.wrap}>
          <p className={styles.counter}>{itemId}</p>
          <p className={styles.counter}>{"/"}</p>
          <p className={styles.counter}>{totalPage}</p>
        </div>
        <button className={styles.next} onClick={() => paginate(1)}>
          <SlArrowRight className={styles.arrow} />
        </button>
      </div>
    </section>
  );
}
