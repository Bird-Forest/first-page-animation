"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { ExitAdmin } from "./ExitAdmin";

// import { signOut } from "@/src/config/auth";
// import { SignOut } from "./SignOut";

export default function NavAdmin({ lng }) {
  const pathname = usePathname();
  console.log(pathname);
  const segments = pathname.split("/");
  console.log(segments);
  const page = segments[2];
  console.log(page);

  return (
    <div>
      <Link
        href={`/${lng}/admin`}
        className={page === "admin" ? styles.active : styles.link}
      >
        Admin
      </Link>
      {/* <ExitAdmin lng={lng} /> */}
      {/* <Link href="#" onClick={() => signOut({ callbackUrl: `/${lng}/home` })}>
        Log Out
      </Link> */}
    </div>
  );
}
