import React from "react";
import { Providers } from "../_Helper/Providers";

export default async function AdminLayout({ children }) {
  return <Providers>{children}</Providers>;
}
