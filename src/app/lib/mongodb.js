import mongoose from "mongoose";

export const uri = process.env.MONGODB_URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(uri, clientOptions);
    if (connection.readyState === 1) {
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
