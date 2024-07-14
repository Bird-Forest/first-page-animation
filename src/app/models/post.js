import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const postShema = new mongoose.Schema(
  {
    date: Date,
    title: String,
    url: String,
    text1: String,
    text2: String,
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Post = connection.model("Post", postShema);
