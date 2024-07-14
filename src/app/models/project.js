import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const specList = [
  "Project Manager",
  "Design UX/UI",
  "Front-end",
  "Back-end",
  "Quality Assurance",
  "Full Stack",
];

const projectSchema = new mongoose.Schema(
  {
    status: {
      color: String,
      text: String,
    },
    name: String,
    web: {
      type: String,
      default: "Сайт в розробці",
    },
    start: {
      type: Date,
    },
    duration: String,
    difficult: Number,
    team: [
      {
        title: { type: String, enum: specList },
        developers: {
          type: [String],
          default: undefined,
        },
      },
    ],
    imageUrl: String,
  },
  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Project = connection.model("Project", projectSchema);
