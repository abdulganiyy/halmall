import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/Product";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();

    // only get method is accepted
    if (req.method === "GET") {
      const product = await Product.findById(req.query.id).populate(
        "seller",
        "-password"
      );
      return res.status(200).json({ status: true, product });
    } else if (req.method === "PATCH") {
    } else {
      res.status(500).json({ message: "HTTP method not valid" });
    }
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: "Connection Failed...!" + error.message });
  }
}
