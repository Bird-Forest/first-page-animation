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

// import { signIn } from "@/src/config/auth";

// export async function loginAdmin(prevState, formData) {
//   try {
//     await signIn("credentials", formData);
//   } catch (error) {
//     if (error) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
//   redirect(`/${lng}/admin`);
// }

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
