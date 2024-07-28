import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const mentorSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
    email: String,
    tel: String,
    nick: String,
    link: String,
    agree: Boolean,
    speciality: [String],
    time: [String],
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Mentor = connection.model("Mentor", mentorSchema);
