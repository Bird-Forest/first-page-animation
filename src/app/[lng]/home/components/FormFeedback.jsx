import React from "react";
import styles from "./Form.module.css";
import Form from "./Form";

export default function FormFeedback() {
  return (
    <section className={styles.feedback}>
      <div className={styles.wrapForm}>
        <h3 className={styles.formTitle}>Форма зворотного зв’язку</h3>
        <Form />
      </div>
    </section>
  );
}
