import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";


dotenv.config();
connectDB();

const app = express();
app.use(cors());

// ✅ Clerk auth middleware for protected routes (optional)
app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);

// ✅ Clerk webhook must use raw body!
app.post(
  "/api/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhooks
);

// ✅ JSON body for normal routes AFTER webhook route
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working fine!");
});

// ✅ Test DB route
// app.get("/api/test-create-user", async (req, res) => {
//   try {
//     const user = await User.create({
//       _id: "test_" + Date.now(),
//       username: "Test User",
//       email: "test@example.com",
//       image: "https://example.com/avatar.png",
//       recentSearchedCities: ["Delhi"],
//     });
//     res.json({ success: true, user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: err.message });
//   }
// });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
