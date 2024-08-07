import mongoose from "mongoose";
import { uri } from "../lib/mongodb";
import { specialties } from "../constant/constant";

const developerSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
    email: String,
    city: String,
    country: String,
    nick: String,
    link: String,
    resource: String,
    rule: Boolean,
    agree: Boolean,
    foto: String,
    speciality: { type: String, enum: specialties },
    projects: [],
  },
  { versionKey: false, timestamps: true }
);

developerSchema.add({ foto: String });

const connection = mongoose.createConnection(uri);
export const Developer = connection.model("Developer", developerSchema);

//  {
//     virtuals: {
//       fullName: {
//         get() {
//           return this.name.last + " " + this.name.first;
//         },
//         set(v) {
//           this.name.last = v.substr(0, v.indexOf(" "));
//           this.name.first = v.substr(v.indexOf(" ") + 1);
//         },
//       },
//     },
//   },
//   {
//     toJSON: { virtuals: true }, // <-- include virtuals in `JSON.stringify()`
//   }

// const developerSchema = new mongoose.Schema(
//   {
//     first: String,
//     last: String,
//     email: String,
//     city: String,
//     country: String,
//     nick: String,
//     link: String,
//     course: String,
//     experience: String,
//     motivation: String,
//     resource: String,
//     rule: Boolean,
//     agree: Boolean,
//     speciality: { type: String, enum: specList },
//     projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
//   },
//   { versionKey: false, timestamps: true }
// );
