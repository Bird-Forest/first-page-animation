import mongoose from "mongoose";
import { uri } from "../lib/mongodb";
import { specList } from "./project";

const mentorSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
    email: String,
    tel: String,
    nick: String,
    link: String,
    agree: Boolean,
    speciality: { type: String, enum: specList },
    time: [String],
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Mentor = connection.model("Mentor", mentorSchema);
