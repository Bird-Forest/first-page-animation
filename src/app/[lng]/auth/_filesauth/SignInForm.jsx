"use client";

import React from "react";
import styles from "./Auth.module.css";
import AuthBtn from "./AuthBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignInForm({ lng }) {
  const router = useRouter();
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const res = await signIn("credentials", {
      name: formData.get("name"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res && !res.error) {
      router.push(`/${lng}/admin`);
    } else {
      console.log("RES", res);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.wrapSignin}>
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
        <AuthBtn />
      </div>
    </form>
  );
}
