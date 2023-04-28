import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();

    // only get method is accepted
    if (req.method === "GET") {
      const users = await User.find();
      return res.status(200).json({ status: true, users });
    } else {
      res
        .status(500)
        .json({ message: "HTTP method not valid only GET Accepted" });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Connection Failed...!" + error.message });
  }
}
