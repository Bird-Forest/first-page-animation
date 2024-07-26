"use client";

import { useFormState } from "react-dom";
import styles from "./Auth.module.css";
import AuthBtn from "./AuthBtn";
import { loginAdmin } from "@/src/app/services/users";
import Link from "next/link";

const initialState = {
  message: "",
};
// *** Функція запиту адміна - клієнтський варіант
export default function FormAdmin({ lng }) {
  const [state, formAction] = useFormState(loginAdmin, initialState);
  // console.log("State", state);

  return (
    <form action={formAction} className={styles.wrapSignin}>
      <label className={styles.labelField}>
        Name
        <input name="name" type="name" required className={styles.inputField} />
      </label>
      <label className={styles.labelField}>
        Password
        <input
          name="password"
          type="password"
          required
          className={styles.inputField}
        />
      </label>
      <div>
        <p aria-live="polite" role="status" className={styles.authLink}>
          {state?.message}
        </p>
        {state?.message === "Success" ? (
          <Link href={`/${lng}/admin`}>to admin</Link>
        ) : (
          <AuthBtn />
        )}
      </div>
    </form>
  );
}
