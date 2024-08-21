import React from "react";
import { Providers } from "../_Helper/Providers";
import { auth } from "@/src/config/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children, params: { lng } }) {
  const session = await auth();
  // console.log("SESSION", session);

  if (session === null) redirect(`/${lng}/auth`);
  return <Providers>{children}</Providers>;
}
