"use client";

import React from "react";
import styles from "./Helper.module.css";
import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function MainButton({ children, ...props }) {
  const { pending } = useFormStatus();
  // console.log("PENDING MAIN", pending);
  return (
    <div className={styles.wrapBtn}>
      <button
        onClick={props.onClick}
        // disabled={props.disabled}
        type={props.type}
        aria-label={props.ariaLabel}
        {...props}
        className={styles.mainBtn}
        disabled={pending}
      >
        {pending ? <Spinner /> : children}
      </button>
    </div>
  );
}
