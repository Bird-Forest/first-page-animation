"use client";

import React, { useState } from "react";
import styles from "./Auth.module.css";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import MainButton from "../../_Helper/MainButton";

export default function SignInForm({ lng }) {
  const [mess, setMess] = useState(" ");
  const [auth, setAuth] = useState(false);
  // const { pending } = useFormStatus();
  const router = useRouter();
  // console.log(auth);
  // console.log("PENDING", pending);

  const handleSubmit = async (formData) => {
    // evt.preventDefault();
    // const formData = new FormData(evt.currentTarget);
    const res = await signIn("credentials", {
      name: formData.get("name"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      // console.log(res);
      setMess("Авторизація успішна");
      setAuth(true);
      router.push(`/${lng}/admin`);
    } else {
      // console.log("RES", res);
      setMess("Помилка авторизації");
      setAuth(true);
    }
  };
  return (
    <form action={handleSubmit} className={styles.wrapSignin}>
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
        <MainButton type="submit">sign in</MainButton>
      </div>
      {!auth ? " " : <p className={styles.authLink}>{mess}</p>}
    </form>
  );
}
