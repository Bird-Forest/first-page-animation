"use server";

import { Mentor } from "../models/mentor";

export const createMentor = async (values) => {
  console.log("ACT VALUES", values);
  try {
    const ment = await Mentor.create(values);
    // console.log("Action", ment);
    return {
      message: "Успішно оновлено",
    };
  } catch (e) {
    console.log("User", e);
    return {
      message: "Відбулася помилка",
    };
  }
};
