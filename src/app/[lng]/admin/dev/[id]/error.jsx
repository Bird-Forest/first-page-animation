"use client";

import React from "react";
import ErrorPage from "../../../_Helper/ErrorPage";

export default function Error({ error, reset }) {
  return <ErrorPage error={error} reset={reset} />;
}
