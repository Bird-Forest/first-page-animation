"use client";

import { useField } from "formik";
import React from "react";
import styles from "../Modal.module.css";

export default function InputCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  // const errorClass = meta.touched && meta.error ? "error" : "";
  const state = field.checked;

  return (
    <li className={styles.wrapItem}>
      <div className={styles.checkItem}>
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
    </li>
  );
}
