"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function BtnAction({ item, formAction, children, lng, page }) {
  const [mess, setMess] = useState("");
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
