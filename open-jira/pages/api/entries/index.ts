// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Entry, { IEntry } from "@/models/Entry";
import { db } from "@/database";

type Data = { message: string } | IEntry[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);
    default:
      return res.status(400).json({ message: "Endpoint no existe" });
    case "POST":
      return newEntry(req, res);
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();

  const entries = await Entry.find().sort({ createdAt: "ascending" });

  await db.disconnect();

  res.status(200).json(entries);
};

const newEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { description = "" } = req.body;

  const entry = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();

    await entry.save();

    await db.disconnect();

    return res.status(201).json(entry);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo salio mal, revisar consola del servidor" });
  }
};
