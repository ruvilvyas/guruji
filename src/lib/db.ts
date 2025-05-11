import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/foodiesta";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; 
  await mongoose.connect(MONGODB_URI);
  console.log("MongoDB Connected");
};

export default connectDB;
