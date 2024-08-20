"use client";

import { useField } from "formik";
import React from "react";
import styles from "./Form.module.css";

export default function FormInputInfo({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.wrapInput}>
      <label htmlFor={props.id || props.name} className={styles.label}>
        <p>
          {label}
          <span className={styles.red}>{" *"}</span>
        </p>

        <input
          {...field}
          {...props}
          placeholder={props.placeholder}
          className={
            meta.error
              ? styles.info + " " + styles.borderRed
              : styles.info + " " + styles.border
          }
        />
      </label>
      {meta.touched && meta.error ? (
        <p className={styles.errorMess}>{meta.error}</p>
      ) : null}
    </div>
  );
}
