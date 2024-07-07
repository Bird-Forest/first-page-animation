// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";

// require("dotenv").config();
// import "dotenv/config";

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;
console.log(uri);

// const client = new MongoClient(MONGODB_URI);
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
}).connect();

console.log(client);
export async function GET() {
  try {
    const database = client.db("baza");
    const result = await database.collection("projects").find().toArray();

    // Query for a movie that has the title 'Back to the Future'
    // const query = { title: "Back to the Future" };

    //   console.log(movie);
    //    const results = await client.db().collection("todos").find().toArray();
    console.log("RESULT", result);
    res.json({
      status: "success",
      code: 200,
      data: {
        projects: result,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// getAll();
