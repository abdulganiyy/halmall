import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();

    let id = req.query.id;

    // only get method is accepted
    if (req.method === "GET") {
      const user = await User.findById(id);

      user.password = undefined;

      return res.status(200).json({ status: true, user });
    } else if (req.method === "PATCH") {
      const user = await User.findByIdAndUpdate(
        id,
        {
          ...req.body,
        },
        { new: true }
      );

      user.password = undefined;

      return res.status(200).json({ status: true, user });
    } else if (req.method === "DELETE") {
      await User.findByIdAndDelete(id);

      return res.status(204).json({ status: true });
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
