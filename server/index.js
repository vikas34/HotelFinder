import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";


connectDB();

const app = express();
app.use(cors()); //Enable cross origin Resourse Sharing

//MiddleWare
app.use(express.json());
app.use(clerkMiddleware());

//api to listen to clerk Webhooks

import bodyParser from "body-parser";
app.use("/api/clerk", bodyParser.raw({ type: "*/*" })); // raw body for Clerk
app.post("/api/clerk", clerkWebhooks); // use POST not use() here

app.get("/", (req, res) => res.send("Api is Working fine"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running on PORT No ${PORT}`);
});
