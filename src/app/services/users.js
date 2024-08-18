"use server";

import { User } from "../models/user";
import bcrypt from "bcrypt";

export async function loginAdmin(prevState, formData) {
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
    // console.log("Action", data);
    return {
      message: "Success",
    };
  } catch (e) {
    console.log("Action", e);

    return {
      message: "No access",
    };
  }
}

// export const createAdmin = async () => {
//   try {
//     await connectDB();
//     const admin = await User.create([
//       {
//         name: "",
//         email: "",
//         pwd: hash,
//         role: "admin",
//       },
//     ]);
//     console.log("Action", admin);
//   } catch (e) {
//     console.log("User", e);
//   }
// };
