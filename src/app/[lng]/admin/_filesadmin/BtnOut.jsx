"use client";

import { useFormStatus } from "react-dom";

import React from "react";
import MainButton from "../../_Helper/MainButton";
import Spinner from "../../_Helper/Spinner";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BtnOut({ lng }) {
  const router = useRouter();
  const { pending } = useFormStatus();

  return (
    <form
      action={async () => {
        await signOut();
        router.push(`/${lng}/auth`);
      }}
    >
      <MainButton type="submit">
        {pending ? <Spinner /> : "sign out"}
      </MainButton>
    </form>
  );
}
