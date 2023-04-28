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
      const products = await Product.find().populate("category", "name");
      return res.status(200).json({ status: true, products });
    } else if (req.method === "POST") {
      if (await Product.findOne({ name: req.body.name })) {
        return res
          .status(400)
          .json({ status: "fail", message: "Product already exists" });
      }
      const newProduct = new Product({ ...req.body });

      const savedProduct = await newProduct.save();

      return res.status(201).json({ status: "success", product: savedProduct });
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
