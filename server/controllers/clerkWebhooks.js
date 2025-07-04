import { json } from "express";
import User from "../models/user.js";
import { Webhook } from "svix";   //toGet user data

const clerkWebhooks = async (req, res) => {
  try {
    //Create a svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    //Getting Headers
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    //Verifying Header

    await whook.verify(json.stringify(req.body), headers);

    //Getting Data from Request Body

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + "" + data.last_name,
      image: data.image_url,
    };

    //Switch cases for different Events
    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }
      default:
        break;
    }
    res.json({ success: true, message: "webhook Received" });
  } catch (err) {
    console.log(err.message);
    res.json({ success: false, message: err.message })
  }
};

export default clerkWebhooks;