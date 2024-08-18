"use client";

import { useFormStatus } from "react-dom";

import React from "react";
import MainButton from "../../_Helper/MainButton";
import Spinner from "../../_Helper/Spinner";
import { signOut } from "next-auth/react";

export default function BtnOut() {
  const { pending } = useFormStatus();

  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <MainButton type="submit">
        {pending ? <Spinner /> : "sign out"}
      </MainButton>
    </form>
  );
}
