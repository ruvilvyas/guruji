import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Atlas Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed", err);
    throw err;
  }
};

export default connectDB;
