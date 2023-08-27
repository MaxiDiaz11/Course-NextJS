import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import { IProduct } from "@/interfaces";
import { Product } from "@/models";

type Data = { message: string } | IProduct;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      await getProductBySlug(req, res);
    default:
      res.status(400).end(`Method ${req.method} Not Allowed - Bad Request`);
  }
}

const getProductBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { slug = "" } = req.query;

  await db.connect();
  const product = await Product.findOne({ slug }).select("-__v").lean();
  await db.disconnect();

  if (product) {
    return res.status(200).json(product);
  }

  return res.status(404).json({ message: "Product Not Found" });
};
