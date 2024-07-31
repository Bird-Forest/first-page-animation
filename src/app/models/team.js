import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const teamShema = new mongoose.Schema(
  {
    speciality: String,
    group: [{ last: String, first: String, link: String }],
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Post = connection.model("Post", postShema);
