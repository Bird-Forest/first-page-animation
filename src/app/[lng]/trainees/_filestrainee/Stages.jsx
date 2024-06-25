import React from "react";
import styles from "./Stages.module.css";
import { stages } from "./data/stages";
import StagesItem from "./StagesItem";
import { v4 as uuidv4 } from "uuid";

export default function Stages() {
  return (
    <section className={styles.stages}>
      <h2 className={styles.stageTitle}>Як долучитись до проєкту</h2>
      <ul className={styles.wrapList}>
        {stages.map((item) => (
          <StagesItem key={uuidv4()} item={item} />
        ))}
      </ul>
    </section>
  );
}
