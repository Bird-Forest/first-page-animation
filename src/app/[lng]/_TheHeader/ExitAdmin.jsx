"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { RxExit } from "react-icons/rx";
import styles from "./Header.module.css";

export function ExitAdmin({ lng }) {
  const router = useRouter();

  return (
    <button
      onClick={() => signOut(router.push(`/${lng}/home`))}
      className={styles.btnExit}
    >
      <RxExit className={styles.iconExit} />
    </button>
  );
}
