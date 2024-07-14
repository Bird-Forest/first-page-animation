"use client";

import { useField } from "formik";
import React, { useState } from "react";
import styles from "../Modal.module.css";

export default function InputRadio({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "radio" });
  // const errorClass = meta.touched && meta.error ? "error" : "";
  const state = field.checked;

  return (
    <div className={styles.wrapRadio}>
      <div className={styles.radioItem}>
        <input
          className={
            state
              ? styles.checkBox + " " + styles.stateTrue
              : styles.checkBox + " " + styles.stateFalse
          }
          name={props.id || props.name}
          {...field}
          {...props}
        />
        <label htmlFor={props.id || props.name} className={styles.checkText}>
          {children}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <p className={styles.errorMess}>{meta.error}</p>
      ) : null}
    </div>
  );
}
