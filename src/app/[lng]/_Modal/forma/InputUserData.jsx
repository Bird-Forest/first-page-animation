"use client";

import { useField } from "formik";
import React from "react";
import styles from "../Modal.module.css";

export default function InputUserData({ label, ...props }) {
  const [field, meta] = useField(props);
  // const errorClass = meta.touched && meta.error ? "error" : "";
  return (
    <div className={styles.wrapInput}>
      <label htmlFor={props.id || props.name} className={styles.labelData}>
        {label} <span className={styles.red}>{"  *"}</span>
      </label>
      <input
        className={
          meta.error
            ? styles.inputData + " " + styles.borderRed
            : styles.inputData + " " + styles.border
        }
        {...field}
        {...props}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <p className={styles.errorMess}>{meta.error}</p>
      ) : null}
    </div>
  );
}
