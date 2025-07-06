import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ MongoDB connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/hotelfinder`);
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
