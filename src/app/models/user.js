import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    pwd: String,
    role: String,
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const User = connection.model("User", userSchema);
