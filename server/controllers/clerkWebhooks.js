import { Webhook } from "svix";
import User from "../models/user.js";

const clerkWebhooks = async (req, res) => {
  try {
    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    console.log("👉 Headers:", headers);

    // Get raw payload as Buffer
    const payload = req.body;
    const body = payload.toString(); // convert to string

    console.log("👉 Raw body:", body);

    // ✅ Verify signature (for real webhooks)
    const evt = wh.verify(body, headers);
    console.log("✅ Signature verified");

    const { type, data } = evt;

    console.log("👉 Event type:", type);

    const userData = {
      _id: data.id,
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      email: data.email_addresses[0].email_address,
      image: data.image_url,
      recentSearchedCities: [],
    };

    switch (type) {
      case "user.created":
      case "user.updated": {
        const user = await User.findByIdAndUpdate(data.id, userData, {
          upsert: true,
          new: true,
        });
        console.log("✅ User upserted:", user);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("✅ User deleted:", data.id);
        break;
      }

      default:
        console.log("⚠️ Unhandled event type:", type);
    }

    res.json({ success: true, message: "Webhook processed" });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export default clerkWebhooks;
