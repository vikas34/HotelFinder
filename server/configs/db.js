import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
