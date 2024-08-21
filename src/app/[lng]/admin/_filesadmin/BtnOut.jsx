"use client";

import React from "react";
import MainButton from "../../_Helper/MainButton";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BtnOut({ lng }) {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await signOut();
        router.push(`/${lng}/auth`);
      }}
    >
      <MainButton type="submit">sign out</MainButton>
    </form>
  );
}
