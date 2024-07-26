"use client";

import React from "react";
import ErrorPage from "@/src/app/[lng]/_Helper/ErrorPage";

export default function Error({ error, reset }) {
  return <ErrorPage error={error} reset={reset} />;
}
