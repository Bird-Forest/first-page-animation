// import { connectToDatabase } from "../../lib/mongodb";

import { run } from "@/src/lib/mongodb";

export default async function getAll(req, res) {
  const db = await run();
  const data = await db.collection("projects").find({}).toArray();
  res.json(data);
}
