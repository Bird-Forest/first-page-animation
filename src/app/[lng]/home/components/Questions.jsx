"use client";

import React from "react";
import styles from "./Questions.module.css";
import { v4 as uuidv4 } from "uuid";
import questions from "./data/questions.json";
import QuestionItem from "./QuestionItem";

export default function Questions() {
  // const [isShow, setIsShow] = useState(false);

  // const [indx, setIndx] = useState(null);

  // const handleChange = (evt) => {
  //   console.log(evt.currentTarget.name);
  //   let id = evt.currentTarget.name;
  //   // setIsShow(!isShow);
  //   if (id === indx) {
  //     setIndx(null), setIsShow(false);
  //   } else {
  //     setIndx(id), setIsShow(true);
  //   }
  // };

  return (
    <section className={styles.question}>
      <h2 className={styles.questTitle}>FAQ</h2>
      <ul className={styles.wrapQuestions}>
        {questions.map((item) => {
          return <QuestionItem key={uuidv4()} item={item} />;
        })}
      </ul>
      <div className={styles.wrapBtn}>
        <button className={styles.questBtn}>Підтримати проєкт</button>
      </div>
    </section>
  );
}
