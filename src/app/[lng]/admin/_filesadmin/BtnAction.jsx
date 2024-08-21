"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Admin.module.css";
import { usePathname } from "next/navigation";
import { useFormStatus } from "react-dom";
import Spinner from "../../_Helper/Spinner";

export default function BtnAction({ item, id, formAction, children, lng }) {
  const [mess, setMess] = useState("");
  const { pending } = useFormStatus();

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
          {pending ? <Spinner /> : children}
        </button>
      </form>
      <div className={styles.wrapMessage}>
        <p className={styles.textMess}>{mess}</p>
        <Link href={`/${lng}/admin/${page}`} className={styles.editLink}>
          Перейти до списку
        </Link>
      </div>
    </div>
  );
}
