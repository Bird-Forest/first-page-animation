import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

export const specList = [
  "UI/UX designer",
  "Backend",
  "Frontend",
  "Full Stack",
  "QA Manual",
  "Project Manager",
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
    designer: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    backend: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    frontend: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    fullstack: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    manual: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    project: [
      {
        type: mongoose.ObjectId,
        ref: "Developer",
      },
    ],
    // team: [
    //   {
    //     title: { type: String, enum: specList },
    //     developers: [{ type: mongoose.Types.ObjectId, ref: "Developer" }],
    //   },
    // ],
    // team: [
    //   {
    //     title: { type: String, enum: specList },
    //     developers: {
    //       type: [String],
    //       default: undefined,
    //     },
    //   },
    // ],
    imageUrl: String,
  },

  { versionKey: false, timestamps: true }
);

const connection = mongoose.createConnection(uri);
export const Project = connection.model("Project", projectSchema);
