import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const reviewShcema = new mongoose.Schema(
  {
    name: String,
    foto: String,
    link: String,
    message: String,
    status: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Review = connection.model("Review", reviewShcema);
