import React from "react";
import { auth } from "@/src/config/auth";
import { redirect } from "next/navigation";
import { Providers } from "./_filesadmin/Providers";

export default async function AdminLayout({ children, params: { lng } }) {
  const session = await auth();
  // console.log("SESSION", session);

  if (session === null) redirect(`/${lng}/auth`);
  return (
    <div>
      <Providers>{children}</Providers>
    </div>
  );
}
