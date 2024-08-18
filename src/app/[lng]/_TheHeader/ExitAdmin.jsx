// "use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { RxExit } from "react-icons/rx";
import styles from "./Header.module.css";

export function ExitAdmin({ lng }) {
  // const router = useRouter();

  return (
    <form
      action={async () => {
        // "use server";
        await signOut();
        redirect(`/${lng}/home`);
      }}
    >
      <button type="submit" className={styles.btnExit}>
        <RxExit className={styles.iconExit} />
      </button>
    </form>
    // <button
    //   onClick={() => signOut(router.push(`/${lng}/home`))}
    //   className={styles.btnExit}
    // >
    //   <RxExit className={styles.iconExit} />
    // </button>
  );
}
