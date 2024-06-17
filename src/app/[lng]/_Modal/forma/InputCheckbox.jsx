"use client";

import { useField } from "formik";
import React from "react";
import styles from "../Modal.module.css";

export default function InputCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  // const errorClass = meta.touched && meta.error ? "error" : "";

  return (
    <li className={styles.checkItem}>
      <input
        className={styles.checkBox}
        name={props.id || props.name}
        {...field}
        {...props}
      />
      <label htmlFor={props.id || props.name} className={styles.checkText}>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <p className={styles.errorMess}>{meta.error}</p>
      ) : null}
    </li>
  );
}
