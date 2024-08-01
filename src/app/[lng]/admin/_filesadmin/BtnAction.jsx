"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Admin.module.css";
import { usePathname } from "next/navigation";

export default function BtnAction({ item, id, formAction, children, lng }) {
  const [mess, setMess] = useState("");

  const path = usePathname();
  const segments = path.split("/");
  const page = segments[3];

  return (
    <div className={styles.wrapBtnForm}>
      <form
        action={async () => {
          const message = await formAction(item, id);

          setMess(message.message);
        }}
      >
        <button type="submit" className={styles.btnForm}>
          {children}
        </button>
      </form>
      <div className={styles.wrapMessage}>
        <p className={styles.textMess}>{mess}</p>
        <Link href={`/${lng}/admin/${page}`} className={styles.textMess}>
          Перейти до списку
        </Link>
      </div>
    </div>
  );
}
