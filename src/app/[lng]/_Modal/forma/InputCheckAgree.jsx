"use client";

import { useField } from "formik";
import React from "react";
import styles from "../Modal.module.css";

export default function InputCheckAgree({ children, ...props }) {
  const [field, meta] = useField({ ...props });
  // const errorClass = meta.touched && meta.error ? "error" : "";
  console.log(meta.error);
  return (
    <>
      <div className={styles.checkItem}>
        <input
          className={styles.checkBox}
          name={props.id || props.name}
          {...field}
          {...props}
        />
        <label htmlFor={props.id || props.name} className={styles.agreeText}>
          {children}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <p className={styles.errorMess}>{meta.error}</p>
      ) : null}
    </>
  );
}
