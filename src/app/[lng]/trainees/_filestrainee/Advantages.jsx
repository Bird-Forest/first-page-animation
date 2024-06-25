import React from "react";
import styles from "./Advantages.module.css";
import AdvantItem from "./AdvantItem";
import { v4 as uuidv4 } from "uuid";
import { advantages } from "./data/advantages";

export default function Advantages() {
  return (
    <section className={styles.advant}>
      <h2 className={styles.advantTitle}>Переваги стажування</h2>
      <ul className={styles.wrapList}>
        {advantages.map((item) => (
          <AdvantItem key={uuidv4()} item={item} />
        ))}
      </ul>
    </section>
  );
}
