import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/database";
import mongoose from "mongoose";
import Entry, { IEntry } from "@/models/Entry";

type Data = { message: string } | IEntry;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido. " });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);

    case "GET":
      return getEntryById(req, res);

    default:
      return res.status(400).json({ message: "Metodo inexistente" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "No hay entrada con ese id." });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );

    await db.disconnect();

    res.status(200).json(updatedEntry!);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res
      .status(400)
      .json({ message: "Hubo un error al actualizar la entrada" });
  }
};

const getEntryById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entryToFind = await Entry.findById(id);

    if (!entryToFind) {
      await db.disconnect();
      return res.status(400).json({ message: "No hay entrada con ese id." });
    }

    await db.disconnect();

    res.status(200).json(entryToFind);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res
      .status(400)
      .json({ message: "Hubo un error al buscar la entrada" });
  }
};
