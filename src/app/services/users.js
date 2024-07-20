"use server";

import { connectDB } from "../lib/mongodb";
import { User } from "../models/user";
import bcrypt from "bcrypt";

export async function loginAdmin(formData) {
  const { name, password } = Object.fromEntries(formData);
  try {
    const admin = await User.findOne({ name: name }).exec();

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    if (admin.pwd !== hash && admin.role !== "admin") {
      throw new Error("No user found.");
    }

    const data = JSON.parse(JSON.stringify(admin));

    console.log("Action", data);
    return data;
  } catch (e) {
    console.log("Action", e);
  }
}

// export const createAdmin = async () => {
//   try {
//     await connectDB();
//     const admin = await User.create([
//       {
//         name: "sara",
//         email: "sara@gmail.com",
//         pwd: hash,
//         role: "admin",
//       },
//     ]);
//     console.log("Action", admin);
//   } catch (e) {
//     console.log("User", e);
//   }
// };
