"use client";

import { useFormStatus } from "react-dom";

import React from "react";
import MainButton from "../../_Helper/MainButton";
import Spinner from "../../_Helper/Spinner";

export default function AuthBtn() {
  const { pending } = useFormStatus();
  return (
    <MainButton type="submit">{pending ? <Spinner /> : "Save"}</MainButton>
  );
}
