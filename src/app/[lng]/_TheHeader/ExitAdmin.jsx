"use client";

import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function ExitAdmin({ lng }) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  console.log("Exit", callbackUrl);
  return (
    <button onClick={() => signOut({ redirectTo: `/${lng}/home` })}>
      Exit
    </button>
  );
}
