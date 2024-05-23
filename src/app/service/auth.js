"use server";

import { redirect } from "next/navigation";

// import { SignUpSchema, formState } from "../lib/validSignUp";

export async function signup(formData) {
  const { name, email, message } = Object.fromEntries(formData);

  const response = await fetch("http://localhost:3300/api/admins/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
  const user = await response.json();
  console.log(user);
  // Call the provider or db to create a user...
  redirect("/home");
}
