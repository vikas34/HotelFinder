import User from "../models/user.js";
import { Webhook } from "svix"; //toGet user data

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const payload = JSON.parse(req.body); // if using express.raw
    await whook.verify(req.body, headers);

    const { data, type } = payload;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
      recentSearchedCities: [],
    };

    switch (type) {
      case "user.created":
      case "user.updated": {
        const user = await User.findByIdAndUpdate(
          data.id,
          userData,
          { upsert: true, new: true }
        );
        console.log(`✅ User upserted (${type}):`, user);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("✅ User deleted:", data.id);
        break;
      }

      default:
        console.log("⚠️ Unhandled event type:", type);
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (err) {
    console.log("❌ Webhook error:", err.message);
    res.json({ success: false, message: err.message });
  }
};


export default clerkWebhooks;
