import React, { Suspense } from "react";
// import Link from "next/link";
import styles from "./_filesauth/Auth.module.css";
import SignInForm from "./_filesauth/SignInForm";
import Loading from "../_Helper/Loading";

export default async function AuthPage({ params: { lng } }) {
  return (
    <Suspense fallback={<Loading />}>
      <section className={styles.auth}>
        <h4 className={styles.authTitle}>Авторизація</h4>
        <div className={styles.wrapRegister}>
          <SignInForm lng={lng} />
        </div>
        {/* <Link href={`/${lng}/about`} className={styles.authLink}>
          Повернутись
        </Link> */}
      </section>
    </Suspense>
  );
}
