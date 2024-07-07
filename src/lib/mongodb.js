const { MongoClient, ServerApiVersion } = require("mongodb");
const { MONGODB_URI } = process.env;
const uri = MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("baza").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// let cachedDb = null;

// export async function connectDB() {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   if (!client.isConnected()) {
//     await client.connect();
//   }

//   const db = client.db("my-database"); // Replace 'my-database' with your database name
//   cachedDb = db;
//   return db;
// }
