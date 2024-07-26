import React from "react";
import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import AidButton from "./AidButton";
import LanguageBtn from "./LanguageBtn";
import Menu from "./Menu";
import { auth } from "@/src/config/auth";
import NavAdmin from "./NavAdmin";
import { getTime } from "date-fns";

export default async function BazaHeader({ lng }) {
  const session = await auth();
  // console.log(session);

  const date = getTime(new Date());
  const expires = session.expires;
  const dateEnd = getTime(new Date(expires));
  // console.log(dateEnd);

  return (
    <header id="top" className={styles.topbg}>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <HeaderLogo />
          <Menu lng={lng} />
          {dateEnd >= date ? <NavAdmin lng={lng} /> : <AidButton lng={lng} />}
          <LanguageBtn lng={lng} />
        </div>
      </div>
    </header>
  );
}
