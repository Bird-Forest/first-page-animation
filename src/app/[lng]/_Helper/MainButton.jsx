import React from "react";
import styles from "./Helper.module.css";

export default function MainButton({ children, ...props }) {
  return (
    <div className={styles.wrapBtn}>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
        aria-label={props.ariaLabel}
        {...props}
        className={styles.mainBtn}
      >
        {children}
      </button>
    </div>
  );
}
