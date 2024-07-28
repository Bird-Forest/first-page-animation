import mongoose from "mongoose";
import { uri } from "../lib/mongodb";

const developerSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
    email: String,
    city: String,
    country: String,
    nick: String,
    link: String,
    course: String,
    experience: String,
    motivation: String,
    resource: String,
    rule: Boolean,
    agree: Boolean,
    speciality: [String],
  },
  { versionKey: false, timestamps: true }
);

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
