import React, { Suspense } from "react";
import Link from "next/link";
import { languages } from "../../i18n/settings";
import styles from "./_filesauth/Auth.module.css";
import AuthForm from "./_filesauth/AuthForm";
import Loading from "../_Helper/Loading";
import { createAdmin } from "../../services/users";

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function AuthPage({ params: { lng } }) {
  // const session = await auth();
  // console.log("AuthPage", session);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className={styles.auth}>
          <h4 className={styles.authTitle}>Авторизація</h4>
          <div className={styles.wrapRegister}>
            <AuthForm />
          </div>
          <Link href={`/${lng}/about`} className={styles.authLink}>
            Повернутись
          </Link>
        </section>
      </Suspense>
    </>
  );
}
