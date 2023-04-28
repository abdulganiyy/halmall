import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();

    // only get method is accepted
    if (req.method === "GET") {
      const categories = await Category.find();
      return res.status(200).json({ status: true, categories });
    } else if (req.method === "POST") {
      if (await Category.findOne({ name: req.body.name })) {
        return res
          .status(400)
          .json({ status: "fail", message: "Name already exists" });
      }
      const newCategory = new Category({ ...req.body });

      const savedCategory = await newCategory.save();

      return res
        .status(201)
        .json({ status: "success", category: savedCategory });
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
